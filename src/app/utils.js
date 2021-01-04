/**
 * Generate a random int between min an max
 * @param {Number} min
 * @param {Number} max
 */
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

/**
 * Generate a random game table for the memory game
 * @param Number numberOfCards different in the game
 */
export const generateRandomGameTable = (numberOfCards) => {
  const table = Array.from({ length: numberOfCards }, (_, i) => i + 1);
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
