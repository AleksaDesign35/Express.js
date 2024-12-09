const events = require("events");

const antena = new events.EventEmitter();

antena.addListener("zbir", () => {
  // emitter
  console.log(arguments);
});

antena.addListener("razlika", (a, b) => {
  // emitter
  console.log(a - b);
});

antena.emit("zbir", 5, 5, 12, 5);
antena.emit("razlika", 5, 5);
