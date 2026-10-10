/* Homepage-only edition of site.js: shared translations, theme, loader, navigation and reveals retained. Keep common behavior synchronized with site.js. */

/* ── i18n ──────────────────────────────────────────────── */
const translations = {
  "en": {
    "nav_home": "Home",
    "nav_about": "About",
    "nav_services": "Services",
    "nav_portfolio": "Portfolio",
    "nav_faq": "FAQ",
    "nav_contact": "Contact",
    "nav_cta": "Get Started",
    "nav_cta_mobile": "Get Free Quote",
    "hero_badge": "Premium Web Agency · Morocco",
    "hero_h1a": "We Build",
    "hero_h1b": "Digital Experiences",
    "hero_h1c": "That Convert",
    "hero_desc": "Voniweb crafts high-performance, visually stunning websites that turn visitors into loyal customers. Based in Morocco, serving clients globally.",
    "hero_cta1": "Start Your Project",
    "hero_cta2": "View Our Work",
    "fc1_val": "Fast Delivery",
    "fc1_lbl": "1–3 Days Avg",
    "fc2_lbl": "Client Rating",
    "scroll": "Scroll",
    "serv_tag": "What We Offer",
    "serv_title": "Services Built for Growth",
    "serv_sub": "From your first website to a full digital overhaul, we have a service tailored to your business needs.",
    "s1_title": "Website Development",
    "s1_desc": "Tailored HTML5, Tailwind CSS, and JavaScript solutions built for speed, responsiveness, and conversion.",
    "s2_title": "B2B / B2C Lead Generation",
    "s2_desc": "B2C: Calendar filling. B2B: Excel lead files by niche and location, delivered ready to use.",
    "s4_title": "SEO & Digital Branding",
    "s4_desc": "On-page audits, keyword strategies, and visual identity design to dominate search results.",
    "why_tag": "Why Voniweb",
    "why_title": "The Agency That Delivers, Every Time",
    "why_p1": "We're not just developers — we're strategic partners in your digital growth. Every decision we make is in service of one goal: your success online.",
    "why_p2": "Our clients trust us because we consistently deliver on time, on budget, and beyond expectations.",
    "why_cta": "Work With Us",
    "wc1_title": "Fast Delivery",
    "wc1_desc": "Most projects go live within 1–3 business days without compromising quality.",
    "wc2_title": "Secure & Reliable",
    "wc2_desc": "SSL, regular backups, and security hardening are standard on every project.",
    "wc4_title": "Clear Communication",
    "wc4_desc": "Regular updates, transparent pricing, and no surprises — ever.",
    "wc6_title": "Local & Global",
    "wc6_desc": "Morocco-based with international standards, serving clients from Casablanca to Canada.",
    "port_tag": "Our Work",
    "port_title": "Featured Projects",
    "port_sub": "A selection of websites we've built that drive real results for real businesses.",
    "cont_tag": "Get In Touch",
    "cont_title": "Let's Build Something Great",
    "cont_sub": "Ready to take your digital presence to the next level? Reach out and we'll get back to you within 24 hours.",
    "whatsapp_btn": "Chat on WhatsApp",
    "footer_desc": "Premium website development for businesses in Morocco and beyond. Building digital excellence since 2022.",
    "footer_services": "Services",
    "s3_title": "Calendar Filling & Automation",
    "footer_company": "Company",
    "footer_contact": "Contact",
    "footer_rights": "All rights reserved.",
    "footer_made": "Crafted with ❤ in Morocco"
  },
  "fr": {
    "nav_home": "Accueil",
    "nav_about": "À propos",
    "nav_services": "Services",
    "nav_portfolio": "Portfolio",
    "nav_faq": "FAQ",
    "nav_contact": "Contact",
    "nav_cta": "Démarrer",
    "nav_cta_mobile": "Devis Gratuit",
    "hero_badge": "Agence Web Premium · Maroc",
    "hero_h1a": "Nous Créons",
    "hero_h1b": "Des Expériences Digitales",
    "hero_h1c": "Qui Convertissent",
    "hero_desc": "Voniweb conçoit des sites web haute performance, visuellement époustouflants, qui transforment les visiteurs en clients fidèles. Basés au Maroc, au service de clients du monde entier.",
    "hero_cta1": "Démarrer Votre Projet",
    "hero_cta2": "Voir Nos Réalisations",
    "fc1_val": "Livraison Rapide",
    "fc1_lbl": "Moy. 1–3 Jours",
    "fc2_lbl": "Note Clients",
    "scroll": "Défiler",
    "serv_tag": "Ce Que Nous Offrons",
    "serv_title": "Des Services Conçus pour Croître",
    "serv_sub": "De votre premier site web à une refonte digitale complète, nous avons un service adapté à vos besoins.",
    "s1_title": "Sites Business",
    "s1_desc": "Sites professionnels qui valorisent votre marque et génèrent des leads 24h/24.",
    "s2_title": "Génération de Leads B2B / B2C",
    "s2_desc": "Expériences mono-page à fort taux de conversion, conçues pour transformer le trafic publicitaire en clients payants.",
    "s4_title": "SEO & Branding Digital",
    "s4_desc": "Présentez votre travail de façon élégante avec des portfolios personnels qui vous font embaucher.",
    "why_tag": "Pourquoi Voniweb",
    "why_title": "L'Agence Qui Livre, À Chaque Fois",
    "why_p1": "Nous ne sommes pas que des développeurs — nous sommes des partenaires stratégiques de votre croissance digitale. Chaque décision que nous prenons sert un seul objectif : votre succès en ligne.",
    "why_p2": "Nos clients nous font confiance parce que nous livrons toujours dans les délais, dans le budget, et au-delà des attentes.",
    "why_cta": "Travailler Avec Nous",
    "wc1_title": "Livraison Rapide",
    "wc1_desc": "La plupart des projets sont mis en ligne en 7 à 14 jours ouvrables sans compromettre la qualité.",
    "wc2_title": "Sécurisé & Fiable",
    "wc2_desc": "SSL, sauvegardes régulières et renforcement de la sécurité sont standard sur chaque projet.",
    "wc4_title": "Communication Claire",
    "wc4_desc": "Mises à jour régulières, tarification transparente et aucune surprise — jamais.",
    "wc6_title": "Local & Global",
    "wc6_desc": "Basés au Maroc avec des standards internationaux, au service de clients de Casablanca au Canada.",
    "port_tag": "Nos Réalisations",
    "port_title": "Projets en Vedette",
    "port_sub": "Une sélection de sites web que nous avons construits et qui génèrent de vrais résultats pour de vraies entreprises.",
    "cont_tag": "Nous Contacter",
    "cont_title": "Construisons Quelque Chose de Grand",
    "cont_sub": "Prêt à élever votre présence digitale ? Contactez-nous et nous vous répondrons dans les 24 heures.",
    "whatsapp_btn": "Discuter sur WhatsApp",
    "footer_desc": "Développement web premium pour les entreprises au Maroc et au-delà. L'excellence digitale depuis 2022.",
    "footer_services": "Services",
    "s3_title": "Remplissage Agenda & Automatisation",
    "footer_company": "Entreprise",
    "footer_contact": "Contact",
    "footer_rights": "Tous droits réservés.",
    "footer_made": "Créé avec ❤ au Maroc"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

/* ── Theme ─────────────────────────────────────────────── */
let currentTheme = localStorage.getItem('theme') || 'light';
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const icon = document.querySelector('#themeToggle i');
  if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

/* ── Loader ─────────────────────────────────────────────── */
if (document.getElementById('loader')) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 1900);
    applyTheme(currentTheme);
    applyLang(currentLang);
  });
} else {
  // Deferred script: initialize secondary pages without waiting for external resources.
  applyTheme(currentTheme);
  applyLang(currentLang);
}

