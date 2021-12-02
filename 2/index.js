const fs = require("fs");

fs.readFile("./1/file.txt", (err, data) => {
  if (err) throw err;

  const measurements = data
    .toString()
    .split("\n")
    .map((m) => parseInt(m));

  let counter = 0;
  let prevMeasurement = null;

  for (let m = 0; m < measurements.length - 2; m++) {
    let sumOfSlice = 0;

    for (let s = m; s < m + 3; s++) {
      sumOfSlice += measurements[s];
    }

    if (prevMeasurement !== null && sumOfSlice > prevMeasurement) {
      counter++;
    }

    prevMeasurement = sumOfSlice;
  }

  console.log(counter);
});
