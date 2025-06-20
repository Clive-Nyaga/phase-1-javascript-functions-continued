// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// Previous attempt
//function wrapAdjective(){
//    return function(adjective = "special"){
//        return `You are ${adjective}!`;
//    }
// }

function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  }
}
