/* =======================================
   RAMON SANTOS — PORTFÓLIO — main.js
   ======================================= */

/* ── Translations ── */
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    "hero.badge": "Engenharia de Dados",
    "hero.greeting": "Eu sou o",
    "hero.subtitle": "Transformo dados em valor com pipelines confiáveis e soluções escaláveis em nuvem.",
    "hero.viewProjects": "Ver Projetos",
    "hero.contact": "Contato",
    "hero.card.pipeline": "Pipeline",
    "hero.card.cloud": "Databricks",
    "hero.card.spark": "PySpark",

    "about.subtitle": "Conheça mais",
    "about.title": "Sobre Mim",
    "about.intro": "Engenheiro de Dados focado em pipelines confiáveis e soluções escaláveis em nuvem.",
    "about.description": "Profissional de dados com experiência em projetos de Engenharia de Dados em nuvem, atuando em sustentação, suporte e evolução de pipelines. Experiência prática com PySpark, SQL, Databricks, Azure Data Factory e Delta Lake. Vivência com integração de APIs REST, modelagem em arquitetura medalhão e governança de dados.",
    "about.education": "Formação",
    "about.experience": "Experiência",
    "about.certifications": "Certificações",
    "about.downloadCV": "Download CV",
    "about.edu.value": "Análise e Desenvolvimento de Sistemas — UniFECAF",
    "about.exp.value": "2+ anos",
    "about.cert.value": "Databricks, FinOps, Ada",

    "timeline.qsoft.period": "Fev 2026 — Presente",
    "timeline.qsoft.title": "Data Engineering Assistant — QSOFT",
    "timeline.qsoft.desc": "PySpark, ADF, Delta Lake, CI/CD Azure DevOps",
    "timeline.bmw.period": "Nov 2024 — Ago 2025",
    "timeline.bmw.title": "Warranty Analyst — BMW Group",
    "timeline.bmw.desc": "SAP S/4HANA, Power BI, Excel",
    "timeline.idemia.period": "Out 2023 — Mar 2024",
    "timeline.idemia.title": "Auxiliar Administrativo — IDEMIA",
    "timeline.idemia.desc": "Ambiente corporativo híbrido",

    "services.subtitle": "O que eu faço",
    "services.title": "Como posso te ajudar",
    "services.eng.title": "Data Engineering",
    "services.eng.desc": "Construção e manutenção de pipelines ETL/ELT escaláveis em ambientes multicloud.",
    "services.eng.f1": "PySpark & SQL",
    "services.eng.f2": "Azure Databricks & ADF",
    "services.eng.f3": "Delta Lake Medallion",
    "services.analytics.title": "Analytics & BI",
    "services.analytics.desc": "Desenvolvimento de dashboards e relatórios para apoio à tomada de decisão.",
    "services.analytics.f1": "Power BI & Tableau",
    "services.analytics.f2": "KPI Monitoring",
    "services.analytics.f3": "Data Visualization",
    "services.dataops.title": "DataOps & Monitoramento",
    "services.dataops.desc": "Monitoramento de pipelines em produção, resolução de incidentes e CI/CD.",
    "services.dataops.f1": "Azure DevOps",
    "services.dataops.f2": "Git & Code Review",
    "services.dataops.f3": "Data Quality & Governança",

    "skills.subtitle": "Minhas especialidades",
    "skills.title": "Ferramentas de Trabalho",
    "skills.dataeng.cat": "Data Eng.",
    "skills.cloud.cat": "Cloud",
    "skills.bi.cat": "BI & Análise",
    "skills.python.desc": "Análise e transformação de dados",
    "skills.sql.desc": "Consultas e modelagem de dados",
    "skills.pyspark.desc": "Processamento distribuído em larga escala",
    "skills.databricks.desc": "Plataforma Lakehouse",
    "skills.delta.desc": "Arquitetura Medallion",
    "skills.adf.desc": "Orquestração de pipelines",
    "skills.datalake.desc": "Armazenamento escalável em nuvem",
    "skills.airflow.desc": "Orquestração de workflows",
    "skills.docker.desc": "Containerização",
    "skills.powerbi.desc": "Dashboards e visualizações",
    "skills.excel.desc": "Análise e manipulação de dados",
    "skills.tableau.desc": "Visualização de dados",

    "projects.subtitle": "Meu trabalho",
    "projects.title": "Projetos em Destaque",
    "projects.filter.all": "Todos",
    "projects.filter.eng": "Data Engineering",
    "projects.filter.bi": "BI & Analytics",
    "proj1.cat": "DATA ENGINEERING",
    "proj1.title": "Pipeline Azure com Databricks & ADF",
    "proj1.desc": "Pipeline completo de dados com ingestão de arquivos JSON, transformação em PySpark e armazenamento em Delta Lake. Arquitetura Inbound → Bronze → Silver com orquestração automatizada a cada 1h via ADF.",
    "proj2.cat": "DATA ENGINEERING",
    "proj2.title": "Automação F1 Temporada 2025",
    "proj2.desc": "Projeto de Engenharia de Dados voltado à Fórmula 1 🚥. Pipeline ETL completo com ingestão via APIs, orquestração com Apache Airflow e visualização com Streamlit.",
    "proj3.cat": "BI & ANALYTICS",
    "proj3.title": "Análise de Vendas de Automóveis",
    "proj3.desc": "Projeto de Análise de Vendas de Automóveis. Dashboards desenvolvidos no Power BI para consolidar insights de vendas e performance corporativa.",

    "contact.subtitle": "Fale comigo",
    "contact.title": "Vamos conversar?",
    "contact.desc": "Aberto a novas oportunidades, projetos e conexões na área de dados. Fique à vontade para entrar em contato!",
    "contact.email.label": "E-MAIL",
    "contact.phone.label": "TELEFONE",
    "contact.loc.label": "LOCALIZAÇÃO",
    "contact.loc.value": "São Paulo, Brasil",
    "form.name": "Nome",
    "form.email": "E-mail",
    "form.subject": "Assunto",
    "form.message": "Mensagem",
    "form.send": "Enviar Mensagem",
    "form.success": "✅ Mensagem enviada com sucesso! Retornarei em breve.",

    "footer.copy": "© 2025 Ramon Santos. Todos os direitos reservados.",

    "typewriter": ["Data Engineer", "Engenheiro de Dados", "PySpark Developer", "Azure Data Factory"]
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.badge": "Data Engineering",
    "hero.greeting": "I'm",
    "hero.subtitle": "I transform data into value with reliable pipelines and scalable cloud solutions.",
    "hero.viewProjects": "View Projects",
    "hero.contact": "Contact",
    "hero.card.pipeline": "Pipeline",
    "hero.card.cloud": "Databricks",
    "hero.card.spark": "PySpark",

    "about.subtitle": "Get to know me",
    "about.title": "About Me",
    "about.intro": "Data Engineer focused on reliable pipelines and scalable cloud solutions.",
    "about.description": "Data professional with hands-on experience in cloud Data Engineering projects, working on support and evolution of data pipelines. Practical experience with PySpark, SQL, Databricks, Azure Data Factory and Delta Lake. Background in REST API integration, medallion architecture modeling and data governance.",
    "about.education": "Education",
    "about.experience": "Experience",
    "about.certifications": "Certifications",
    "about.downloadCV": "Download CV",
    "about.edu.value": "Systems Analysis and Development — UniFECAF",
    "about.exp.value": "2+ years",
    "about.cert.value": "Databricks, FinOps, Ada",

    "timeline.qsoft.period": "Feb 2026 — Present",
    "timeline.qsoft.title": "Data Engineering Assistant — QSOFT",
    "timeline.qsoft.desc": "PySpark, ADF, Delta Lake, CI/CD Azure DevOps",
    "timeline.bmw.period": "Nov 2024 — Aug 2025",
    "timeline.bmw.title": "Warranty Analyst — BMW Group",
    "timeline.bmw.desc": "SAP S/4HANA, Power BI, Excel",
    "timeline.idemia.period": "Oct 2023 — Mar 2024",
    "timeline.idemia.title": "Administrative Assistant — IDEMIA",
    "timeline.idemia.desc": "Hybrid corporate environment",

    "services.subtitle": "What I do",
    "services.title": "How I can help you",
    "services.eng.title": "Data Engineering",
    "services.eng.desc": "Building and maintaining scalable ETL/ELT pipelines in multicloud environments.",
    "services.eng.f1": "PySpark & SQL",
    "services.eng.f2": "Azure Databricks & ADF",
    "services.eng.f3": "Delta Lake Medallion",
    "services.analytics.title": "Analytics & BI",
    "services.analytics.desc": "Dashboard and report development to support strategic decision making.",
    "services.analytics.f1": "Power BI & Tableau",
    "services.analytics.f2": "KPI Monitoring",
    "services.analytics.f3": "Data Visualization",
    "services.dataops.title": "DataOps & Monitoring",
    "services.dataops.desc": "Production pipeline monitoring, incident resolution and CI/CD practices.",
    "services.dataops.f1": "Azure DevOps",
    "services.dataops.f2": "Git & Code Review",
    "services.dataops.f3": "Data Quality & Governance",

    "skills.subtitle": "My specialties",
    "skills.title": "Tech Stack",
    "skills.dataeng.cat": "Data Eng.",
    "skills.cloud.cat": "Cloud",
    "skills.bi.cat": "BI & Analytics",
    "skills.python.desc": "Data analysis and transformation",
    "skills.sql.desc": "Queries and data modeling",
    "skills.pyspark.desc": "Distributed large-scale processing",
    "skills.databricks.desc": "Lakehouse platform",
    "skills.delta.desc": "Medallion architecture",
    "skills.adf.desc": "Pipeline orchestration",
    "skills.datalake.desc": "Scalable cloud storage",
    "skills.airflow.desc": "Workflow orchestration",
    "skills.docker.desc": "Containerization",
    "skills.powerbi.desc": "Dashboards and visualizations",
    "skills.excel.desc": "Data analysis and manipulation",
    "skills.tableau.desc": "Data visualization",

    "projects.subtitle": "My work",
    "projects.title": "Featured Projects",
    "projects.filter.all": "All",
    "projects.filter.eng": "Data Engineering",
    "projects.filter.bi": "BI & Analytics",
    "proj1.cat": "DATA ENGINEERING",
    "proj1.title": "Azure Pipeline with Databricks & ADF",
    "proj1.desc": "Complete data pipeline with JSON file ingestion, PySpark transformation and Delta Lake storage. Inbound → Bronze → Silver architecture with automated orchestration every 1h via ADF.",
    "proj2.cat": "DATA ENGINEERING",
    "proj2.title": "F1 Season 2025 Automation",
    "proj2.desc": "Data Engineering project focused on Formula 1 🚥. Complete ETL pipeline with API ingestion, Airflow orchestration, and Streamlit data visualization.",
    "proj3.cat": "BI & ANALYTICS",
    "proj3.title": "Automobile Sales Analysis",
    "proj3.desc": "Automobile Sales Analysis project. Power BI dashboards developed to consolidate sales insights and corporate performance data.",

    "contact.subtitle": "Get in touch",
    "contact.title": "Let's talk?",
    "contact.desc": "Open to new opportunities, projects and connections in the data field. Feel free to reach out!",
    "contact.email.label": "E-MAIL",
    "contact.phone.label": "PHONE",
    "contact.loc.label": "LOCATION",
    "contact.loc.value": "São Paulo, Brazil",
    "form.name": "Name",
    "form.email": "E-mail",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.send": "Send Message",
    "form.success": "✅ Message sent successfully! I'll get back to you soon.",

    "footer.copy": "© 2025 Ramon Santos. All rights reserved.",

    "typewriter": ["Data Engineer", "PySpark Developer", "Azure Data Factory", "ETL Architect"]
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.services": "Servicios",
    "nav.skills": "Skills",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    "hero.badge": "Ingeniería de Datos",
    "hero.greeting": "Soy",
    "hero.subtitle": "Transformo datos en valor con pipelines confiables y soluciones escalables en la nube.",
    "hero.viewProjects": "Ver Proyectos",
    "hero.contact": "Contacto",
    "hero.card.pipeline": "Pipeline",
    "hero.card.cloud": "Databricks",
    "hero.card.spark": "PySpark",

    "about.subtitle": "Conóceme",
    "about.title": "Sobre Mí",
    "about.intro": "Ingeniero de Datos enfocado en pipelines confiables y soluciones escalables en la nube.",
    "about.description": "Profesional de datos con experiencia en proyectos de Ingeniería de Datos en la nube, trabajando en soporte y evolución de pipelines. Experiencia práctica con PySpark, SQL, Databricks, Azure Data Factory y Delta Lake. Experiencia en integración de APIs REST, modelado en arquitectura medallón y gobernanza de datos.",
    "about.education": "Educación",
    "about.experience": "Experiencia",
    "about.certifications": "Certificaciones",
    "about.downloadCV": "Descargar CV",
    "about.edu.value": "Análisis y Desarrollo de Sistemas — UniFECAF",
    "about.exp.value": "2+ años",
    "about.cert.value": "Databricks, FinOps, Ada",

    "timeline.qsoft.period": "Feb 2026 — Presente",
    "timeline.qsoft.title": "Asistente de Ingeniería de Datos — QSOFT",
    "timeline.qsoft.desc": "PySpark, ADF, Delta Lake, CI/CD Azure DevOps",
    "timeline.bmw.period": "Nov 2024 — Ago 2025",
    "timeline.bmw.title": "Analista de Garantía — BMW Group",
    "timeline.bmw.desc": "SAP S/4HANA, Power BI, Excel",
    "timeline.idemia.period": "Oct 2023 — Mar 2024",
    "timeline.idemia.title": "Auxiliar Administrativo — IDEMIA",
    "timeline.idemia.desc": "Entorno corporativo híbrido",

    "services.subtitle": "Lo que hago",
    "services.title": "Cómo puedo ayudarte",
    "services.eng.title": "Ingeniería de Datos",
    "services.eng.desc": "Construcción y mantenimiento de pipelines ETL/ELT escalables en entornos multicloud.",
    "services.eng.f1": "PySpark & SQL",
    "services.eng.f2": "Azure Databricks & ADF",
    "services.eng.f3": "Delta Lake Medallion",
    "services.analytics.title": "Analytics & BI",
    "services.analytics.desc": "Desarrollo de dashboards e informes para apoyar la toma de decisiones estratégicas.",
    "services.analytics.f1": "Power BI & Tableau",
    "services.analytics.f2": "KPI Monitoring",
    "services.analytics.f3": "Visualización de Datos",
    "services.dataops.title": "DataOps & Monitoreo",
    "services.dataops.desc": "Monitoreo de pipelines en producción, resolución de incidentes y CI/CD.",
    "services.dataops.f1": "Azure DevOps",
    "services.dataops.f2": "Git & Code Review",
    "services.dataops.f3": "Calidad y Gobernanza de Datos",

    "skills.subtitle": "Mis especialidades",
    "skills.title": "Herramientas de Trabajo",
    "skills.dataeng.cat": "Data Eng.",
    "skills.cloud.cat": "Cloud",
    "skills.bi.cat": "BI & Análisis",
    "skills.python.desc": "Análisis y transformación de datos",
    "skills.sql.desc": "Consultas y modelado de datos",
    "skills.pyspark.desc": "Procesamiento distribuido a gran escala",
    "skills.databricks.desc": "Plataforma Lakehouse",
    "skills.delta.desc": "Arquitectura Medallón",
    "skills.adf.desc": "Orquestación de pipelines",
    "skills.datalake.desc": "Almacenamiento escalable en la nube",
    "skills.airflow.desc": "Orquestación de workflows",
    "skills.docker.desc": "Contenedorización",
    "skills.powerbi.desc": "Dashboards y visualizaciones",
    "skills.excel.desc": "Análisis y manipulación de datos",
    "skills.tableau.desc": "Visualización de datos",

    "projects.subtitle": "Mi trabajo",
    "projects.title": "Proyectos Destacados",
    "projects.filter.all": "Todos",
    "projects.filter.eng": "Ingeniería de Datos",
    "projects.filter.bi": "BI & Analytics",
    "proj1.cat": "INGENIERÍA DE DATOS",
    "proj1.title": "Pipeline Azure con Databricks & ADF",
    "proj1.desc": "Pipeline completo de datos con ingestión de archivos JSON, transformación en PySpark y almacenamiento en Delta Lake. Arquitectura Inbound → Bronze → Silver con orquestación automatizada cada 1h vía ADF.",
    "proj2.cat": "INGENIERÍA DE DATOS",
    "proj2.title": "Automatización F1 Temporada 2025",
    "proj2.desc": "Proyecto de Ingeniería de Datos enfocado en Fórmula 1 🚥. Pipeline ETL completo con ingestión vía APIs, orquestación con Apache Airflow y visualización con Streamlit.",
    "proj3.cat": "BI & ANALYTICS",
    "proj3.title": "Análisis de Ventas de Automóviles",
    "proj3.desc": "Proyecto de Análisis de Ventas de Automóviles. Dashboards desarrollados en Power BI para consolidar insights de ventas y rendimiento corporativo.",

    "contact.subtitle": "Háblame",
    "contact.title": "¿Conversamos?",
    "contact.desc": "Abierto a nuevas oportunidades, proyectos y conexiones en el área de datos. ¡No dudes en contactarme!",
    "contact.email.label": "CORREO",
    "contact.phone.label": "TELÉFONO",
    "contact.loc.label": "UBICACIÓN",
    "contact.loc.value": "São Paulo, Brasil",
    "form.name": "Nombre",
    "form.email": "Correo",
    "form.subject": "Asunto",
    "form.message": "Mensaje",
    "form.send": "Enviar Mensaje",
    "form.success": "✅ ¡Mensaje enviado con éxito! Te responderé pronto.",

    "footer.copy": "© 2025 Ramon Santos. Todos los derechos reservados.",

    "typewriter": ["Ingeniero de Datos", "Data Engineer", "PySpark Developer", "Azure Data Factory"]
  }
};