/* ── Navbar scroll ──────────────────────────────────────── */
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  const s = window.scrollY;
  navbar.classList.toggle('scrolled', s > 30);
  backTop.classList.toggle('visible', s > 400);
}, { passive: true });

/* ── Hamburger ──────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
});
mobileNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ── Scroll reveal ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));

/* ── Counters ───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});

/* ── PAGE ROUTING (Fake Multi-Page) ─────────────────────── */
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => { const target = new URL(a.href); const active = target.pathname === location.pathname && !target.hash; a.classList.toggle('active', active); if(active) a.setAttribute('aria-current','page'); });
// Close mobile nav when clicking a page link
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});



/* Non-visible accessibility state; preserve all existing click handlers. */
function syncNavigationAccessibility() {
  const open = mobileNav.classList.contains('open');
  hamburger.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
  mobileNav.inert = !open;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));
  });
}
const accessibilityObserver = new MutationObserver(() => {
  syncNavigationAccessibility();
});
accessibilityObserver.observe(mobileNav, { attributes: true, attributeFilter: ['class'] });
document.querySelectorAll('.lang-btn').forEach(el => {
  accessibilityObserver.observe(el, { attributes: true, attributeFilter: ['class'] });
});
document.querySelectorAll('#hamburger').forEach(control => {
  control.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      control.click();
    }
  });
});
syncNavigationAccessibility();
