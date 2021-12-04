const fs = require("fs");

fs.readFile("./3.1/file.txt", (err, data) => {
  if (err) throw err;

  const binaryArray = data.toString().split("\n");
  const binaryLength = binaryArray[0].length;

  let gamma = "";
  let epsilon = "";

  let gammaDec = 0;
  let epsilonDec = 0;

  for (let i = 0; i < binaryLength; i++) {
    const zeros = binaryArray.filter((b) => b[i] === "0").length;

    gamma += zeros * 2 > binaryLength ? "0" : "1";
    epsilon += zeros * 2 > binaryLength ? "1" : "0";
  }

  for (let i = 0; i < binaryLength; i++) {
    if (gamma[i] === "1") {
      gammaDec += 2 ** (binaryLength - i - 1);
    }

    if (epsilon[i] === "1") {
      epsilonDec += 2 ** (binaryLength - i - 1);
    }
  }

  console.log(gammaDec * epsilonDec);
});
