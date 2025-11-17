const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

// THEME ----------------------------------------------------
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// MOBILE MENU ---------------------------------------------
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// SECTION OBSERVER ANIMATIONS ------------------------------
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// SMOOTH SCROLL -------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// ACTIVE NAV-LINK HIGHLIGHT -------------------------------
const navAnchorLinks = document.querySelectorAll(".nav-links a");
const pageSections = document.querySelectorAll("section[id]");

function highlightActiveLink() {
    let scrollY = window.scrollY;

    // Fix for last section when scrolled near bottom
    if ((window.innerHeight + scrollY) >= document.documentElement.scrollHeight - 50) {
        navAnchorLinks.forEach(link => link.classList.remove("active"));
        const lastSection = pageSections[pageSections.length - 1].id;
        const lastLink = document.querySelector('.nav-links a[href="#' + lastSection + '"]');
        if (lastLink) lastLink.classList.add("active");
        return;
    }

    pageSections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;
        const id = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navAnchorLinks.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add("active");
        }
    });
}

window.addEventListener("scroll", highlightActiveLink);
highlightActiveLink();