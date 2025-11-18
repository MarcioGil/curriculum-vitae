// Dados dos projetos (Migrados do index.html original)
const projectsData = [
    {
        title: "Full Stack Acessibilidade",
        description: "Plataforma educacional inclusiva que utiliza Inteligência Artificial para personalizar o aprendizado, promover acessibilidade e engajamento de alunos PCD. Recursos de leitura automática, adaptação de conteúdo e gamificação.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "JWT", "Styled Components"],
        categories: ["fullstack", "ia", "acessibilidade"],
        github: "https://github.com/MarcioGil/Amigo-do-Saber",
        demo: "https://tiadora-gjmqdkfw.manus.space"
    },
    {
        title: "HelpDeskFlow",
        description: "Sistema empresarial completo de <strong>gerenciamento de chamados com IA</strong> integrada para triagem automática, chatbot contextual e priorização inteligente. Inclui <strong>RBAC (3 níveis)</strong>, integrações com <strong>Slack/Teams/WhatsApp</strong>, analytics em tempo real, <strong>NPS</strong> e acessibilidade <strong>WCAG 2.1 AA</strong>. Deploy em produção com CI/CD automatizado.",
        tech: ["TypeScript", "React 18", "Node.js + Express", "PostgreSQL + Prisma", "JWT + RBAC", "GitHub Actions", "Vercel + Render"],
        categories: ["fullstack", "ia", "backend", "devops"],
        github: "https://github.com/MarcioGil/Sistema-de-Chamados-Internos",
        demo: "https://help-desk-flow-frontend.vercel.app"
    },
    {
        title: "SAST-CI/CD Pipeline",
        description: "Pipeline automatizado de <strong>segurança de aplicações (AppSec)</strong> usando SAST (Semgrep) em CI/CD para prevenir vulnerabilidades antes da produção. Detecta falhas como <strong>SQL Injection</strong> e <strong>segredos hardcoded</strong> em microserviços Node.js, promovendo maturidade e economia em cibersegurança.",
        tech: ["Node.js (Express)", "Docker & Compose", "SQLite", "Semgrep", "GitHub Actions"],
        categories: ["backend", "ia", "devops"],
        github: "https://github.com/MarcioGil/SAST-CI-CD-Pipeline",
        demo: "https://github.com/MarcioGil/SAST-CI-CD-Pipeline" // Link para o GitHub, pois é um pipeline
    },
    {
        title: "BI Platform (FastAPI + React)",
        description: "<strong>Plataforma unificada de Business Intelligence</strong> com KPIs dinâmicos, IA generativa para previsões e resumos, dashboard responsivo e API REST segura. Frontend em React/Vite, backend em FastAPI/Python, automação CI/CD e deploy cloud. Ideal para decisões ágeis e gestão inteligente.",
        tech: ["React", "Vite", "FastAPI (Python)", "SQLModel", "JWT", "NLP", "GitHub Actions", "Manus Space"],
        categories: ["fullstack", "ia", "backend"],
        github: "https://github.com/MarcioGil/BI-Platform-FastAPI-React",
        demo: "https://github.com/MarcioGil/BI-Platform-FastAPI-React"
    },
    {
        title: "PWA Mães do Brasil",
        description: "Plataforma PWA de empoderamento digital para mães brasileiras, com assistente de voz Clara (PT-BR), sistema de emergência GPS, comunidade segura e recursos educacionais. <strong>100% acessível</strong> (WCAG 2.1 AA), mobile-first.",
        tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "PWA", "Web Speech API"],
        categories: ["fullstack", "acessibilidade"],
        github: "https://github.com/MarcioGil/PWA-Maes-do-Brasil",
        demo: "https://pwa-maes-do-brasil.vercel.app/"
    },
    {
        title: "SUS Ortopedia IA",
        description: "Plataforma fullstack com IA para pacientes ortopédicos do SUS, transformando a espera por cirurgia em uma jornada ativa e informada. <strong>Plano de exercícios com IA Gemini</strong>, chatbot psicológico, scanner de acessibilidade e canal legal integrado.",
        tech: ["React 19", "TypeScript", "Tailwind CSS 4", "Node.js", "Express", "tRPC", "MySQL/TiDB", "Drizzle ORM", "Google Gemini API", "MediaPipe", "TensorFlow.js"],
        categories: ["fullstack", "ia", "acessibilidade", "saude"],
        github: "https://github.com/MarcioGil/SUS-Ortopedia-IA",
        demo: "https://github.com/MarcioGil/SUS-Ortopedia-IA"
    },
    {
        title: "ERP Django + React",
        description: "Plataforma completa de gestão empresarial integrada com <strong>Django + React</strong>. Sistema robusto para gestão de vendas, estoque, clientes, produtos, financeiro, fornecedores e auditoria. <strong>API REST completa com JWT, Swagger/ReDoc e 47+ endpoints documentados</strong>.",
        tech: ["Django 5.0.7", "Django REST Framework", "Python 3.13", "PostgreSQL", "JWT", "React 18", "Vite", "Tailwind CSS", "Swagger/ReDoc"],
        categories: ["fullstack", "backend"],
        github: "https://github.com/MarcioGil/ERP-Django-React",
        demo: "https://github.com/MarcioGil/ERP-Django-React"
    },
    {
        title: "IA para Informação Pública",
        description: "Plataforma inovadora que democratiza o acesso à informação pública usando <strong>IA (OpenAI GPT-4, Google Vision)</strong> para traduzir documentos burocráticos em linguagem acessível. Com foco em <strong>WCAG 2.1</strong> e PWA.",
        tech: ["React", "Node.js", "OpenAI GPT-4", "Google Vision", "PWA", "WCAG 2.1"],
        categories: ["fullstack", "ia", "acessibilidade"],
        github: "https://github.com/MarcioGil/IA-para-Informacao-Publica",
        demo: "https://github.com/MarcioGil/IA-para-Informacao-Publica"
    }
];

