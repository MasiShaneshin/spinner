process.stdout.write('hello from spinner1.js... \r hello\n');



setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);