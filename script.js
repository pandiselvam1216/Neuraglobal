// NeuraGlobal Website Script
// Fixed version with proper variable initialization

// ============================================
// SPECIAL DAYS POPUP LOGIC
// ============================================

// Special Days Calendar Data
const specialDays = {
    "01-01": { title: "🎉 Happy New Year!", wish: "Wishing you a year filled with new hopes and opportunities.", reason: "Marks the beginning of the new calendar year." },
    "01-04": { title: "📖 World Braille Day", wish: "Celebrating inclusivity and accessibility for all.", reason: "Birth anniversary of Louis Braille, inventor of the Braille script." },
    "01-11": { title: "🛑 Human Trafficking Awareness", wish: "Standing together for freedom and dignity.", reason: "Raises awareness about the crime of human trafficking." },
    "01-12": { title: "🇮🇳 National Youth Day", wish: "Empowering the youth to build a better tomorrow.", reason: "Birth anniversary of Swami Vivekananda, inspiring the youth of India." },
    "01-15": { title: "⚔️ Indian Army Day", wish: "Saluting the brave guardians of our nation.", reason: "Commemorates the day Field Marshal K.M. Cariappa took over as the first Commander-in-Chief." },
    "01-24": { title: "📚 Int. Day of Education", wish: "Celebrating education as a human right.", reason: "Highlights the role of education for peace and development." },
    "01-25": { title: "🗳️ National Voters’ Day", wish: "Your vote is your voice. Celebrate democracy.", reason: "Marks the foundation day of the Election Commission of India." },
    "01-26": { title: "🇮🇳 Happy Republic Day!", wish: "Honouring India’s unity, pride, and freedom.", reason: "Marks the adoption of the Indian Constitution in 1950." },
    "01-30": { title: "🕊️ Martyrs’ Day", wish: "Remembering the sacrifices for our freedom.", reason: "Observed on the death anniversary of Mahatma Gandhi." },
    "02-04": { title: "🎗️ World Cancer Day", wish: "Uniting to fight against cancer.", reason: "Raises awareness to encourage prevention, detection, and treatment." },
    "02-11": { title: "🔬 Women in Science Day", wish: "Celebrating women leading innovation in science.", reason: "Promotes full and equal access to and participation in science for women." },
    "02-13": { title: "📻 World Radio Day", wish: "Celebrating the power of radio to connect lives.", reason: "Highlights the unique ability of radio to reach the widest audience." },
    "02-14": { title: "❤️ Happy Valentine’s Day", wish: "Spreading love, kindness, and compassion.", reason: "A day dedicated to celebrating love and affection." },
    "02-20": { title: "⚖️ World Social Justice Day", wish: "Promoting fairness and justice for everyone.", reason: "Recognizes the need to promote social justice." },
    "02-21": { title: "🗣️ Int. Mother Language Day", wish: "Celebrating linguistic diversity and heritage.", reason: "Promotes awareness of linguistic and cultural diversity." },
    "02-28": { title: "🔬 National Science Day", wish: "Celebrating the spirit of scientific inquiry.", reason: "Commemorates the discovery of the Raman Effect by C.V. Raman." },
    "03-01": { title: "🦋 Zero Discrimination Day", wish: "Embracing diversity and rejecting discrimination.", reason: "Promotes equality before the law and in practice." },
    "03-03": { title: "🦁 World Wildlife Day", wish: "Protecting our planet’s biodiversity.", reason: "Celebrates and raises awareness of the world's wild animals and plants." },
    "03-08": { title: "👩 International Women’s Day", wish: "Celebrating the achievements of women everywhere.", reason: "Highlights the social, economic, cultural, and political achievements of women." },
    "03-14": { title: "π Pi Day", wish: "Celebrating the beauty of mathematics.", reason: "Recognizes the mathematical constant Pi (3.14)." },
    "03-15": { title: "🛍️ Consumer Rights Day", wish: "Empowering consumers with knowledge and rights.", reason: "Raises awareness about consumer rights and needs." },
    "03-20": { title: "😊 Int. Day of Happiness", wish: "Spreading joy and positivity to all.", reason: "Recognizes the relevance of happiness and well-being." },
    "03-21": { title: "🌳 World Forest Day", wish: "Preserving our green lungs for the future.", reason: "Raises awareness of the importance of all types of forests." },
    "03-22": { title: "💧 World Water Day", wish: "Valuing water, our most precious resource.", reason: "Focuses on the importance of freshwater." },
    "03-23": { title: "☁️ World Meteorological Day", wish: "For safety, climate action, and sustainability.", reason: "Commemorates the establishment of the World Meteorological Organization." },
    "03-27": { title: "🎭 World Theatre Day", wish: "Celebrating the art of storytelling on stage.", reason: "Promotes the art form of theatre worldwide." },
    "04-01": { title: "🃏 April Fool’s Day", wish: "A day for laughter and harmless pranks.", reason: "A day celebrated with practical jokes and hoaxes." },
    "04-07": { title: "🏥 World Health Day", wish: "Prioritizing health for everyone, everywhere.", reason: "Marks the founding of the World Health Organization (WHO)." },
    "04-10": { title: "🌿 World Homeopathy Day", wish: "Exploring holistic approaches to healing.", reason: "Birth anniversary of Dr. Samuel Hahnemann, founder of Homeopathy." },
    "04-14": { title: "🇮🇳 Ambedkar Jayanti", wish: "Honouring the architect of the Indian Constitution.", reason: "Birth anniversary of Dr. B.R. Ambedkar." },
    "04-18": { title: "🏛️ World Heritage Day", wish: "Preserving our shared cultural history.", reason: "Raises awareness about the diversity of cultural heritage." },
    "04-22": { title: "🌍 Earth Day", wish: "Protecting our planet for future generations.", reason: "Supports environmental protection." },
    "04-23": { title: "📚 World Book Day", wish: "Celebrating the joy of reading and knowledge.", reason: "Promotes reading, publishing, and copyright." },
    "04-25": { title: "🦟 World Malaria Day", wish: "Uniting to end malaria for good.", reason: "Highlights global efforts to control malaria." },
    "05-01": { title: "🛠️ International Labour Day", wish: "Honouring the contributions of workers worldwide.", reason: "Celebrates the achievements of the labour movement." },
    "05-03": { title: "📰 Press Freedom Day", wish: "Standing for truth and freedom of expression.", reason: "Reminds governments of the need to respect their commitment to press freedom." },
    "05-08": { title: "🚑 World Red Cross Day", wish: "Celebrating the spirit of humanitarian aid.", reason: "Birth anniversary of Henry Dunant, founder of the Red Cross." },
    "05-11": { title: "🚀 National Technology Day", wish: "Celebrating India’s technological prowess.", reason: "Commemorates the Pokhran nuclear tests of 1998." },
    "05-12": { title: "👩‍⚕️ Int. Nurses Day", wish: "Thanking nurses for their compassionate care.", reason: "Birth anniversary of Florence Nightingale." },
    "05-15": { title: "👨‍👩‍👧‍👦 Int. Day of Families", wish: "Cherishing the bonds that keep us together.", reason: "Promotes awareness of issues relating to families." },
    "05-17": { title: "📡 World Telecommunication Day", wish: "Connecting the world through technology.", reason: "Marks the founding of the International Telecommunication Union." },
    "05-31": { title: "🚭 World No Tobacco Day", wish: "Choosing health over habits.", reason: "Encourages a 24-hour period of abstinence from all forms of tobacco consumption." },
    "06-05": { title: "🌱 World Environment Day", wish: "Acting now to restore our ecosystem.", reason: "Encourages worldwide awareness and action for the environment." },
    "06-12": { title: "🛑 No Child Labour Day", wish: "Protecting every child’s right to childhood.", reason: "Raises awareness to prevent child labour." },
    "06-14": { title: "🩸 World Blood Donor Day", wish: "Give blood, give life.", reason: "Thanks voluntary, unpaid blood donors for their life-saving gifts." },
    "06-20": { title: "🏕️ World Refugee Day", wish: "Standing with refugees in solidarity.", reason: "Honours the strength and courage of people who have been forced to flee their home country." },
    "06-21": { title: "🧘 International Yoga Day", wish: "Uniting mind, body, and spirit.", reason: "Celebrates the physical, mental, and spiritual practice of Yoga." },
    "06-23": { title: "🏛️ UN Public Service Day", wish: "Celebrating value of public service.", reason: "Highlights the contribution of public service." },
    "07-01": { title: "🩺 National Doctor’s Day", wish: "Honouring the saviours of lives.", reason: "Birth anniversary of Dr. B.C. Roy." },
    "07-11": { title: "👥 World Population Day", wish: "Focusing on global population issues.", reason: "Raises awareness of global population issues." },
    "07-15": { title: "🛠️ World Youth Skills Day", wish: "Empowering youth with skills for the future.", reason: "Celebrates the strategic importance of equipping young people with skills." },
    "07-18": { title: "✊ Mandela Day", wish: "Inspiring change through service.", reason: "Birth anniversary of Nelson Mandela." },
    "07-28": { title: "🌿 Nature Conservation Day", wish: "Preserving our natural resources.", reason: "Raises awareness about protecting natural resources." },
    "08-01": { title: "🌐 World Wide Web Day", wish: "Celebrating the web that connects us all.", reason: "Honours the invention of the World Wide Web." },
    "08-07": { title: "🧵 National Handloom Day", wish: "Weaving the pride of India’s heritage.", reason: "Honours the handloom weavers in the country." },
    "08-12": { title: "🎉 International Youth Day", wish: "Celebrating the potential of youth.", reason: "Draws attention to a given set of cultural and legal issues surrounding youth." },
    "08-15": { title: "🇮🇳 Happy Independence Day", wish: "Celebrating the spirit of freedom and unity.", reason: "Commemorates India's independence from British rule in 1947." },
    "08-19": { title: "📸 World Photography Day", wish: "Capturing the beauty of the world.", reason: "Celebrates the art, craft, science, and history of photography." },
    "08-23": { title: "🚀 National Space Day", wish: "Celebrating India’s leap to the moon.", reason: "Commemorates the success of the Chandrayaan-3 mission." },
    "08-29": { title: "🏆 National Sports Day", wish: "Staying fit, playing fair.", reason: "Birth anniversary of Major Dhyan Chand." },
    "09-05": { title: "🧑‍🏫 Teachers’ Day", wish: "Thanking the mentors who shape our future.", reason: "Birth anniversary of Dr. Sarvepalli Radhakrishnan." },
    "09-08": { title: "📚 Int. Literacy Day", wish: "Empowering minds through literacy.", reason: "Highlights the importance of literacy to individuals and societies." },
    "09-14": { title: "🕉️ Hindi Diwas", wish: "Celebrating our linguistic heritage.", reason: "Marks the day Hindi was adopted as an official language of India." },
    "09-15": { title: "⚙️ Engineers’ Day", wish: "Innovating for a better tomorrow.", reason: "Birth anniversary of M. Visvesvaraya." },
    "09-21": { title: "🕊️ Int. Day of Peace", wish: "Building a world of harmony and peace.", reason: "Dedicated to strengthening the ideals of peace." },
    "09-27": { title: "✈️ World Tourism Day", wish: "Exploring the world, connecting cultures.", reason: "Fosters awareness of the importance of tourism." },
    "10-01": { title: "👴 Int. Day of Older Persons", wish: "Honouring wisdom and experience.", reason: "Raises awareness of opportunities and challenges faced by ageing populations." },
    "10-02": { title: "🕊️ Gandhi Jayanti", wish: "Celebrating truth and non-violence.", reason: "Birth anniversary of Mahatma Gandhi." },
    "10-04": { title: "🐾 Animal Welfare Day", wish: "Speaking up for those who cannot.", reason: "Raises status of animals in order to improve welfare standards." },
    "10-10": { title: "🧠 World Mental Health Day", wish: "Prioritizing mental well-being for all.", reason: "Raises awareness of mental health issues." },
    "10-15": { title: "🎓 World Students’ Day", wish: "Inspiring the leaders of tomorrow.", reason: "Birth anniversary of Dr. A.P.J. Abdul Kalam." },
    "10-16": { title: "🍞 World Food Day", wish: "Working towards zero hunger.", reason: "Commemorates the founding of the Food and Agriculture Organization." },
    "10-24": { title: "🇺🇳 United Nations Day", wish: "Promoting peace and cooperation.", reason: "Marks the anniversary of the entry into force of the UN Charter." },
    "10-31": { title: "🤝 National Unity Day", wish: "Standing united as one nation.", reason: "Birth anniversary of Sardar Vallabhbhai Patel." },
    "11-09": { title: "⚖️ Legal Services Day", wish: "Justice for all, free and fair.", reason: "Commemorates the enactment of the Legal Services Authorities Act." },
    "11-11": { title: "🎓 National Education Day", wish: "Education is the key to progress.", reason: "Birth anniversary of Maulana Abul Kalam Azad." },
    "11-14": { title: "🎈 Children’s Day", wish: "Nurturing the future with love.", reason: "Birth anniversary of Jawaharlal Nehru." },
    "11-16": { title: "🤝 Int. Day for Tolerance", wish: "Respecting and accepting differences.", reason: "Generates public awareness of the dangers of intolerance." },
    "11-19": { title: "🚽 World Toilet Day", wish: "Sanitation is a human right.", reason: "Inspires action to tackle the global sanitation crisis." },
    "11-26": { title: "📜 Constitution Day", wish: "Upholding the values of our republic.", reason: "Commemorates the adoption of the Constitution of India." },
    "12-01": { title: "🎗️ World AIDS Day", wish: "Showing support, ending stigma.", reason: "Unites people in the fight against HIV." },
    "12-02": { title: "🏭 Pollution Control Day", wish: "Breathing clean, living green.", reason: "Commemorates the Bhopal Gas Tragedy." },
    "12-05": { title: "🌱 World Soil Day", wish: "Keep soil alive, protect biodiversity.", reason: "Focuses on the importance of healthy soil." },
    "12-07": { title: "🇮🇳 Armed Forces Flag Day", wish: "Honouring our soldiers' sacrifice.", reason: "Dedicated to collecting funds for the welfare of Armed Forces personnel." },
    "12-10": { title: "✊ Human Rights Day", wish: "Dignity, freedom, and justice for all.", reason: "Commemorates the adoption of the Universal Declaration of Human Rights." },
    "12-25": { title: "🎄 Merry Christmas", wish: "Spreading joy, peace, and love.", reason: "Celebrates the birth of Jesus Christ." },
    "12-31": { title: "🎆 New Year’s Eve", wish: "Reflecting on the past, welcoming the future.", reason: "The last day of the year." }
};

