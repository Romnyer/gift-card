const container = document.querySelector('.container'),
      title = document.querySelector('.container__title'),
      img = document.querySelector('.container__img'),
      button = document.querySelector('.button'),
      phrases = [
        'Суслочайки, общий сбор!',
        'В очко себе посигналь!',
        'В Чебы?',
        'Го по пиве?',
        'В Инютино?',
        'В Бристоль, друзья!',
        'Анек-дот!',
        'Ну что, нищета?! Поехали!',
        'ОТКУДА ТЫ ЭТO СКАЗАЛ???!!',
        'Сиииськи ии драакоооныы',
        'Карбюратор, каленвал! Свечи? Свечи...',
        'ОоО МОЯ ОБОРОНА',
        'Ии камнем вниииз',
        'Кхе'
      ],
      grats = document.querySelector('.grats'),
      gratsPics = document.querySelectorAll('.grats__pic'),
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


//Скрытие фото карточки
gratsPics.forEach(pic => {

  //На телефоне
  pic.addEventListener('touchstart', () => {
    pic.style.opacity = '0';
  })

  pic.addEventListener('touchend', () => {
    pic.style.opacity = '1';
  })

  //На пк
  pic.addEventListener('mousedown', () => {
    pic.style.opacity = '0';
  })

  pic.addEventListener('mouseup', () => {
    pic.style.opacity = '1';
  })
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
