let currStatus = {
  0: '|', 
  1: '/', 
  2: '-',
  3: '\\', 
  4: '|'
}

let delay = 100;

for (let i = 0; i < 5; i++) {
  const curr = currStatus[i];   
  setTimeout(() => {
    process.stdout.write('\r' + currStatus[i] + "        ");
  }, delay);

  delay += 100;
}