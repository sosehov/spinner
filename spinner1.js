
setTimeout(() => {
  process.stdout.write('d2 node spinner1.js...\n');
}, 200);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 700);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\\n  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\rd2\n');
}, 1000);


