// Initialize KUTE.js animation between two blob shapes
const tween = KUTE.fromTo(
    '#blob1', // Starting element
    { path: '#blob1' }, // Starting path
    { path: '#blob2' }, // Ending path
    { 
      repeat: 999, // Repeat almost infinitely
      duration: 3000, // 3 second duration
      yoyo: true // Reverse animation after completing
    }
  ).start(); // Start animation immediately