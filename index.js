// Your code here
const saturdayFun = (activity = "roller-skate") => { return `This Saturday, I want to ${activity}!` }
const mondayWork = (activity = "go to the office") => { return `This Monday, I will ${activity}.` }
const wrapAdjective = (style ="*") => {
    return (adj = "special") => {
         return `You are ${style}${adj}${style}!`;
    }
}
const Calculator = {
    add: (num1, num2) => { return num1 + num2 },
    subtract: (a, b) => { return a - b },
    multiply: (a, b) => { return a * b },
    divide: (a,b) => {return a/b}
}
const actionApplyer = (start, array) => {
   for (let i = 0; i < array.length; i++) {
       start = array[i](start);
   }
    return start
}