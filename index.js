function takeANumber(line, name) {
  line.push(name);
  let placeInLine = line.length;
  return `Welcome, ${name}. You are number ${line[name] }.`;
};
