// Your code here

function saturdayFun(activity="roller-skate") {
    return`This Saturday, I want to ${activity}!`;
  }

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(star="*"){
    return function(title="special"){
        return `You are ${star}${title}${star}!`
    }
};

let Calculator = {
    add: function (a,b) {return a + b},
    subtract: function(a,b) {return a - b},
    multiply: function(a,b) {return a * b},
    divide: function(a,b) {return a / b}
};

let actionApplyer = function(start, array){
    let startingPoint = start
    for (let i = 0; i < array.length; i++){
        startingPoint = array[i](startingPoint)
    }
    return startingPoint
}


