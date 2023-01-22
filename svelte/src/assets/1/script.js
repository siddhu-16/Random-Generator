function flipCoin() {
    const coinResult = document.getElementById("coinResult");
    coinResult.innerHTML = Math.random() < 0.5 ? 'Heads' : 'Tails';
  }
  
  function throwDice() {
    const diceResult = document.getElementById("diceResult");
    diceResult.innerHTML = Math.floor(Math.random() * 6) + 1;
  }
  
  function generateString() {
    const stringResult = document.getElementById("stringResult");
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
    for (let i = 0; i < 10; i++) {
      randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    stringResult.innerHTML = randomString;
  }
  
  function generateNumber() {
    const numberResult = document.getElementById("numberResult");
    numberResult.innerHTML = Math.floor(Math.random() * 100000);
  }
  