const sentence = "hello there from lighthouse labs";

let letterCount = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * letterCount);

  letterCount++;
}

