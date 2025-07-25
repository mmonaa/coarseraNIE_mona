const toggleBtn = document.querySelector('.dark-toggle');
const isDark = localStorage.getItem('darkMode') === 'true';
if (isDark) document.body.classList.add('dark');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});
