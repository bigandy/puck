var  on = false;

function sendToggle() {
  on = !on;
  LED2.write(on);
}

// Call this function when the button is pressed
setWatch(sendToggle, BTN, { edge:"rising", debounce:50, repeat: true });

setWatch((e) => {
  if (e.state === false) {
    console.log('up', (e.time - e.lastTime));  
  }
}, BTN, {
//  edge: "rising", 
  debounce: 50, 
  repeat: true,
});

