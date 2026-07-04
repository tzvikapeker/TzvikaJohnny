// Shared Javascript for Tzvika Johnny Peker 2036 Portfolio

// Languages supported
const LANGUAGES = ['he', 'en', 'ru', 'ar'];

// Toggle Menu Sidebar
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('translate-x-full');
  }
}

// Toggle Language
function toggleLang() {
  const html = document.documentElement;
  let currentLang = html.getAttribute('data-lang') || 'he';
  let nextIndex = (LANGUAGES.indexOf(currentLang) + 1) % LANGUAGES.length;
  let newLang = LANGUAGES[nextIndex];
  
  setLanguage(newLang);
}

// Set Language
function setLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute('data-lang', lang);
  
  // Set text direction based on language
  const isRtl = (lang === 'he' || lang === 'ar');
  html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  
  localStorage.setItem('siteLang', lang);
  
  // Trigger page-specific language update hook if it exists
  if (typeof updatePageLang === 'function') {
    updatePageLang(lang);
  }
}

// Accessibility Menu Actions
function toggleAccessMenu() {
  const menu = document.getElementById('access-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function accessAction(type, btn) {
  const body = document.body;
  
  if (type === 'reset') {
    body.classList.remove('high-contrast', 'large-text', 'highlight-links', 'no-animations');
    localStorage.removeItem('access_contrast');
    localStorage.removeItem('access_textSize');
    localStorage.removeItem('access_links');
    localStorage.removeItem('access_stopAnim');
    
    document.querySelectorAll('.access-btn').forEach(b => b.classList.remove('active'));
    return;
  }
  
  const activeClassMap = {
    'contrast': 'high-contrast',
    'textSize': 'large-text',
    'links': 'highlight-links',
    'stopAnim': 'no-animations'
  };
  
  const className = activeClassMap[type];
  if (className) {
    const isActive = body.classList.toggle(className);
    localStorage.setItem(`access_${type}`, isActive ? 'true' : 'false');
    
    if (btn) {
      btn.classList.toggle('active', isActive);
    }
  }
}

// Initialize settings on page load
document.addEventListener('DOMContentLoaded', () => {
  // Load Language
  const savedLang = localStorage.getItem('siteLang') || 'he';
  setLanguage(savedLang);
  
  // Load Accessibility Preferences
  const body = document.body;
  const types = ['contrast', 'textSize', 'links', 'stopAnim'];
  const activeClassMap = {
    'contrast': 'high-contrast',
    'textSize': 'large-text',
    'links': 'highlight-links',
    'stopAnim': 'no-animations'
  };
  
  types.forEach(type => {
    const val = localStorage.getItem(`access_${type}`);
    if (val === 'true') {
      body.classList.add(activeClassMap[type]);
      // Find button in document and make it active
      const btn = document.querySelector(`[onclick*="accessAction('${type}'"]`);
      if (btn) {
        btn.classList.add('active');
      }
    }
  });
  
  // Close accessibility menu when clicking outside
  document.addEventListener('click', (event) => {
    const widget = document.getElementById('accessibility-widget');
    const menu = document.getElementById('access-menu');
    if (widget && menu && !widget.contains(event.target)) {
      menu.classList.add('hidden');
    }
  });

  // Init 3D Parallax Tilt Effects
  init3DTilt();
});

// 3D Parallax Tilt Effect for elements with class 'tilt-3d'
function init3DTilt() {
  const elements = document.querySelectorAll('.tilt-3d');
  
  elements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      if (document.body.classList.contains('no-animations')) {
        el.style.transform = '';
        return;
      }
      
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within element
      const y = e.clientY - rect.top;  // y position within element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation (max 15 degrees)
      const rotateX = ((centerY - y) / centerY) * 12; 
      const rotateY = ((x - centerX) / centerX) * 12;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      el.style.transition = 'transform 0.1s ease';
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      el.style.transition = 'transform 0.5s ease';
    });
  });
}
