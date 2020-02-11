const arg = process.argv.slice(2);

arg.forEach(time => {
  if(time > 0 && time !== NaN){
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('beep')
    }, time * 1000)
  }
});

