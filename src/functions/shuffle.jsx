import getRandomInt from "./getRAndom";

function shuffle(arr) {
  let result = [];
  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
}
export default shuffle;