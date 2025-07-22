// Book structure - update this when adding new chapters
const bookStructure = [
  '00- Introduction/README.md',
  '01- Docker/README.md',
  '02- PostgreSQL/README.md',
  '03- Bookstore-Project/README.md',
  '04- Pages-App/README.md',
  '05- User-Registration/README.md',
  '06- Static-Assets/README.md',
  '07- Advanced-User-Registration/README.md',
  '08- Environment-Variables/README.md',
  '09- Email/README.md',
  '10- Books-App/README.md',
  '11- Reviews-App/README.md',
  '12- File-Image-Uploads/README.md',
  '13- Permissions/README.md',
  '14- Search/README.md',
  '15- Performance/README.md',
  '16- Deployment/README.md',
  'Conclusion/README.md'
];

// Docsify configuration
window.$docsify = {
  name: 'Your Book Title',
  loadSidebar: true,
  themeColor: '#3f51b5',
  alias: {
    '/.*/_sidebar.md': '/_sidebar.md'
  },
  plugins: [
    // Auto navigation buttons
    function(hook, vm) {
      hook.doneEach(function() {
        addNavigationButtons();
        addThemeToggle();
        setInitialTheme();
      });
    }
  ]
};

// Add navigation buttons to bottom of each page
function addNavigationButtons() {
  const currentPath = window.location.pathname;
  const currentIndex = bookStructure.findIndex(item => currentPath.includes(item));
  
  if (currentIndex >= 0) {
    let navHtml = '<div class="nav-buttons">';
    
    // Previous button
    if (currentIndex > 0) {
      navHtml += `<a href="/${bookStructure[currentIndex - 1]}">← Previous Chapter</a>`;
    } else {
      navHtml += '<span></span>';
    }
    
    // Next button
    if (currentIndex < bookStructure.length - 1) {
      navHtml += `<a href="/${bookStructure[currentIndex + 1]}">Next Chapter →</a>`;
    }
    
    navHtml += '</div>';
    const content = document.querySelector('.content');
    if (content) {
      content.insertAdjacentHTML('beforeend', navHtml);
    }
  }
}

// Theme toggle functionality
function addThemeToggle() {
  if (document.getElementById('theme-toggle')) return;
  
  const toggle = document.createElement('div');
  toggle.id = 'theme-toggle';
  toggle.innerHTML = '🌓';
  document.body.appendChild(toggle);
  
  toggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  const lightTheme = document.getElementById('light-theme');
  const darkTheme = document.getElementById('dark-theme');
  
  if (lightTheme.disabled) {
    lightTheme.disabled = false;
    darkTheme.disabled = true;
    localStorage.setItem('docsify-theme', 'light');
  } else {
    lightTheme.disabled = true;
    darkTheme.disabled = false;
    localStorage.setItem('docsify-theme', 'dark');
  }
}

function setInitialTheme() {
  const savedTheme = localStorage.getItem('docsify-theme');
  if (savedTheme === 'dark') {
    document.getElementById('light-theme').disabled = true;
    document.getElementById('dark-theme').disabled = false;
  }
}
