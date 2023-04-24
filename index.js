// code your solution here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

mondayWork = function (work = "go to the office"){
    return `This Monday, I will ${work}.`}

mondayWork();

function wrapAdjective(outer = "||special||"){
    return function inside(wrap = "*"){
        return `You are ${outer}${wrap}${outer}!`;
    }
}
