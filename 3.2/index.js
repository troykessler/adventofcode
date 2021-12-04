const fs = require("fs");

fs.readFile("./3.1/file.txt", (err, data) => {
  if (err) throw err;

  const binaryArray = data.toString().split("\n");
  const binaryLength = binaryArray[0].length;

  let oxygen = "";
  let co2 = "";

  let oxygenDec = 0;
  let co2Dec = 0;

  let oxygenArray = [...binaryArray];
  let co2Array = [...binaryArray];

  while (oxygenArray.length > 1) {
    for (let i = 0; i < binaryLength; i++) {
      const zeros = oxygenArray.filter((b) => b[i] === "0").length;
      const ones = oxygenArray.filter((b) => b[i] === "1").length;

      if (zeros > ones) {
        oxygenArray = oxygenArray.filter((b) => b[i] === "0");
      } else {
        oxygenArray = oxygenArray.filter((b) => b[i] === "1");
      }

      if (oxygenArray.length === 1) {
        break;
      }
    }
  }

  while (co2Array.length > 1) {
    for (let i = 0; i < binaryLength; i++) {
      const zeros = co2Array.filter((b) => b[i] === "0").length;
      const ones = co2Array.filter((b) => b[i] === "1").length;

      if (zeros > ones) {
        co2Array = co2Array.filter((b) => b[i] === "1");
      } else {
        co2Array = co2Array.filter((b) => b[i] === "0");
      }

      if (co2Array.length === 1) {
        break;
      }
    }
  }

  oxygen = oxygenArray[0];
  co2 = co2Array[0];

  for (let i = 0; i < binaryLength; i++) {
    if (oxygen[i] === "1") {
      oxygenDec += 2 ** (binaryLength - i - 1);
    }

    if (co2[i] === "1") {
      co2Dec += 2 ** (binaryLength - i - 1);
    }
  }

  console.log(oxygenDec * co2Dec);
});
