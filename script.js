document.getElementById('flipBtn').addEventListener('click', () => {
  const flip = Math.random() < 0.5 ? 'Heads' : 'Tails';
  document.getElementById('coin').textContent = flip === 'Heads' ? '👑' : '🌀';
  document.getElementById('result').innerText = `It's ${flip}!`;
});
