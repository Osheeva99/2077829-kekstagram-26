import {checkStringLength} from './util.js';

//Константы
const HASHTAG_MAX_AMOUNT = 5;
const COMMENT_MAX_LENGTH = 140;

const ErrorMessage = {
  HASHTAG_FORMAT : 'Каждый хэштег должен начинаться с # и содержать от 1 до 19 букв и/или цифр',
  HASHTAG_AMOUNT : `Допустимо не более ${HASHTAG_MAX_AMOUNT} хэштегов`,
  HASHTAG_REPEAT : 'Хэштеги не должны повторяться',
  COMMENT_LENGTH : `Максимальная длина комментария - ${COMMENT_MAX_LENGTH} символов`
};

//Находим нужные элементы
const uploadFile = document.querySelector('#upload-file');
const editingWindow = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closingEditingButton = body.querySelector('#upload-cancel');

//Добавляем обработчик на окно редактирования изображения
uploadFile.addEventListener('change', () => {
  editingWindow.classList.remove('hidden');
  body.classList.add('modal-open');
});

//Добавляем обработчик на кнопку закрытия окна редактирования изображения
closingEditingButton.addEventListener('click', () => {
  editingWindow.classList.add('hidden');
  body.classList.remove('modal-open');
});

//Добавляем обработчик закрытия окна редактирования изображения Esc
document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    editingWindow.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

//Подключаем pristine на всю форму загрузки изображения
const imgUploadForm = body.querySelector('.img-upload__form');
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
}, true);

//Проверка длины комментария
const commentField = body.querySelector('.text__description');
const validComment = () =>
  checkStringLength(commentField.value, COMMENT_MAX_LENGTH);

//Функция берет строку хэштегов из поля и преобразовавыет их в массив
const hashtagField = body.querySelector('.text__hashtags');
const getHashtags = () => {
  //Переводим введенные хэштеги в нижний регистр
  const hashtagsInLowerCase = hashtagField.value.toLowerCase();
  //Удаляем лишние  пробелы в строке с хэштегами и заносим хэштеги в массив
  const hashtags = hashtagsInLowerCase.replace(/^ +| +$|( )+/g,'$1').split(' ');
  return hashtags;
};

//Проверка количества хэштегов
const isHashtagAmountValid = () => {
  const hashtags = getHashtags();
  return (hashtags.length <= HASHTAG_MAX_AMOUNT);
};

//Регулярное выражение определяющее формат хэштегов
const hashtagRE = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

//Проверка хэштега на соответствие формату
const isHashtagValid =  (currentValue) =>
  hashtagRE.test(currentValue);

//Проверка всех хэштега на соответствие формату
const isHashtagsValid = () => {
  if (hashtagField.value === '') {
    return true;
  }
  const hashtags = getHashtags();
  return hashtags.every(isHashtagValid);
};

//Проверка хэштегов на уникальность
const isHashtagUnique = () => {
  const hashtags = getHashtags();
  const set = new Set(hashtags);
  return (set.size === hashtags.length);
};

//Валидация на количество хэштегов, формат записи и дублирование.
pristine.addValidator(hashtagField, isHashtagAmountValid, ErrorMessage.HASHTAG_AMOUNT);
pristine.addValidator(hashtagField, isHashtagsValid, ErrorMessage.HASHTAG_FORMAT);
pristine.addValidator(hashtagField, isHashtagUnique, ErrorMessage.HASHTAG_REPEAT);

//Валидация на длину комментария
pristine.addValidator(commentField, validComment, 'Текст слишком длинный');

//Отправка формы на сервер
imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    imgUploadForm.submit();
  }
});