// Função para gerar o HTML do card de projeto
function createProjectCard(project) {
    const techBadges = project.tech.map(tech => <span class="project-tag">${tech}</span>).join('');
    const categoriesAttr = project.categories.join(' ');

    return `
        <div class="project-card" data-category="${categoriesAttr}">
            <div>
                <div class="project-header">
                    <h3>${project.title}</h3>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${techBadges}
                </div>
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link github">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link demo">
                    <i class="fas fa-external-link-alt"></i> Demo Live
                </a>` : ''}
            </div>
        </div>
    `;
}

// Função para renderizar todos os projetos
function renderProjects(projects) {
    const grid = document.querySelector('.projects-grid');
    if (grid) {
        grid.innerHTML = projects.map(createProjectCard).join('');
    }
}

// Função de filtro de projetos
function filterProjects(filterValue) {
    const projectCards = document.querySelectorAll('.projects-grid .project-card');
    projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        const shouldShow = filterValue === 'all' || (categories && categories.includes(filterValue));
        
        if (shouldShow) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            }, 50); // Pequeno delay para a animação
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95) translateY(10px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

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
                    const targetValue = parseInt(stat.textContent.replace('+', ''));
                    stat.textContent = '0';
                    animateCounter(stat, targetValue);
                    stat.dataset.animated = 'true';
                }
            });
        }
    });
}, { threshold: 0.5 });


document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar projetos
    renderProjects(projectsData);

    // 2. Sistema de Filtros de Projetos
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            filterProjects(filterValue);
        });
    });

    // 3. Smooth scroll e destaque de navegação
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Função para atualizar o link ativo
    const updateActiveLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    };

    // Event listener para scroll
    window.addEventListener('scroll', updateActiveLink);
    // Chamar na carga para destacar o link inicial
    updateActiveLink();

    // Smooth scroll
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

    // 4. Observar estatísticas
    document.querySelectorAll('.hero-stats').forEach(section => {
        statObserver.observe(section);
    });

    // 5. Animação de entrada (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const generalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                generalObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Adicionar classe para animação CSS
    document.querySelectorAll('.hero-text h1, .hero-text .subtitle, .hero-text .description, .hero-stats, .about-content, .soft-skill-card, .project-card, .skill-category, .contact-item, .documentacao-links').forEach(el => {
        el.classList.add('fade-in-element');
        generalObserver.observe(el);
    });

    // Adicionar estilos de animação CSS para .fade-in-element (para complementar o JS)
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-element {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-element.fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 Portfolio de Márcio Gil carregado com sucesso!');
});