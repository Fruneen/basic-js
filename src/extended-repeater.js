const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  if ("addition" in options) options["addition"] = String(options["addition"]);
  if (!("repeatTimes" in options)) options["repeatTimes"] = 1;
  if (!("additionRepeatTimes" in options)) options["additionRepeatTimes"] = 1;
  if (!("separator" in options)) options["separator"] = "+";
  if (!("additionSeparator" in options)) options["additionSeparator"] = "|";
  let array = new Array();
  let elem1 = [str];
  let additionStr = new Array();
  for (let i = 0; i < options["additionRepeatTimes"]; i++)
    additionStr.push(options["addition"]);
  additionStr = additionStr.join(options["additionSeparator"]);
  elem1.push(additionStr);
  elem1 = elem1.join("");
  for (let i = 0; i < options["repeatTimes"]; i++) array.push(elem1);
  array = array.join(options["separator"]);
  return array;
};

console.log(module.exports("la", { repeatTimes: 3 }));
