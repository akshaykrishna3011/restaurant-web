const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector('.nav-btn.next');
const prevBtn = document.querySelector('.nav-btn.prev');

let current = 2;
let isSliding = false;

function updateCards() {
  cards.forEach((card, i) => {
    card.className = 'card';
    if (i === current - 2 || (current - 2 < 0 && i === cards.length + (current - 2)))
      card.classList.add('prev2');
    else if (i === current - 1 || (current - 1 < 0 && i === cards.length + (current - 1)))
      card.classList.add('prev');
    else if (i === current)
      card.classList.add('active');
    else if (i === current + 1 || (current + 1 >= cards.length && i === (current + 1) % cards.length))
      card.classList.add('next');
    else if (i === current + 2 || (current + 2 >= cards.length && i === (current + 2) % cards.length))
      card.classList.add('next2');
  });
}

function nextSlide() {
  if (isSliding) return;
  isSliding = true;
  current = (current + 1) % cards.length;
  updateCards();
  setTimeout(() => (isSliding = false), 1000); // smooth delay
}

function prevSlide() {
  if (isSliding) return;
  isSliding = true;
  current = (current - 1 + cards.length) % cards.length;
  updateCards();
  setTimeout(() => (isSliding = false), 1000);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

updateCards();