// Check for Special Day
function checkSpecialDay() {
    console.log("Checking for special days...");
    const today = new Date();
    // Use local time
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;
    // console.log(`Today's key: ${dateKey}`); // Debug

    // TESTING ONLY: Uncomment to force a specific day
    // const dateKey = "01-26"; 

    const event = specialDays[dateKey];

    if (event) {
        console.log(`Special Day Found: ${event.title}`);
        const storageKey = `specialDaySeen_${dateKey}_${today.getFullYear()}`;
        const hasSeen = localStorage.getItem(storageKey);

        if (!hasSeen) {
            showSpecialDayPopup(event, storageKey);
        } else {
            console.log("Special day popup already seen today.");
        }
    }
}

function showSpecialDayPopup(event, storageKey) {
    // Create Modal HTML
    const modalHTML = `
        <div id="special-day-modal" class="special-day-modal">
            <div class="special-day-content">
                <button class="close-modal-btn">&times;</button>
                <div class="special-day-header">
                    <h2 class="special-day-title">${event.title}</h2>
                </div>
                <div class="special-day-body">
                    <p class="special-day-wish">${event.wish}</p>
                    <div class="special-day-divider"></div>
                    <p class="special-day-reason">💡 <strong>Did You Know?</strong> ${event.reason}</p>
                </div>
                <div class="special-day-footer">
                    <button class="btn btn-primary btn-sm close-modal-action">Start Exploring</button>
                </div>
            </div>
        </div>
    `;

    // Append to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Initial check to ensure element exists
    setTimeout(() => {
        const modal = document.getElementById('special-day-modal');
        if (!modal) return;

        const closeBtn = modal.querySelector('.close-modal-btn');
        const actionBtn = modal.querySelector('.close-modal-action');

        // Show after delay
        modal.classList.add('active');

        // Close Handler
        function closeModal() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
            }, 500); // Wait for transition
            localStorage.setItem(storageKey, 'true');
        }

        closeBtn.addEventListener('click', closeModal);
        actionBtn.addEventListener('click', closeModal);
    }, 2000);
}



