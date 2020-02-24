// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(style="*") {
    return function(adj="special") {
        return `You are ${style}${adj}${style}!`
    }
}

let Calculator = {
    add: function = (a,b) { return a + b},
    subtract: function(a,b) { return a - b},
    multiply: function(a,b) { return a * b},
    divide: function(a,b) { return a / b}
}

let actionApplyer = function(start, array) {
    let a = start

    // given an array of functions.
    // iterate through each function in the array, and do it with 'a' as a parameter
  
    for (let i = 0; i < array.length; i++ ){
      a = array[i](a)
    }
  
    return a
  }


