
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('comment-form');
  const list = document.getElementById('comment-list');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const text = document.getElementById('comment-input').value.trim();
    if (!text) return;
    const div = document.createElement('div');
    div.className = 'comment';
    div.textContent = text;
    list.appendChild(div);
    document.getElementById('comment-input').value = '';
  });
});