// Initialize scroll behavior after DOM is ready
function initScrollBehavior() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        // Add scrolled class to hero for compression
        if (scrollY > 100) {
            hero.classList.add('scrolled');
        } else {
            hero.classList.remove('scrolled');
        }
    });
}

// Initialize Marquee for clients section
function initMarquee() {
    // Marquee is handled via CSS animation
    // This function ensures the client cards are duplicated for seamless scroll
    const marquee = document.querySelector('.clients-marquee');
    if (!marquee) return;

    // Pause animation on hover
    marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
}

// Hero Headline Word Rotation Animation
function initHeroAnimation() {
    const words = document.querySelectorAll('.hero-word');
    if (!words.length) return;

    let currentIndex = 0;
    const totalWords = words.length;
    const animationInterval = 3000; // 3 seconds per word

    function rotateWords() {
        // Get current and next indices
        const currentWord = words[currentIndex];
        const nextIndex = (currentIndex + 1) % totalWords;
        const nextWord = words[nextIndex];

        // Exit current word (slide up and fade out)
        currentWord.classList.remove('active');
        currentWord.classList.add('exit');

        // Enter next word (slide up into position)
        nextWord.classList.remove('exit');
        nextWord.classList.add('active');

        // Clean up exit class after animation completes
        setTimeout(() => {
            currentWord.classList.remove('exit');
        }, 500);

        // Update index
        currentIndex = nextIndex;
    }

    // Start the rotation
    setInterval(rotateWords, animationInterval);
}

