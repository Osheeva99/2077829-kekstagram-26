//Функция №1
function getRandomInt(min, max) {
  if (min < 0 || max < 0) {
    throw new Error('Переданный диапазон чисел введен неверно');
  }
  if (max < min) {
    const memory = max;
    max = min;
    min = memory;
  }
  if (min === max) {
    throw new Error('Расширь диапазон');
  }

  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
getRandomInt(2,8);

//Функция №2
function lengthTest(string,maxLength) {
  if(string.length<=maxLength) {
    return true;
  }
  return false;
}

lengthTest('Hello world',16);
