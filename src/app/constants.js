export const HEADER_HEIGHT = 60;
export const CARD_WIDTH = 150;

/**
 * Total images in the assets folder
 */
export const MAX_CARDS = 37;

/**
 * Array of different images ids
 * [1,2,3,4,5,6,7...MAX_CARDS]
 */
export const ARRAY_OF_IMAGES = Array.from(
  { length: MAX_CARDS },
  (_, i) => i + 1
);