// Cursor proximity button animation (Google-style)
function initProximityButtons() {
    const buttons = document.querySelectorAll('.btn-google-primary, .btn-google-secondary');
    const proximityDistance = 100; // pixels

    document.addEventListener('mousemove', function (e) {
        buttons.forEach(btn => {
            const rect = btn.getBoundingClientRect();
            const btnCenterX = rect.left + rect.width / 2;
            const btnCenterY = rect.top + rect.height / 2;

            const distance = Math.sqrt(
                Math.pow(e.clientX - btnCenterX, 2) +
                Math.pow(e.clientY - btnCenterY, 2)
            );

            if (distance < proximityDistance && distance > 0) {
                btn.classList.add('proximity');
                // Magnetic pull effect
                const pullStrength = 0.15;
                const deltaX = (e.clientX - btnCenterX) * pullStrength;
                const deltaY = (e.clientY - btnCenterY) * pullStrength;
                btn.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
            } else {
                btn.classList.remove('proximity');
                btn.style.transform = '';
            }
        });
    });
}



// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}


// Scroll Animations - KPIT Style Enhanced
function initScrollAnimations() {
    // Add animation classes to sections and cards
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });

    // Add slide-up class to cards for staggered animation
    document.querySelectorAll('.product-card, .service-card, .value-card, .client-card').forEach((card, index) => {
        card.classList.add('slide-up');
        card.style.transitionDelay = `${index * 0.08}s`;
    });

    // Add slide-in-left/right for alternating elements
    document.querySelectorAll('.testimonial-badge').forEach((badge, index) => {
        badge.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
    });

    const fadeElements = document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger counter animation for rating values
                if (entry.target.classList.contains('rating-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Observe rating cards for counter animation
    document.querySelectorAll('.rating-card').forEach(card => {
        observer.observe(card);
    });

    // New observer for value cards to unobserve after animation
    const valueCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                valueCardObserver.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.value-card').forEach(card => {
        valueCardObserver.observe(card);
    });
}

