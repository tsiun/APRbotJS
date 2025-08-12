// ===== Логика калькулятора =====
const principalInput = document.getElementById('principal');
const yieldInput = document.getElementById('yield');
const daysInput = document.getElementById('days');
const resultDiv = document.getElementById('result');

function updateResults() {
  const principal = parseFloat(principalInput.value);
  const yieldValue = parseFloat(yieldInput.value);
  const days = parseFloat(daysInput.value);

  if (isNaN(principal) || isNaN(yieldValue) || isNaN(days) || principal <= 0 || days <= 0) {
    resultDiv.innerHTML = 'Enter valid positive numbers to calculate.';
    return;
  }

  const roi = (yieldValue / principal) * 100;
  const apr = roi * (365 / days);

  resultDiv.innerHTML = `
    <strong>ROI:</strong> ${roi.toFixed(2)}%<br>
    <strong>APR:</strong> ${apr.toFixed(2)}%
  `;
}

[principalInput, yieldInput, daysInput].forEach(input => {
  input.addEventListener('input', updateResults);
});

// ===== Переключатель темы =====
const toggleBtn = document.getElementById('theme-toggle');

// Загружаем сохранённую тему
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
