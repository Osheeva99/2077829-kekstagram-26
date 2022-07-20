//Функция генерирования случайного числа в дапазоне
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//Фнкция для создания рандомного элемента массива
function getRandomArrayElement(array) {
  const randomArrayElement = array[getRandomPositiveInteger (0, array.length - 1)];
  return randomArrayElement;
}

//Функция для проверки максимальной длины строки
function checkStringLength(string,maxLength) {
  if(string.length<=maxLength) {
    return true;
  }
  return false;
}

export {getRandomArrayElement};
export {getRandomPositiveInteger};
export {checkStringLength};
