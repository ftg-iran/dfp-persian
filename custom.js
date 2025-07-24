// Book structure - update this when adding new chapters
const bookStructure = [
  '#/00-Introduction/README',
  '#/01-Docker/README',
  '#/02-PostgreSQL/README',
  '#/03-BookstoreProject/README',
  '#/04-PagesApp/README',
  '#/05-UserRegistration/README',
  '#/06-StaticAssets/README',
  '#/07-AdvancedUserRegistration/README',
  '#/08-Environment-Variables/README',
  '#/09-Email/README',
  '#/10-Books-App/README',
  '#/11-Reviews-App/README',
  '#/12-File-Image-Uploads/README',
  '#/13-Permissions/README',
  '#/14-Search/README',
  '#/15-Performance/README',
  '#/16-Deployment/README',
  '#/Conclusion/README'
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

// Fixed navigation buttons with debug logging
function addNavigationButtons() {
  const currentHash = window.location.hash.split('?')[0];
  console.log('Current URL:', currentHash); // Debug log
  
  const currentIndex = bookStructure.findIndex(path => currentHash === path);
  console.log('Matched Index:', currentIndex); // Debug log
  
  if (currentIndex >= 0) {
    let navHtml = '<div class="nav-buttons" style="border:2px solid red;padding:10px;margin-top:20px;">';
    
    if (currentIndex > 0) {
      navHtml += `<a href="${bookStructure[currentIndex-1]}" style="padding:8px 16px;background:#3f51b5;color:white;border-radius:4px;">← Previous</a>`;
    } else {
      navHtml += '<span></span>';
    }
    
    if (currentIndex < bookStructure.length - 1) {
      navHtml += `<a href="${bookStructure[currentIndex+1]}" style="padding:8px 16px;background:#3f51b5;color:white;border-radius:4px;margin-left:auto;">Next →</a>`;
    }
    
    navHtml += '</div>';
    const content = document.querySelector('.content');
    if (content) {
      content.insertAdjacentHTML('beforeend', navHtml);
      console.log('Added navigation buttons'); // Debug log
    }
  }
}

// Theme functions (keep these the same)
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
