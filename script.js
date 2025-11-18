// ===========================
// 🔗 Scroll suave em navegação
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// =====================================
// 👀 Animação de entrada ao fazer scroll
// =====================================
const revealElements = document.querySelectorAll(
    '.project-card, .skill-category, .contact-item, .highlight-item'
);

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-show');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    el.classList.add('reveal-hidden');
    revealObserver.observe(el);
});

// ========================
// ✨ Hover — links de projeto
// ========================
document.querySelectorAll('.project-link').forEach(link => {
    link.style.transition = 'transform .3s ease';
    link.addEventListener('mouseenter', () => link.style.transform = 'translateX(5px)');
    link.addEventListener('mouseleave', () => link.style.transform = 'translateX(0)');
});

// ===============================
// 🎯 Sistema de Filtro de Projetos
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    const filterProjects = filterValue => {
        cards.forEach(card => {
            const category = card.dataset.category;

            const show = filterValue === 'all' || category?.includes(filterValue);

            card.classList.toggle('hidden-card', !show);
            card.classList.toggle('visible-card', show);
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            filterProjects(filter);
        });
    });
});

// ===========================
// 🔢 Animação dos contadores
// ===========================
const animateCounter = (el, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);

    const step = () => {
        start += increment;

        if (start < target) {
            el.textContent = Math.floor(start) + (target > 10 ? '+' : '');
            requestAnimationFrame(step);
        } else {
            el.textContent = target + (target > 10 ? '+' : '');
        }
    };
    step();
};

const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-number').forEach(stat => {
                if (!stat.dataset.animated) {
                    const targetValue = Number(stat.textContent);
                    stat.textContent = '0';
                    animateCounter(stat, targetValue);
                    stat.dataset.animated = 'true';
                }
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats, .project-stats')
    .forEach(sec => statObserver.observe(sec));

// ==============================
// 🪄 Efeito de paralaxe no Hero
// ==============================
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const heroImage = document.querySelector('.hero-image');
    const heroStats = document.querySelector('.hero-stats');

    heroImage && (heroImage.style.transform = `translateY(${y * 0.1}px)`);
    heroStats && (heroStats.style.transform = `translateY(${y * 0.05}px)`);
});

// ==========================================
// ⚙️ Hover — Ícones das tecnologias
// ==========================================
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => icon.style.transform = 'scale(1.2) rotate(8deg)');
    icon.addEventListener('mouseleave', () => icon.style.transform = 'scale(1) rotate(0)');
});

// =====================================
// 📌 Destaque automático no menu ativo
// =====================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const offset = section.offsetTop - 180;
        if (scrollY >= offset) current = section.id;
    });

    navLinks.forEach(link => {
        const isActive = link.getAttribute('href').substring(1) === current;

        link.style.fontWeight = isActive ? '700' : '500';
        link.style.color = isActive ? 'var(--primary-color)' : 'inherit';
    });
});

// =====================================
// 🖥 Logs
// =====================================
console.log('🚀 Portfolio de Márcio Gil carregado com sucesso!');
console.log('💼 Desenvolvedor Full Stack & AI Engineer');
console.log('♿ Comprometido com acessibilidade digital');
console.log('🧠 Especialista em soluções com IA');
