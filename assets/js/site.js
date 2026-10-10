
/* ── i18n ──────────────────────────────────────────────── */
const translations = {
  en: {
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio",
    nav_faq: "FAQ", nav_contact: "Contact", nav_cta: "Get Started", nav_cta_mobile: "Get Free Quote",
    hero_badge: "Premium Web Agency · Morocco",
    hero_h1a: "We Build", hero_h1b: "Digital Experiences", hero_h1c: "That Convert",
    hero_desc: "Voniweb crafts high-performance, visually stunning websites that turn visitors into loyal customers. Based in Morocco, serving clients globally.",
    hero_cta1: "Start Your Project", hero_cta2: "View Our Work",
    stat1: "Projects Done", stat2: "Client Satisfaction",
    fc1_val: "Fast Delivery", fc1_lbl: "1–3 Days Avg", fc2_lbl: "Client Rating",
    scroll: "Scroll",
    about_tag: "Who We Are",
    about_title: "A Digital Agency Obsessed With Quality",
    about_p1: "Voniweb is a premium web development agency based in Taza & Fes, Morocco. We specialize in building beautiful, high-performing digital presences for ambitious businesses across Morocco and beyond.",
    about_p2: "From elegant landing pages to complex booking platforms, every project we take on is treated as a flagship — designed to impress, engineered to perform, and built to convert.",
    af1_title: "Bespoke Design", af1_desc: "Custom designs crafted exclusively for your brand — zero templates.",
    af2_title: "Lightning Fast", af2_desc: "Optimized for speed with 90+ Google PageSpeed scores as standard.",
    af3_title: "Dedicated Support", af3_desc: "Ongoing maintenance and support long after launch day.",
    serv_tag: "What We Offer", serv_title: "Services Built for Growth",
    serv_sub: "From your first website to a full digital overhaul, we have a service tailored to your business needs.",
    s1_title: "Website Development", s1_desc: "Tailored HTML5, Tailwind CSS, and JavaScript solutions built for speed, responsiveness, and conversion.",
    s2_title: "B2B / B2C Lead Generation", s2_desc: "B2C: Calendar filling. B2B: Excel lead files by niche and location, delivered ready to use.",
    s3_title: "Calendar Filling & Automation", s3_desc: "Automated scheduling and pre-call funnels that fill your calendar with qualified prospects.",
    s4_title: "SEO & Digital Branding", s4_desc: "On-page audits, keyword strategies, and visual identity design to dominate search results.",
    s5_title: "Booking Systems", s5_desc: "Seamless online appointment and reservation platforms for clinics, salons, hotels, and more.",
    s6_title: "Modern Redesigns", s6_desc: "Transform your outdated website into a competitive, modern digital asset that drives results.",
    s7_title: "SEO Optimization", s7_desc: "Get found on Google with technical SEO, on-page optimization, and local search domination.",
    s8_title: "Mobile Optimization", s8_desc: "Perfect rendering and UX across every device, from the latest iPhone to budget Android phones.",
    s9_title: "Website Maintenance", s9_desc: "Monthly care packages to keep your website fast, secure, updated, and performing at its best.",
    s_learn: "Learn more",
    why_tag: "Why Voniweb", why_title: "The Agency That Delivers, Every Time",
    why_p1: "We're not just developers — we're strategic partners in your digital growth. Every decision we make is in service of one goal: your success online.",
    why_p2: "Our clients trust us because we consistently deliver on time, on budget, and beyond expectations.",
    why_cta: "Work With Us",
    wc1_title: "Fast Delivery", wc1_desc: "Most projects go live within 1–3 business days without compromising quality.",
    wc2_title: "Secure & Reliable", wc2_desc: "SSL, regular backups, and security hardening are standard on every project.",
    wc3_title: "ROI Focused", wc3_desc: "Every design decision is made to increase conversions and business revenue.",
    wc4_title: "Clear Communication", wc4_desc: "Regular updates, transparent pricing, and no surprises — ever.",
    wc5_title: "Unlimited Revisions", wc5_desc: "We iterate until you're 100% satisfied — your vision, our mission.",
    wc6_title: "Local & Global", wc6_desc: "Morocco-based with international standards, serving clients from Casablanca to Canada.",
    proc_tag: "How We Work", proc_title: "Our Proven Process",
    proc_sub: "A transparent, structured workflow that delivers exceptional results with zero stress for you.",
    p1_title: "Discovery & Strategy", p1_desc: "We deep-dive into your business, audience, and competitors to craft a strategic digital roadmap tailored to your goals.",
    p2_title: "Design & Prototyping", p2_desc: "We create stunning wireframes and pixel-perfect mockups, iterating until every detail reflects your brand perfectly.",
    p3_title: "Development", p3_desc: "Clean, fast, secure code brings your design to life — fully responsive, SEO-ready, and performance-optimized.",
    p4_title: "Testing & QA", p4_desc: "Rigorous cross-browser, cross-device testing ensures your site is flawless before a single visitor sees it.",
    p5_title: "Launch & Support", p5_desc: "We handle deployment, domain setup, and provide ongoing support to keep your site performing at its peak.",
    st1: "Projects Completed", st2: "Happy Clients", st3: "On-Time Delivery", st4: "Industry Experience",
    port_tag: "Our Work", port_title: "Featured Projects",
    port_sub: "A selection of websites we've built that drive real results for real businesses.",
    filter_all: "All", filter_business: "Business", filter_restaurant: "Restaurant",
    filter_portfolio: "Portfolio", filter_landing: "Landing Page",
    view_project: "View Project",
    proj1: "Corporate Agency Website", proj2: "La Maison Gourmet", proj3: "SaaS Product Launch",
    proj4: "Creative Director Portfolio", proj5: "Tech Startup Website", proj6: "Café Nomad Booking System",
    test_tag: "Testimonials", test_title: "Clients Who Trust Us",
    t1_quote: '"Voniweb completely transformed our online presence. The website they built for us is stunning and our inquiries have tripled since launch. Absolutely worth every dirham."',
    t1_role: "CEO, Amrani Consulting",
    t2_quote: '"Professional, fast, and incredibly talented. Our restaurant website was ready in 10 days and our online reservations jumped by 200% the first month."',
    t2_role: "Owner, Le Palais Restaurant",
    t3_quote: '"I gave them my vision and they delivered something beyond what I imagined. The attention to detail is incredible and the support after launch is top-notch."',
    t3_role: "Photographer & Creative Director",
    t4_quote: '"From our first call to launch day, the experience was seamless. They understood exactly what our brand needed and delivered a site that truly represents us."',
    t4_role: "Director, NB Clinique",
    faq_tag: "FAQ", faq_title: "Frequently Asked Questions",
    faq1_q: "How long does a website take?", faq1_a: "Most business websites are delivered within 1–3 business days. Complex projects with custom features may take 3–4 weeks. We always provide a clear timeline upfront.",
    faq2_q: "What is included in the price?", faq2_a: "Design, development, mobile optimization, basic SEO, contact form, and 30 days of post-launch support are all included. No hidden fees, ever.",
    faq3_q: "Can I update my website myself?", faq3_a: "We handle all updates for you! For a small monthly fee, our team keeps your website fresh, secure, and always up to date — so you can focus on running your business, not managing a website.",
    faq4_q: "Do you work with clients outside Morocco?", faq4_a: "Absolutely. We work remotely with clients across Europe, Canada, the Middle East, and beyond. Communication is handled via WhatsApp, email, or video call.",
    faq5_q: "Will my website rank on Google?", faq5_a: "Every site we build is technically SEO-optimized from day one. For ongoing SEO campaigns and content strategy, we offer dedicated packages.",
    faq6_q: "What payment methods do you accept?", faq6_a: "We accept PayPal, bank transfer, Western Union, and MoneyGram.",
    cont_tag: "Get In Touch", cont_title: "Let's Build Something Great",
    cont_sub: "Ready to take your digital presence to the next level? Reach out and we'll get back to you within 24 hours.",
    ci_phone: "Phone", ci_email: "Email", ci_location: "Location",
    whatsapp_btn: "Chat on WhatsApp",
    form_name: "Full Name", form_email: "Email Address", form_phone: "Phone (Optional)",
    form_service: "Service Needed", form_select: "Select a service...",
    form_msg: "Tell Us About Your Project", form_send: "Send Message",
    form_success: "Thank you! We'll be in touch within 24 hours. 🎉",
    form_error: "Please fill in your name, email, and message.",
    footer_desc: "Premium website development for businesses in Morocco and beyond. Building digital excellence since 2022.",
    footer_services: "Services", footer_company: "Company", footer_contact: "Contact",
    footer_rights: "All rights reserved.", footer_made: "Crafted with ❤ in Morocco",
  },
  fr: {
    nav_home: "Accueil", nav_about: "À propos", nav_services: "Services", nav_portfolio: "Portfolio",
    nav_faq: "FAQ", nav_contact: "Contact", nav_cta: "Démarrer", nav_cta_mobile: "Devis Gratuit",
    hero_badge: "Agence Web Premium · Maroc",
    hero_h1a: "Nous Créons", hero_h1b: "Des Expériences Digitales", hero_h1c: "Qui Convertissent",
    hero_desc: "Voniweb conçoit des sites web haute performance, visuellement époustouflants, qui transforment les visiteurs en clients fidèles. Basés au Maroc, au service de clients du monde entier.",
    hero_cta1: "Démarrer Votre Projet", hero_cta2: "Voir Nos Réalisations",
    stat1: "Projets Réalisés", stat2: "Satisfaction Client",
    fc1_val: "Livraison Rapide", fc1_lbl: "Moy. 1–3 Jours", fc2_lbl: "Note Clients",
    scroll: "Défiler",
    about_tag: "Qui Sommes-Nous",
    about_title: "Une Agence Digitale Obsédée par la Qualité",
    about_p1: "Voniweb est un agency de développement web premium basé à Taza & Fès, Maroc. Nous nous spécialisons dans la création de présences numériques belles et performantes pour les entreprises ambitieuses.",
    about_p2: "Des pages d'atterrissage élégantes aux plateformes de réservation complexes, chaque projet est traité comme un projet phare — conçu pour impressionner, développé pour performer, construit pour convertir.",
    af1_title: "Design Sur Mesure", af1_desc: "Designs personnalisés exclusivement pour votre marque — aucun modèle.",
    af2_title: "Ultra Rapide", af2_desc: "Optimisé pour la vitesse avec des scores Google PageSpeed 90+ en standard.",
    af3_title: "Support Dédié", af3_desc: "Maintenance et support continus bien après le lancement.",
    serv_tag: "Ce Que Nous Offrons", serv_title: "Des Services Conçus pour Croître",
    serv_sub: "De votre premier site web à une refonte digitale complète, nous avons un service adapté à vos besoins.",
    s1_title: "Sites Business", s1_desc: "Sites professionnels qui valorisent votre marque et génèrent des leads 24h/24.",
    s2_title: "Génération de Leads B2B / B2C", s2_desc: "Expériences mono-page à fort taux de conversion, conçues pour transformer le trafic publicitaire en clients payants.",
    s3_title: "Remplissage Agenda & Automatisation", s3_desc: "Menus numériques alléchants, systèmes de réservation et expériences web immersives.",
    s4_title: "SEO & Branding Digital", s4_desc: "Présentez votre travail de façon élégante avec des portfolios personnels qui vous font embaucher.",
    s5_title: "Systèmes de Réservation", s5_desc: "Plateformes de prise de rendez-vous en ligne pour cliniques, salons, hôtels et plus.",
    s6_title: "Refonte Moderne", s6_desc: "Transformez votre site obsolète en un actif numérique compétitif et moderne.",
    s7_title: "Optimisation SEO", s7_desc: "Soyez trouvé sur Google avec le SEO technique, l'optimisation on-page et la domination locale.",
    s8_title: "Optimisation Mobile", s8_desc: "Rendu et UX parfaits sur chaque appareil, du dernier iPhone aux téléphones Android d'entrée de gamme.",
    s9_title: "Maintenance Web", s9_desc: "Forfaits mensuels pour garder votre site rapide, sécurisé, à jour et performant.",
    s_learn: "En savoir plus",
    why_tag: "Pourquoi Voniweb", why_title: "L'Agence Qui Livre, À Chaque Fois",
    why_p1: "Nous ne sommes pas que des développeurs — nous sommes des partenaires stratégiques de votre croissance digitale. Chaque décision que nous prenons sert un seul objectif : votre succès en ligne.",
    why_p2: "Nos clients nous font confiance parce que nous livrons toujours dans les délais, dans le budget, et au-delà des attentes.",
    why_cta: "Travailler Avec Nous",
    wc1_title: "Livraison Rapide", wc1_desc: "La plupart des projets sont mis en ligne en 7 à 14 jours ouvrables sans compromettre la qualité.",
    wc2_title: "Sécurisé & Fiable", wc2_desc: "SSL, sauvegardes régulières et renforcement de la sécurité sont standard sur chaque projet.",
    wc3_title: "Axé sur le ROI", wc3_desc: "Chaque décision de design vise à augmenter les conversions et les revenus de l'entreprise.",
    wc4_title: "Communication Claire", wc4_desc: "Mises à jour régulières, tarification transparente et aucune surprise — jamais.",
    wc5_title: "Révisions Illimitées", wc5_desc: "Nous itérons jusqu'à votre satisfaction totale — votre vision, notre mission.",
    wc6_title: "Local & Global", wc6_desc: "Basés au Maroc avec des standards internationaux, au service de clients de Casablanca au Canada.",
    proc_tag: "Notre Méthode", proc_title: "Notre Processus Éprouvé",
    proc_sub: "Un flux de travail transparent et structuré qui livre des résultats exceptionnels sans stress pour vous.",
    p1_title: "Découverte & Stratégie", p1_desc: "Nous plongeons dans votre entreprise, votre audience et vos concurrents pour créer une feuille de route digitale sur mesure.",
    p2_title: "Design & Prototypage", p2_desc: "Nous créons des wireframes époustouflants et des maquettes pixel-perfect, en itérant jusqu'à ce que chaque détail reflète parfaitement votre marque.",
    p3_title: "Développement", p3_desc: "Du code propre, rapide et sécurisé donne vie à votre design — entièrement responsive, prêt pour le SEO et optimisé.",
    p4_title: "Tests & Contrôle Qualité", p4_desc: "Des tests rigoureux sur tous navigateurs et appareils garantissent que votre site est impeccable avant le lancement.",
    p5_title: "Lancement & Support", p5_desc: "Nous gérons le déploiement, la configuration du domaine et fournissons un support continu.",
    st1: "Projets Réalisés", st2: "Clients Satisfaits", st3: "Livraison à Temps", st4: "Années d'Expérience",
    port_tag: "Nos Réalisations", port_title: "Projets en Vedette",
    port_sub: "Une sélection de sites web que nous avons construits et qui génèrent de vrais résultats pour de vraies entreprises.",
    filter_all: "Tous", filter_business: "Business", filter_restaurant: "Restaurant",
    filter_portfolio: "Portfolio", filter_landing: "Page d'Atterrissage",
    view_project: "Voir le Projet",
    proj1: "Site d'Agence Corporate", proj2: "La Maison Gourmet", proj3: "Lancement Produit SaaS",
    proj4: "Portfolio Directeur Créatif", proj5: "Site Startup Tech", proj6: "Système de Réservation Café Nomad",
    test_tag: "Témoignages", test_title: "Clients Qui Nous Font Confiance",
    t1_quote: "« Voniweb a complètement transformé notre présence en ligne. Le site qu'ils ont créé est époustouflant et nos demandes ont triplé depuis le lancement. Absolument inestimable. »",
    t1_role: "PDG, Amrani Consulting",
    t2_quote: "« Professionnel, rapide et incroyablement talentueux. Notre site de restaurant était prêt en 10 jours et nos réservations en ligne ont augmenté de 200% le premier mois. »",
    t2_role: "Propriétaire, Le Palais Restaurant",
    t3_quote: "« Je leur ai donné ma vision et ils ont livré quelque chose au-delà de ce que j'imaginais. L'attention aux détails est incroyable et le support après lancement est irréprochable. »",
    t3_role: "Photographe & Directeur Créatif",
    t4_quote: "« Du premier appel au jour du lancement, l'expérience a été fluide. Ils ont parfaitement compris ce dont notre marque avait besoin. »",
    t4_role: "Directrice, NB Clinique",
    faq_tag: "FAQ", faq_title: "Questions Fréquemment Posées",
    faq1_q: "Combien de temps prend un site ?", faq1_a: "La plupart des sites business sont livrés en 7 à 14 jours ouvrables. Les projets complexes peuvent prendre 3 à 4 semaines. Nous fournissons toujours un calendrier clair dès le départ.",
    faq2_q: "Qu'est-ce qui est inclus dans le prix ?", faq2_a: "Design, développement, optimisation mobile, SEO de base, formulaire de contact et 30 jours de support post-lancement sont tous inclus. Aucun frais caché, jamais.",
    faq3_q: "Puis-je mettre à jour mon site moi-même ?", faq3_a: "Nous gérons toutes les mises à jour pour vous ! Pour un petit forfait mensuel, notre équipe maintient votre site web à jour, sécurisé et toujours au top — pour que vous puissiez vous concentrer sur votre business.",
    faq4_q: "Travaillez-vous avec des clients hors du Maroc ?", faq4_a: "Absolument. Nous travaillons à distance avec des clients en Europe, au Canada, au Moyen-Orient et ailleurs. La communication se fait via WhatsApp, email ou appel vidéo.",
    faq5_q: "Mon site sera-t-il bien référencé sur Google ?", faq5_a: "Chaque site que nous construisons est techniquement optimisé pour le SEO dès le premier jour. Pour les campagnes SEO continues, nous proposons des forfaits dédiés.",
    faq6_q: "Quels modes de paiement acceptez-vous ?", faq6_a: "Nous acceptons les virements bancaires, PayPal et les paiements en espèces au Maroc. Le paiement est généralement réparti : 50% à la commande, 50% à la livraison.",
    cont_tag: "Nous Contacter", cont_title: "Construisons Quelque Chose de Grand",
    cont_sub: "Prêt à élever votre présence digitale ? Contactez-nous et nous vous répondrons dans les 24 heures.",
    ci_phone: "Téléphone", ci_email: "Email", ci_location: "Localisation",
    whatsapp_btn: "Discuter sur WhatsApp",
    form_name: "Nom Complet", form_email: "Adresse Email", form_phone: "Téléphone (Optionnel)",
    form_service: "Service Souhaité", form_select: "Sélectionnez un service...",
    form_msg: "Parlez-nous de Votre Projet", form_send: "Envoyer le Message",
    form_success: "Merci ! Nous vous contacterons dans les 24 heures. 🎉",
    form_error: "Veuillez remplir votre nom, email et message.",
    footer_desc: "Développement web premium pour les entreprises au Maroc et au-delà. L'excellence digitale depuis 2022.",
    footer_services: "Services", footer_company: "Entreprise", footer_contact: "Contact",
    footer_rights: "Tous droits réservés.", footer_made: "Créé avec ❤ au Maroc",
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
function animateCounter(el) {
  const target = +el.getAttribute('data-target');
  const suffix = el.innerHTML.match(/<span>(.*?)<\/span>/)?.[1] || '';
  let start = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.innerHTML = Math.floor(start) + (suffix ? `<span>${suffix}</span>` : '');
    if (start >= target) clearInterval(timer);
  }, 25);
}
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));

