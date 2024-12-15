const spinnerQueue = [
  {delay: 200 , message: 'd2 node spinner1.js...\n'},
  {delay: 300 , message: '\r|   '},
  {delay: 600 , message: '\r/   '},
  {delay: 900 , message: '\r-   '},
  {delay: 1100 , message: '\r\\\n  '},
  {delay: 1300 , message: '\rd2\n'}
];

spinnerQueue.forEach(step => {
  setTimeout(() => {
    process.stdout.write(step.message);
  }, step.delay);
});