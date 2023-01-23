const container = document.querySelector('.container');
const title = document.querySelector('.container__title');
const button = document.querySelector('.button');
const buttonText = document.querySelector('.button__text');
const phrases = [
  'Суслочайки, общий сбор!',
  'В очко себе тыкни!',
  'Когда в Чебы?',
  'По пиву так по пиву',
  'Инютино – ВО!',
  'РЕМОНТ',
  'В Бристоль, друзья!',
  'Ээй БРАТ ЭЛАНТРА',
  'Анек-дот'
]

const startChanges = function(text) {
  title.textContent = text;
  title.classList.add('container__title_active');
}

const changeText = function(element, text) {
  element.textContent = text;
}

const getPhrase = function(list) {
  const randomNumber = Math.floor(Math.random() * list.length);
  return list[randomNumber];
}

button.addEventListener('click', () => {
  if (title.textContent === 'Абонемент на ремонт') {
    startChanges('РЕМОНТ');
  }

  else {
    changeText(title, getPhrase(phrases));
  }
})
