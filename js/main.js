//Исходные данные
const DESCRIPTIONS = [
  'Ем черешню1',
  'Ем черешню2',
  'Ем черешню3',
  'Ем черешню4',
  'Ем черешню5',
  'Ем черешню6',
  'Ем черешню7',
  'Ем черешню8',
  'Ем черешню9',
  'Ем черешню10',
  'Ем черешню11',
  'Ем черешню12',
  'Ем черешню13',
  'Ем черешню14',
  'Ем черешню15',
  'Ем черешню16',
  'Ем черешню17',
  'Ем черешню18',
  'Ем черешню19',
  'Ем черешню20',
  'Ем черешню21',
  'Ем черешню22',
  'Ем черешню23',
  'Ем черешню24',
  'Ем черешню25'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['David', 'Helen', 'Mark', 'Joe', 'Sara', 'Bob'];

//Функция генерирования случайного числа в дапазоне
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Функция для создания массива с объектами комментариев(3 шт)
const getComment = function () {
  const comments = [];

  for (let i = 0; i <= 2; i++) {
    const idComment = getRandomPositiveInteger (1, 1000);
    const name = NAMES[getRandomPositiveInteger (0, NAMES.length - 1)];
    const idAvatar = getRandomPositiveInteger (1, 6);
    const message = MESSAGES[getRandomPositiveInteger (0, MESSAGES.length - 1)];
    comments[i] = {
      id: idComment,
      avatar: `img/avatar-${idAvatar}.svg`,
      message: message,
      name: name
    };
  }
  return comments;
};

//Функция для создания массива с объектами фотографий(25 шт).
const getDescription = function () {
  const photoDescriptions = [];

  for (let i = 0; i <= 2; i++) {
    const id = i + 1;
    const likes = getRandomPositiveInteger (15, 200);
    photoDescriptions[i] = {
      id: id,
      url: `photos/${id}.jpg`,
      description: DESCRIPTIONS[i],
      likes: likes,
      comments: getComment()
    };
  }
  return photoDescriptions;
};

getDescription();
