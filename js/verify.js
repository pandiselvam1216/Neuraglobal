document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let initialId = urlParams.get('certificateId') || urlParams.get('id');
    if (initialId) {
        try {
            initialId = decodeURIComponent(initialId);
        } catch (e) {
            // fallback if decoding fails
        }
    }

    const inputField = document.getElementById('cert-id-input');
    const verifyBtn = document.getElementById('verify-btn');
    const loadingState = document.getElementById('loading-state');
    const resultSuccess = document.getElementById('result-success');
    const resultFailure = document.getElementById('result-failure');

    // Safety: bail out if required elements are missing
    if (!inputField || !verifyBtn || !loadingState || !resultSuccess || !resultFailure) return;

    if (initialId) {
        inputField.value = initialId;
        verifyCertificate(initialId);
    }

    verifyBtn.addEventListener('click', () => {
        const id = inputField.value.trim();
        if (id) {
            verifyCertificate(id);
        }
    });

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const id = inputField.value.trim();
            if (id) {
                verifyCertificate(id);
            }
        }
    });

    async function verifyCertificate(id) {
        // Reset states
        loadingState.style.display = 'block';
        resultSuccess.style.display = 'none';
        resultFailure.style.display = 'none';
        resultSuccess.classList.remove('show');
        resultFailure.classList.remove('show');

        try {
            const response = await fetch('data/certificates.json');
            if (!response.ok) {
                throw new Error('Could not fetch certificates data');
            }
            const data = await response.json();
            
            // Allow case-insensitive search
            const cert = data.find(c => c.certificateId.toLowerCase() === id.toLowerCase());

            // Simulate slight delay for loading state visibility
            setTimeout(() => {
                loadingState.style.display = 'none';
                if (cert) {
                    showSuccess(cert);
                } else {
                    showFailure();
                }
            }, 500);
            
        } catch (error) {
            console.error('Error verifying certificate:', error);
            loadingState.style.display = 'none';
            showFailure();
        }
    }

    function showSuccess(cert) {
        document.getElementById('cert-id-display').textContent = cert.certificateId;
        document.getElementById('cert-name-display').textContent = cert.name;
        document.getElementById('cert-reg-display').textContent = cert.regNo || '-';
        document.getElementById('cert-college-display').textContent = cert.college || '-';
        document.getElementById('cert-program-display').textContent = cert.program;
        document.getElementById('cert-domain-display').textContent = cert.domain;
        document.getElementById('cert-project-display').textContent = cert.project;
        document.getElementById('cert-issue-display').textContent = new Date(cert.issueDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
        
        const statusEl = document.getElementById('cert-status-display');
        statusEl.textContent = cert.status;
        if (cert.status === 'Verified') {
            statusEl.className = 'text-green';
        } else {
            statusEl.className = 'text-red';
        }
        
        resultSuccess.style.display = 'block';
        setTimeout(() => {
            resultSuccess.classList.add('show');
        }, 50);
    }

    function showFailure() {
        resultFailure.style.display = 'block';
        setTimeout(() => {
            resultFailure.classList.add('show');
        }, 50);
    }
});
