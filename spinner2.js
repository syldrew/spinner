process.stdout.write("from Mexico \rhola\n");
setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  process.stdout.write("\r\\   ");
}, 700);

let dashes = ["|", "/", "-", "\\"];
delay = 900;

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    process.stdout.write("\r " + dashes[i] + " ");
  }, delay);

  delay += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, 1700);
