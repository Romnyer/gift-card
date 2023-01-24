const container = document.querySelector('.container'),
      title = document.querySelector('.container__title'),
      img = document.querySelector('.container__img'),
      button = document.querySelector('.button'),
      phrases = [
        'Суслочайки, общий сбор!',
        'В очко себе тыкни!',
        'В Чебы?',
        'Го по пиве?',
        'В Инютино?',
        'В Бристоль, друзья!',
        'Анек-дот!'
      ];

function changeText(element, text) {
  element.textContent = text;
}

function getPhrase(list) {
  const randomNumber = Math.floor(Math.random() * list.length);
  return list[randomNumber];
}

button.addEventListener('click', () => {
  if (title.textContent === 'Абонемент на ремонт') {
    changeText(title, 'ВЖУХ и ремонт сделан!');
    img.style.display = 'block';
    setTimeout(() => {
      changeText(button, "Или лучше...");
    },1500);
  }

  else {
    changeText(title, getPhrase(phrases));
  }
});
