const languageToggle = document.getElementById('language-toggle');

function setLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang === 'he' ? 'he' : 'en';
  document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
  languageToggle.textContent = lang === 'he' ? 'English' : 'עברית';
  localStorage.setItem('lang', lang);
}

if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-lang') || 'en';
    setLanguage(current === 'en' ? 'he' : 'en');
  });
}

const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);
