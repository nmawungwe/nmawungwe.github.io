function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('theme-toggle');
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    if (button) button.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    if (button) button.textContent = '🌙';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    document.body.classList.add('dark-mode');
  }
  const button = document.getElementById('theme-toggle');
  if (button) {
    button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  }
});
