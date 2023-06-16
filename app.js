const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letter;

document.querySelector("h1").onmouseover = event => {
  let iterations = 0;                                             // current letter

 const interval = setInterval(() => {                            // Interval that runs the code to swap all letters every 20ms // named const interval so it can be passed in clearInterval(invertal)
      event.target.innerText = event.target.innerText.split("")  // take h1 and swap all letter for random ones, by .split into an array
        .map((letter, index) => {                                // cycling this array and return a random letter or return the default letter...
          if(index <= iterations){  // <= keeps first letter, <  swaps all    // ...returns the default so that the animation stops on letter from left to right...
              return event.target.dataset.value[index];                       // ...by comparing the letters position in the word to the number of times the letter swap code has ran
          }
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");                                        // put the letters back together


      if(iterations >= event.target.dataset.value.length) { // when the iteration increases to the same as the words length, then all letters have gone back to default,
          clearInterval(interval);                            // so we need to stop the setInterval code repeating.
      }
      iterations += 1 / 4;   // changing ratio (iteration 4:1 letter.index)
  }, 20);                     // run every 20ms
}