/* ── State ── */
let currentLang = localStorage.getItem('lang') || 'pt';
let currentTheme = localStorage.getItem('theme') || 'dark';
let typewriterIndex = 0;
let charIndex = 0;
let isDeleting = false;

/* ── Apply Theme ── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  localStorage.setItem('theme', theme);
}

/* ── Apply Language ── */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update lang button
  const flags = { pt: 'src/assets/images/flag-br.png', en: 'src/assets/images/flag-us.png', es: 'src/assets/images/flag-es.png' };
  const labels = { pt: 'PT', en: 'EN', es: 'ES' };
  const flagEl = document.getElementById('currentFlag');
  const langEl = document.getElementById('currentLang');
  if (flagEl) flagEl.src = flags[lang];
  if (langEl) langEl.textContent = labels[lang];

  // Active state on dropdown options
  document.querySelectorAll('.lang-option, .mobile-lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

  // Restart typewriter
  typewriterIndex = 0;
  charIndex = 0;
  isDeleting = false;
}

/* ── Typewriter Effect ── */
function typewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const words = translations[currentLang]['typewriter'];
  const current = words[typewriterIndex];

  if (isDeleting) {
    el.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      typewriterIndex = (typewriterIndex + 1) % words.length;
      setTimeout(typewriter, 400);
      return;
    }
    setTimeout(typewriter, 55);
  } else {
    el.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typewriter, 2000);
      return;
    }
    setTimeout(typewriter, 90);
  }
}

