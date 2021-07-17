export default function hex2rgb(hex) {
  let validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!validHEXInput) {
    return false;
  }
  let outputObj = {
    r: parseInt(validHEXInput[1], 16),
    g: parseInt(validHEXInput[2], 16),
    b: parseInt(validHEXInput[3], 16),
  };
  let output = `${outputObj.r}, ${outputObj.g}, ${outputObj.b}`;
  return output;
}