/* ── Portfolio filter ───────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.portfolio-card').forEach(card => {
      const cat = card.getAttribute('data-cat');
      card.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
    });
  });
});

/* ── FAQ ────────────────────────────────────────────────── */
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ── Form ───────────────────────────────────────────────── */
function submitForm() {
  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const phone = document.getElementById('fphone').value.trim();
  const serviceEl = document.getElementById('fservice');
  const service = serviceEl.value;
  const serviceLabel = service ? serviceEl.options[serviceEl.selectedIndex].text : '';
  const date = document.getElementById('fdate').value;
  const period = document.getElementById('fperiod').value;
  const msg = document.getElementById('fmsg').value.trim();
  const msgEl = document.getElementById('formMsg');
  const button = document.querySelector('.form-submit');
  const t = translations[currentLang];

  if (!name || !email || !date || !period || !msg) {
    msgEl.className = 'form-msg error';
    msgEl.textContent = t.form_error;
    return;
  }

  const originalButtonHTML = button.innerHTML;
  button.disabled = true;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';

  const body = new URLSearchParams({
    name: name,
    email: email,
    phone: phone,
    service: serviceLabel,
    date: date,
    period: period,
    message: msg
  });

  fetch('https://script.google.com/macros/s/AKfycbxpD5GIUh5DrS9t8fyzn1I9-BdMjkq2ALgaXJYUOiv4mEu0sAe-7CKoVcoOCr5bKZTIMQ/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    body: body.toString()
  })
  .then(function() {
    msgEl.className = 'form-msg success';
    msgEl.textContent = 'We received your request. We’ll get back to you shortly.';
    document.getElementById('fname').value = '';
    document.getElementById('femail').value = '';
    document.getElementById('fphone').value = '';
    document.getElementById('fservice').value = '';
    document.getElementById('fdate').value = '';
    document.getElementById('fperiod').value = '';
    document.getElementById('fmsg').value = '';
  })
  .catch(function() {
    msgEl.className = 'form-msg error';
    msgEl.textContent = 'Something went wrong. Please try again.';
  })
  .finally(function() {
    button.disabled = false;
    button.innerHTML = originalButtonHTML;
  });
}

/* ── Smooth anchor close mobile nav ─────────────────────── */
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



(function () {
  var dateInput = document.getElementById('fdate');
  if (dateInput) {
    var now = new Date();
    var localToday = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString().split('T')[0];
    dateInput.min = localToday;
  }
})();

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
function syncFaqAccessibility() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const open = item.classList.contains('open');
    item.querySelector('.faq-q').setAttribute('aria-expanded', String(open));
    const answer = item.querySelector('.faq-a');
    answer.setAttribute('aria-hidden', String(!open));
    answer.inert = !open;
  });
}
const accessibilityObserver = new MutationObserver(() => {
  syncNavigationAccessibility();
  syncFaqAccessibility();
});
accessibilityObserver.observe(mobileNav, { attributes: true, attributeFilter: ['class'] });
document.querySelectorAll('.faq-item, .lang-btn').forEach(el => {
  accessibilityObserver.observe(el, { attributes: true, attributeFilter: ['class'] });
});
document.querySelectorAll('#hamburger, .faq-q').forEach(control => {
  control.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      control.click();
    }
  });
});
syncNavigationAccessibility();
syncFaqAccessibility();
