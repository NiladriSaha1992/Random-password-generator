function shuffle() {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const strToArr = str.split("");
  const shuffledArr = [];
  while (true) {
    const randIndex = Math.floor(Math.random() * strToArr.length);
    if (shuffledArr.length === strToArr.length) {
      break;
    } else {
      const randValue = strToArr[randIndex];
      if (shuffledArr.includes(randValue)) {
        continue;
      } else {
        shuffledArr.push(randValue);
      }
    }
  }
  return shuffledArr;
}

console.log(`You can use this password: "${shuffle().slice(0, 10).join("")}"`);
