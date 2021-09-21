const str = "hello";
for (const letter of str) {
  setTimeout(() => {
    console.log(letter);
  }, 1000);
}
/* 
setTimeout(() => {
  console.log("h");
}, 1000);
setTimeout(() => {
  console.log("e");
}, 2000);
setTimeout(() => {
  console.log("l");
}, 3000);
setTimeout(() => {
  console.log("l");
}, 4000);
setTimeout(() => {
  console.log("o");
}, 5000); */