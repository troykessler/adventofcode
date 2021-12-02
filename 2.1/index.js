const fs = require("fs");

fs.readFile("./2.1/file.txt", (err, data) => {
  if (err) throw err;

  const commands = data.toString().split("\n");

  let horizontal = 0;
  let depth = 0;

  let forwardCounter = 0;
  let downCounter = 0;
  let upCounter = 0;

  for (c of commands) {
    const [cm, inst] = c.split(" ");

    if (cm === "forward") {
      forwardCounter += parseInt(inst);
    }

    if (cm === "down") {
      downCounter += parseInt(inst);
    }

    if (cm === "up") {
      upCounter += parseInt(inst);
    }
  }

  console.log(forwardCounter * (downCounter - upCounter));
});
