// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada para elementos ao fazer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todos os cards de projeto e categorias de habilidades
document.querySelectorAll('.project-card, .skill-category, .contact-item, .highlight-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Efeito de hover nos links de projeto
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Adicionar transição suave aos links de projeto
document.querySelectorAll('.project-link').forEach(link => {
    link.style.transition = 'transform 0.3s ease';
});

// Sistema de Filtros de Projetos
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Função para filtrar projetos
    function filterProjects(filterValue) {
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');
            if (filterValue === 'all' || (categories && categories.includes(filterValue))) {
                card.style.display = 'block';
                card.style.opacity = '0';
                card.style.transform = 'scale(0.96) translateY(20px)';
                card.classList.add('modern-card-highlight');
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1) translateY(0)';
                }, 120);
                setTimeout(() => {
                    card.classList.remove('modern-card-highlight');
                }, 600);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.96) translateY(-20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
// Efeito de hover nos tags modernos
document.querySelectorAll('.project-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 2px 8px #4338ca33';
        this.style.transform = 'scale(1.08)';
    });
    tag.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
        this.style.transform = 'scale(1)';
    });
});
    }

    // Event listeners para botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adiciona active class ao botão clicado
            this.classList.add('active');
            
            // Aplica o filtro
            const filterValue = this.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });

    // Aplicar transições aos cards
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});

// Animação de contagem para estatísticas
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (target > 10 ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target > 10 ? '+' : '');
        }
    }
    
    updateCounter();
}

// Inicializar animações de contador quando visível
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (!stat.dataset.animated) {
                    const targetValue = parseInt(stat.textContent);
                    stat.textContent = '0';
                    animateCounter(stat, targetValue);
                    stat.dataset.animated = 'true';
                }
            });
        }
    });
}, { threshold: 0.5 });

// Observar seções de estatísticas
document.querySelectorAll('.hero-stats, .project-stats').forEach(section => {
    statObserver.observe(section);
});

// Efeito de paralaxe suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    const heroStats = document.querySelector('.hero-stats');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
    
    if (heroStats) {
        heroStats.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Adicionar efeito de hover aos ícones de tecnologia
document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Destacar link ativo na navegação
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').substring(1) === current) {
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '700';
        } else {
            link.style.fontWeight = '500';
        }
    });
});

console.log('🚀 Portfolio de Márcio Gil carregado com sucesso!');
console.log('💼 Desenvolvedor Full Stack & AI Engineer');
console.log('♿ Comprometido com acessibilidade digital');
console.log('🧠 Especialista em soluções com IA');