// Custom Cursor Logic - Advanced Physics & Interactions
function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    // Safety check
    if (!cursorDot || !cursorOutline) return;

    // Hide cursor initially until first mouse move
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';

    let prevX = 0;
    let prevY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let mouseHasMoved = false;

    // Mouse Move
    window.addEventListener('mousemove', function (e) {
        cursorX = e.clientX;
        cursorY = e.clientY;

        // Show cursor on first mouse move
        if (!mouseHasMoved) {
            mouseHasMoved = true;
            cursorDot.style.opacity = '1';
            cursorOutline.style.opacity = '1';
            prevX = cursorX;
            prevY = cursorY;
        }

        // Dot follows instantly
        cursorDot.style.left = `${cursorX}px`;
        cursorDot.style.top = `${cursorY}px`;

        // Physics for Outline (Jelly Effect)
        // We handle this in the animation loop for smoothness
    });

    // Animation Loop for Smooth Physics
    function animateCursor() {
        if (!cursorOutline) return;

        // Calculate velocity
        const dx = cursorX - prevX;
        const dy = cursorY - prevY;

        prevX += dx * 0.15; // Smooth follow lerp
        prevY += dy * 0.15;

        // Instant positions for outline base
        cursorOutline.style.left = `${prevX}px`;
        cursorOutline.style.top = `${prevY}px`;

        // Calculate velocity magnitude and angle for deformation
        const speed = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        // Stretch factor (Jelly effect)
        const stretch = Math.min(1.5, 1 + speed * 0.005);
        const squish = 1 / stretch; // constant volume

        // Apply transform: Center + Rotate + Stretch
        // Use translate(-50%, -50%) to keep center alignment
        cursorOutline.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${stretch}, ${squish})`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Interactive Hover
    document.querySelectorAll('a, button, input, textarea, select, .btn, .product-card, .service-card').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });

    // Scroll Reactivity
    let isScrolling;
    window.addEventListener('scroll', function () {
        document.body.classList.add('scrolling');

        window.clearTimeout(isScrolling);

        isScrolling = setTimeout(function () {
            document.body.classList.remove('scrolling');
        }, 100);
    });

    // Click Ripple Effect
    document.addEventListener('click', function (e) {
        const ripple = document.createElement('div');
        ripple.classList.add('cursor-ripple');
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        // Remove after animation
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
}

// Counter Animation for Numbers (KPIT Style)
function animateCounter(element) {
    const valueEl = element.querySelector('.rating-value');
    if (!valueEl || valueEl.dataset.animated) return;

    valueEl.dataset.animated = 'true';
    const text = valueEl.textContent;
    const match = text.match(/(\d+\.?\d*)/);
    if (!match) return;

    const endValue = parseFloat(match[1]);
    const suffix = text.replace(match[1], '');
    const duration = 1500;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = (endValue * easeOut).toFixed(1);

        valueEl.textContent = currentValue + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    valueEl.textContent = '0.0' + suffix;
    requestAnimationFrame(updateCounter);
}


// Particle Canvas Animation
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const colors = [
        'rgba(33, 150, 243, 0.6)',   // Blue
        'rgba(229, 57, 53, 0.6)',    // Red
        'rgba(67, 160, 71, 0.6)',    // Green
        'rgba(255, 193, 7, 0.6)',    // Yellow
        'rgba(26, 35, 126, 0.4)'     // Navy
    ];

    function resizeCanvas() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }

    function createParticles() {
        particles = [];
        const particleCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            });
        }
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            // Draw connections
            particles.forEach((p2, j) => {
                if (i === j) return;
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(26, 35, 126, ${0.1 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    createParticles();
    drawParticles();

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });
}

// Scroll Progress Bar
function initScrollProgress() {
    // Initialize Marquee
    initMarquee();

    // Scroll Progress Bar
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Product Cards Data
const products = [
    {
        name: 'Modello',
        description: 'AI-powered modeling platform for business simulations and predictions',
        icon: 'fas fa-chart-bar'
    },
    {
        name: 'Chatzapp',
        description: 'Intelligent chatbot platform for customer engagement and support',
        icon: 'fas fa-comments'
    },
    {
        name: 'AgriRate',
        description: 'Agricultural analytics and rating system for crop yield optimization',
        icon: 'fas fa-tractor'
    },
    {
        name: 'NeuraCRM',
        description: 'AI-enhanced CRM with predictive analytics and automation',
        icon: 'fas fa-users'
    },
    {
        name: 'NeuraBills',
        description: 'Automated invoicing and payment processing system',
        icon: 'fas fa-file-invoice-dollar'
    },
    {
        name: 'NeuraInfo',
        description: 'Intelligent data extraction and web scraping platform',
        icon: 'fas fa-database'
    },
    {
        name: 'NeuraFlow',
        description: 'Social media and messaging automation across platforms',
        icon: 'fas fa-stream'
    },
    {
        name: 'NeuraConvert',
        description: 'Conversion optimization and lead nurturing automation',
        icon: 'fas fa-bullseye'
    },
    {
        name: 'NeuraJobs',
        description: 'AI-powered recruitment and talent matching platform',
        icon: 'fas fa-user-tie'
    },
    {
        name: 'NeuraAnalytics',
        description: 'Advanced business intelligence and data visualization',
        icon: 'fas fa-chart-pie'
    },
    {
        name: 'NeuraMeet',
        description: 'Smart meeting scheduling and virtual conference platform',
        icon: 'fas fa-video'
    },
    {
        name: 'NeuraDocuments',
        description: 'Document processing and intelligent form automation',
        icon: 'fas fa-file-contract'
    },
    {
        name: 'NeuraAttendance',
        description: 'Biometric and AI-powered attendance tracking system',
        icon: 'fas fa-fingerprint'
    },
    {
        name: 'NeuraFeedbacks',
        description: 'Sentiment analysis and customer feedback management',
        icon: 'fas fa-poll'
    }
];

// Initialize Product Cards
function initProductCards() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        productCard.innerHTML = `
            <div class="product-icon">
                <i class="${product.icon}"></i>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
        `;
        productsGrid.appendChild(productCard);

        // Add visible class with staggered delay for animation effect
        setTimeout(() => {
            productCard.classList.add('visible');
        }, 100 + (index * 50));
    });
}

// Services Data
const services = [
    {
        name: 'AI Solutions & Automation',
        description: 'End-to-end AI implementation, from machine learning models to robotic process automation, tailored to your business processes.',
        icon: 'fas fa-brain'
    },
    {
        name: 'Web & App Development',
        description: 'Enterprise-grade web applications and mobile apps built with scalability, security, and performance as core principles.',
        icon: 'fas fa-code'
    },
    {
        name: 'Digital Marketing',
        description: 'Data-driven digital marketing strategies with measurable ROI, leveraging automation for personalized customer journeys.',
        icon: 'fas fa-bullhorn'
    },
    {
        name: 'Business & Digital Transformation',
        description: 'Holistic transformation programs that reimagine business models, processes, and customer experiences for the digital age.',
        icon: 'fas fa-sync-alt'
    },
    {
        name: 'Innovation Consulting',
        description: 'Strategic guidance on technology adoption, innovation frameworks, and digital roadmap development for sustainable growth.',
        icon: 'fas fa-lightbulb'
    },
    {
        name: 'Industry 4.0 Coaching',
        description: 'Specialized coaching for manufacturing and industrial clients on implementing IoT, AI, and automation technologies.',
        icon: 'fas fa-industry'
    }
];

// Initialize Service Cards
function initServiceCards() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;

    services.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card fade-in';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.name}</h3>
            <p class="service-description">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);

        // Add visible class with staggered delay for animation effect
        setTimeout(() => {
            serviceCard.classList.add('visible');
        }, 100 + (index * 50));
    });
}

// Clients Data
const clients = [
    { name: 'KMF Nandhini', location: 'Karnataka', icon: 'fas fa-industry' },
    { name: 'Skanda IT Systems', location: 'Karnataka', icon: 'fas fa-server' },
    { name: 'SinXtechnologies', location: 'Karnataka', icon: 'fas fa-microchip' },
    { name: 'Neuton Automation', location: 'Tamil Nadu', icon: 'fas fa-robot' },
    { name: 'FarmLinkX', location: 'Tamil Nadu', icon: 'fas fa-leaf' },
    { name: 'SARA', location: 'Tamil Nadu', icon: 'fas fa-building' }
];

// Initialize Client Marquee (Infinite Scroll)
function initClientMarquee() {
    const clientsMarquee = document.querySelector('.clients-marquee');
    if (!clientsMarquee) return;

    // Create client cards
    const createClientCards = () => {
        let html = '';
        clients.forEach(client => {
            html += `
                <div class="client-card">
                    <div class="client-logo">
                        <i class="${client.icon}"></i>
                    </div>
                    <h3 class="client-name">${client.name}</h3>
                    <p class="client-location">${client.location}</p>
                </div>
            `;
        });
        return html;
    };

    // Duplicate content for seamless infinite scroll
    clientsMarquee.innerHTML = createClientCards() + createClientCards();
}

// Contact Form Handler with Modal Selection
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('contact-modal');
    const modalOverlay = modal?.querySelector('.modal-overlay');
    const modalClose = modal?.querySelector('.modal-close');
    const emailOption = document.getElementById('email-option');
    const whatsappOption = document.getElementById('whatsapp-option');

    let formData = { name: '', email: '', message: '' };

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.message = document.getElementById('message').value;

        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Show modal for contact method selection
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close modal handlers
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Email option
    if (emailOption) {
        emailOption.addEventListener('click', function (e) {
            e.preventDefault();
            const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
            const mailtoLink = `mailto:neuraglobalindia@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
            closeModal();
            contactForm.reset();
        });
    }

    // WhatsApp option
    if (whatsappOption) {
        whatsappOption.addEventListener('click', function (e) {
            e.preventDefault();
            const whatsappMessage = encodeURIComponent(`Hello NeuraGlobal,\n\nI'm ${formData.name} (${formData.email}).\n\n${formData.message}`);
            const whatsappLink = `https://wa.me/918111093310?text=${whatsappMessage}`;
            window.open(whatsappLink, '_blank');
            closeModal();
            contactForm.reset();
        });
    }

    // Close modal on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });
}

// Add scroll-based header shadow (Pearlax style)
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initialize animations on page load
window.addEventListener('load', function () {
    // Add visible class to hero section immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('visible');
    }
});

// DOM Content Loaded (Moved to end to avoid TDZ)
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initScrollBehavior();       // Initialize hero scroll behavior
    initProximityButtons();     // Initialize button proximity effects
    initHeroAnimation();        // Initialize hero headline word rotation
    initMobileMenu();
    initProductCards();
    initServiceCards();
    initClientMarquee();
    checkSpecialDay();          // Initialize Special Days Popup
    initContactForm();
    initScrollProgress();
    initBackToTop();
    initCustomCursor();
    initParticleCanvas();       // Call particle canvas (safe if canvas does not exist)
    // Initialize scroll animations LAST
    initScrollAnimations();
});