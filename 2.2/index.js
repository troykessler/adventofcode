const fs = require("fs");

fs.readFile("./2.2/file.txt", (err, data) => {
  if (err) throw err;

  const commands = data.toString().split("\n");

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (c of commands) {
    const [cm, inst] = c.split(" ");

    if (cm === "forward") {
      horizontal += parseInt(inst);
      depth += aim * parseInt(inst);
    }

    if (cm === "down") {
      aim += parseInt(inst);
    }

    if (cm === "up") {
      aim -= parseInt(inst);
    }
  }

  console.log(horizontal * depth);
});
