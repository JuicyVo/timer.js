console.log(process.argv[2]);
const timer = function() {
  let input = process.argv;
  if (input === undefined) {
    console.log(undefined);
    return;
  }
  //console.log (input)
  setTimeout(() => {
    process.stdout.write('\x07'); //sound
  }, input * 1000);
};

for (let i = 2; i < process.argv.length; i ++) { //start at 2 because of wierd process.argv
  timer(process.argv[i]);

}

// timer();
// timer (1,2,3)