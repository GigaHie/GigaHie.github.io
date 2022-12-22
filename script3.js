const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  alert(`Thank you ${name} for your message! We will get back to you at ${email} as soon as possible.\n\nMessage:\n${message}`);
});
const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  menu.classList.toggle('visible');
});
