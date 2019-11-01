function takeANumber(line, name) {
  line.push(name);
  let placeInLine = line.length;
  return `Welcome, ${name}. You are number ${placeInLine} in line.`;
};

function nowServing(line) {
  if (line.length > 0) {
    let personUp = line.shift()
    return `Currently serving ${personUp}`;
  } else {
    return 'There is nobody waiting to be served!';
  };
};
