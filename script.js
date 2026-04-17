	document.getElementById("year").textContent = new Date().getFullYear();
	
  function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeBtn');
    html.classList.toggle('dark');
    btn.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  }

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('themeBtn').textContent = '☀️';
    });
  }

  function showTab(name, btn) {
    document.querySelectorAll('.pricing-table-wrap').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    btn.classList.add('active');
  }

  function submitForm() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contactField').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !contact || !message) {
      alert('Proszę wypełnić wszystkie wymagane pola.');
      return;
    }
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('name').value = '';
    document.getElementById('contactField').value = '';
    document.getElementById('device').value = '';
    document.getElementById('message').value = '';
    setTimeout(() => { document.getElementById('formSuccess').style.display = 'none'; }, 5000);
  }
