const sourceData = [
  ["I", "am", "your", "father", "Luke"],
  ["Run", "Forest", "run"],
  ["The", "matrix", "has", "you"],
];
const sourceFormating = ["LEFT", "RIGHT", "LEFT"];
const sourceWidth = 15;

function formater(data, format, width) {
  let actualWidth = width - 2; // for stars
  let result = [];
  let header = Array(width).fill("*").join(""); //first and last strings
  result.push(header);
  data.forEach((str, idx) => {
    let subStr = "";
    str.forEach((word) => {
      if (subStr.length + word.length + 1 > actualWidth) {
        result.push(formatString(format[idx], actualWidth, subStr));
        subStr = "";
      }
      let whiteSpace = subStr.length > 0 ? " " : "";
      subStr += whiteSpace + word;
    });
    result.push(formatString(format[idx], actualWidth, subStr));
  });
  result.push(header);
  return result;

  function formatString(direction, width, str) {
    whiteSpaces = Array(width - str.length).join(" ");
    let concated = direction == "LEFT" ? str + whiteSpaces : whiteSpaces + str;
    return `*${concated}*`;
  }
}

console.log(formater(sourceData, sourceFormating, sourceWidth));
