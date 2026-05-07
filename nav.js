// Shared navigation — injected by each page
const LOGO_SVG = `<svg width="42" height="42" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gNav" x1="18" y1="14" x2="62" y2="58" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#e8391a"/><stop offset="100%" stop-color="#f5841f"/>
    </linearGradient>
  </defs>
  <rect x="18" y="22" width="36" height="36" stroke="url(#gNav)" stroke-width="1.5" fill="none"/>
  <rect x="26" y="14" width="36" height="36" stroke="url(#gNav)" stroke-width="1.5" fill="none"/>
  <line x1="18" y1="22" x2="26" y2="14" stroke="url(#gNav)" stroke-width="1.5"/>
  <line x1="54" y1="22" x2="62" y2="14" stroke="url(#gNav)" stroke-width="1.5"/>
  <line x1="18" y1="58" x2="26" y2="50" stroke="url(#gNav)" stroke-width="1.5"/>
  <line x1="54" y1="58" x2="62" y2="50" stroke="url(#gNav)" stroke-width="1.5"/>
  <line x1="36" y1="40" x2="36" y2="6"  stroke="#f5841f" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="36,2 33,8 39,8" fill="#f5841f"/>
  <line x1="36" y1="40" x2="10" y2="56" stroke="#f5841f" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="6,58 11,53 15,59" fill="#f5841f"/>
  <line x1="36" y1="40" x2="66" y2="56" stroke="#f5841f" stroke-width="1.5" stroke-dasharray="3,2"/>
  <polygon points="70,58 66,52 72,58" fill="#f5841f"/>
  <circle cx="36" cy="40" r="3" fill="#e8391a"/>
</svg>`;

function renderNav(activePage) {
  const pages = [
    { href: 'index.html',        label: 'Start',        key: 'home' },
    { href: 'skanowanie.html',   label: 'Skanowanie 3D', key: 'skan' },
    { href: 'fotogrametria.html',label: 'Fotogrametria', key: 'foto' },
    { href: 'druk.html',         label: 'Druk 3D',       key: 'druk' },
    { href: 'kontakt.html',      label: 'Kontakt',       key: 'kontakt', cta: true },
  ];
  const links = pages.map(p => {
    const cls = [p.key === activePage ? 'active' : '', p.cta ? 'nav-cta' : ''].filter(Boolean).join(' ');
    return `<li><a href="${p.href}" class="${cls}">${p.label}</a></li>`;
  }).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a class="nav-logo" href="index.html">
        ${LOGO_SVG}
        <div class="nav-logo-text"><span class="r">SCAN</span> <span class="o">EXPERT</span></div>
      </a>
      <ul class="nav-links">${links}</ul>
    </nav>`;
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-logo"><span class="r">SCAN</span> <span class="o">EXPERT</span></div>
      <div class="footer-copy">© 2025 Scan Expert · Nowy wymiar budownictwa</div>
      <div style="font-size:0.78rem;color:var(--text-muted)">biuro@scanexpert.pl · 536 297 099</div>
    </footer>`;
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}