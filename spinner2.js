let currStatus = ['|', '/', '-', '\\', '|'];

let delay = 100;

for (const status of currStatus) {
  setTimeout(() => {
    process.stdout.write('\r' + status + "        ");
  }, delay);

  delay += 100;
}