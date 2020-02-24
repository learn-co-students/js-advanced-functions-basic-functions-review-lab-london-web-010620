const saturdayFun = (activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`;
};

const mondayWork = (activity = "go to the office") => {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = (highlighter = "*") => {
  return (message = "special") => {
    return `You are ${highlighter}${message}${highlighter}!`;
  };
};

const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  }
};

const actionApplyer = (start, array) => {
  let a = start;
  array.forEach(element => (a = element(a)));
  return a;
};
