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
    const zero = binaryArray.filter((b) => b[i] === "0").length;
    const one = binaryArray.filter((b) => b[i] === "1").length;

    gamma += zero > one ? "0" : "1";
    epsilon += zero > one ? "1" : "0";
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
