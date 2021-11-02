const sentence = "Your implementation should not be tied to the example string";
const printSentense = function (string) {
  let str = string + "\n";
  let delay = 500;
  for (const char of str) {
    setTimeout(() => {
      // print the char here
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
};

printSentense(sentence);
