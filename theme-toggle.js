document.addEventListener('DOMContentLoaded', function() {
  // Create theme toggle button
  const themeToggle = document.createElement('div');
  themeToggle.id = 'theme-toggle';
  themeToggle.innerHTML = '🌓';
  themeToggle.style.position = 'fixed';
  themeToggle.style.bottom = '20px';
  themeToggle.style.right = '20px';
  themeToggle.style.cursor = 'pointer';
  themeToggle.style.zIndex = '1000';
  themeToggle.style.fontSize = '24px';
  document.body.appendChild(themeToggle);

  // Theme switching logic
  themeToggle.addEventListener('click', function() {
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
  });

  // Check for saved theme preference
  if (localStorage.getItem('docsify-theme') === 'dark') {
    document.getElementById('light-theme').disabled = true;
    document.getElementById('dark-theme').disabled = false;
  }
});
