// Book structure - update this when adding new chapters
const bookStructure = [
  '#/00-Introduction/README.md',
  '#/01-Docker/README.md',
  '#/02-PostgreSQL/README.md',
  '#/03-BookstoreProject/README.md',
  '#/04-PagesApp/README.md',
  '#/05-UserRegistration/README.md',
  '#/06-StaticAssets/README.md',
  '#/07-AdvancedUserRegistration/README.md',
  '#/08-Environment-Variables/README.md',
  '#/09-Email/README.md',
  '#/10-Books-App/README.md',
  '#/11-Reviews-App/README.md',
  '#/12-File-Image-Uploads/README.md',
  '#/13-Permissions/README.md',
  '#/14-Search/README.md',
  '#/15-Performance/README.md',
  '#/16-Deployment/README.md',
  '#/Conclusion/README.md'
];

// Theme initialization on load
document.addEventListener('DOMContentLoaded', setInitialTheme);

// Docsify configuration
window.$docsify = {
  name: 'Django for Professionals',
  loadSidebar: true,
  themeColor: '#3f51b5',
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md'
  },
  plugins: [
    function(hook, vm) {
      hook.doneEach(function() {
        addNavigationButtons();
        if (!document.getElementById('theme-toggle')) {
          addThemeToggle();
        }
      });
    }
  ]
};

// Fixed navigation buttons
function addNavigationButtons() {
  const currentHash = window.location.hash.split('?')[0];
  const currentIndex = bookStructure.findIndex(path => currentHash.startsWith(path));
  
  if (currentIndex >= 0) {
    let navHtml = '<div class="nav-buttons" style="border:2px solid red;">';
    
    // Previous button
    if (currentIndex > 0) {
      navHtml += `<a href="${bookStructure[currentIndex-1]}">← Previous</a>`;
    }
    
    // Next button
    if (currentIndex < bookStructure.length-1) {
      navHtml += `<a href="${bookStructure[currentIndex+1]}">Next →</a>`;
    }
    
    navHtml += '</div>';
    document.querySelector('.content').insertAdjacentHTML('beforeend', navHtml);
  }
}

// Theme functions
function addThemeToggle() {
  const toggle = document.createElement('div');
  toggle.id = 'theme-toggle';
  toggle.innerHTML = '🌓';
  document.body.appendChild(toggle);
  toggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const lightTheme = document.getElementById('light-theme');
  const darkTheme = document.getElementById('dark-theme');
  const isDark = lightTheme.disabled;
  
  lightTheme.disabled = !isDark;
  darkTheme.disabled = isDark;
  localStorage.setItem('docsify-theme', isDark ? 'light' : 'dark');
}

function setInitialTheme() {
  if (localStorage.getItem('docsify-theme') === 'dark') {
    document.getElementById('light-theme').disabled = true;
    document.getElementById('dark-theme').disabled = false;
  }
}
