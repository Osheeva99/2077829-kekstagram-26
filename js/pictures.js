import {getDescription} from './data.js';
//Нашли шаблон и его содержимое
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
//Создали фрагмент
const pictureListFragment = document.createDocumentFragment();
//Создали массив с описанием фотографий
const pictureDescriptions = getDescription();

//Цикл для создания DOM-элементов(фотографий)
for (let i = 0; i < pictureDescriptions.length; i++) {
  //Скопировали содержимое шаблона
  const picture = pictureTemplate.cloneNode(true);
  //Нашли элементы из созданной копии
  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  //Записываем в переменную свойство URL фотографии i-того элемента массива pictureDescriptions
  const photoUrl = pictureDescriptions[i].url;
  //Записываем в переменную количество лайков (свойство likes i-того элемента массива pictureDescriptions)
  const photoLikes = pictureDescriptions[i].likes;
  //Записываем в переменную массив комментариев
  //(массив является свойством comments i-того элемента массива pictureDescriptions
  const photoComments = pictureDescriptions[i].comments;
  //Записываем в переменную количество комментариев (длину массива комментариев)
  //Длина массива комментариев, который является свойством comments i-того элемента массива pictureDescriptions
  const countPhotoComments = photoComments.length;
  //Заполнили созданные элементы данными из массива pictureDescriptions
  pictureImg.src = photoUrl;
  pictureLikes.textContent = photoLikes;
  pictureComments.textContent = countPhotoComments;
  //Вложили элемент с фотографией во фрагмент
  pictureListFragment.appendChild(picture);
}

//Нашли контейнер для будущих фотографий
const pictureContainer = document.querySelector('.pictures');
//Вложили фрагмент в контейнер
pictureContainer.appendChild(pictureListFragment);
