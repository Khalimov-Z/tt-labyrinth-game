const getRandomInt=(min, max) =>{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomItemFromArray = (arr) => {
  return getRandomInt(0, arr.length - 1);
}

