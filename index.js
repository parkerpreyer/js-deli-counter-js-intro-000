function takeANumber(line, name) {
  line.push(name);
  let placeInLine = line.length;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`;
};

function nowServing(line) {
  if (line.length > 0) {
    let personUp = line.shift()
    return `Currently serving ${personUp}.`;
  } else {
    return 'There is nobody waiting to be served!';
  };
};

function currentLine(line) {
  let currentLineOrder = 'The line is currently: ';
  if (line.length > 0) {
    for (var i = 0; i < line.length; i++) {
      let person = line[i];
      `currentLineOrder ${i + 1}. ${person},`
    };
  } else {
    return 'The line is currently empty';
  };
  return currentLineOrder;
};
