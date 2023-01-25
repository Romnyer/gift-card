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
      ],
      grats = document.querySelector('.grats'),
      popup = document.querySelector('.popup'),
      popupButton = document.querySelector('.popup__button');

function changeText(element, text) {
  element.textContent = text;
}

function getPhrase(list) {
  const randomNumber = Math.floor(Math.random() * list.length);
  return list[randomNumber];
}

popupButton.addEventListener('click', () => {
  popup.classList.add('popup_closed');
})

button.addEventListener('click', () => {
  container.classList.add('container_active');

  //пытаюсь сделать container__img нормальным по высоте
  //button.classList.add('button_active');

  if (title.textContent === 'Абонемент на ремонт') {
    changeText(title, 'ВЖУХ и ремонт сделан!');
    img.classList.add('container__img_active');
    setTimeout(() => {
      changeText(button, "Или лучше...");
    },1500);
  }

  else {
    changeText(title, getPhrase(phrases));
  }
});
