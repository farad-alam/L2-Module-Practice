const EventEmiter = require('events');

class schoolBell extends EventEmiter{}

const schoolGhonta = new schoolBell()

schoolGhonta.on("ring", () => {
  console.log("School Ghonta Baje");
});

schoolGhonta.on("broken", () => {
  console.log("School Ghonta broken (:");
});

schoolGhonta.emit('ring')
schoolGhonta.emit('broken')
