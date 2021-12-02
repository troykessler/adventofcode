const fs = require("fs");

fs.readFile("./1/file.txt", (err, data) => {
  if (err) throw err;

  const measurements = data
    .toString()
    .split("\n")
    .map((m) => parseInt(m));

  let counter = 0;
  let prevMeasurement = null;

  for (let m of measurements) {
    if (prevMeasurement !== null && m > prevMeasurement) {
      counter++;
    }

    prevMeasurement = m;
  }

  console.log(counter);
});
