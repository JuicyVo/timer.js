//console.log(process.argv[2]);
const timer = function(processArgv) { //not sure what to name value inside function
  let input = process.argv;
  if (input === undefined) {
    console.log(undefined);
    return;
  }
  //console.log (input)
  setTimeout(() => {
    process.stdout.write('\x07'); //sound
  }, processArgv * 1000);
};

for (let i = 2; i < process.argv.length; i ++) { //start at 2 because of wierd process.argv
  if ((process.argv[i]) < 0) {    
  } else {
    timer(process.argv[i]); //i should study on callbacks more
  }
}

// timer();
// timer (1,2,3)