/* ── Scroll Progress ── */
function updateScrollProgress() {
  const winScroll = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (winScroll / height) * 100 : 0;
  const bar = document.getElementById('scroll-progress');
  if (bar) bar.style.width = pct + '%';
}

/* ── Nav active link on scroll ── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    link.classList.toggle('active', scrollY >= top && scrollY < top + height);
  });
}

/* ── Animate on Scroll (IntersectionObserver) ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ── Project Filter ── */
function initProjectFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
        if (match) {
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = '';
          });
        }
      });
    });
  });
}

/* ── Mobile Nav ── */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    const icon = toggle.querySelector('i');
    if (icon) icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
  });

  // Close on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

/* ── Language Dropdown ── */
function initLangDropdown() {
  const btn = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');

  if (btn && dropdown) {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  }

  // Desktop options
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      applyLang(opt.dataset.lang);
      if (dropdown) dropdown.classList.remove('open');
    });
  });

  // Mobile options
  document.querySelectorAll('.mobile-lang-option').forEach(opt => {
    opt.addEventListener('click', () => applyLang(opt.dataset.lang));
  });
}

/* ── Theme Toggle ── */
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const success = document.getElementById('form-success');

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    const formData = {
      Nome: form.name.value,
      "E-mail": form.email.value,
      Assunto: form.subject.value,
      Mensagem: form.message.value,
      _subject: "💠 Entraram em contato pelo seu site Portfólio!",
      _template: "box",
      _replyto: form.email.value
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/santdevoficial@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        if (success) {
          success.style.display = 'block';
          success.textContent = translations[currentLang]['form.success'];
          setTimeout(() => { success.style.display = 'none'; }, 5000);
        }
        form.reset();
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (err) {
      alert("Erro de conexão ao enviar o e-mail.");
      console.error(err);
    } finally {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> <span data-i18n="form.send">Enviar Mensagem</span>';
    }
  });
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  initScrollAnimations();
  initProjectFilter();
  initMobileNav();
  initLangDropdown();
  initThemeToggle();
  initContactForm();
  initSmoothScroll();

  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateActiveNav();
  }, { passive: true });

  setTimeout(typewriter, 800);
});
