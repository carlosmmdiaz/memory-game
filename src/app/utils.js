import { ARRAY_OF_IMAGES } from "./constants.js";

/**
 * Generates a random int between min an max
 * @param {Number} min
 * @param {Number} max
 */
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 * Generates a random array of imageIds
 * @param {Number} numberOfCards different in the game
 */
const getRandomImageIds = (numberOfCards) => {
  const arrayOfImages = [...ARRAY_OF_IMAGES];
  const randomImageIds = [];

  for (let i = 0; i < numberOfCards; i++) {
    const randomImageId = getRandomInt(0, arrayOfImages.length);

    randomImageIds.push(arrayOfImages.splice(randomImageId, 1)[0]);
  }

  return randomImageIds;
};

/**
 * Generate a random game table for the memory game
 * @param Number numberOfCards different in the game
 */
export const generateRandomGameTable = (numberOfCards) => {
  const table = getRandomImageIds(numberOfCards);
  const gameTable = table.concat(table);
  const randomGameTable = [];

  for (let i = 0; i < numberOfCards * 2; i++) {
    randomGameTable.push({
      idCard: i,
      imageId: gameTable.splice(getRandomInt(0, gameTable.length), 1)[0],
      flipped: false,
      blocked: false,
    });
  }

  return randomGameTable;
};
