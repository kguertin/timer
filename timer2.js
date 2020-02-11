const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0062' || key === '\u0042'){
    console.log('beep');
  }

  if (key > 0 && key < 10){
    console.log(`setting timer for ${key} seconds`);
    setTimeout(()=> {
      console.log('beep');
    }, key * 1000);
  }

  if (key === '\u0003') {
    console.log('Thanks for using me, Cioa!');
    process.exit();
  }
});