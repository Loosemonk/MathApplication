
/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */

/**
* Utility function to shuffle the items in an array
* @param {object} arr
*/
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}


function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


document.addEventListener("DOMContentLoaded", () => {



    let leftNumber = getRandomNumber(10)
    let rightNumber = getRandomNumber(10)
    let correctAnswer = leftNumber * rightNumber;



    /*document.querySelector('expression show-hide') 
    const showExpression = document.createElement('exp')
    showExpression.innerText = leftNumber + ' * ' + rightNumber*/

    //const exp = leftNumber + ' * ' + rightNumber;
    let strLeftNum = leftNumber.toString();
    let strRightNum = rightNumber.toString();
    //let exp = strLeftNum + ' * ' + strRightNum;

    const showExpression = document.getElementById('problem');
    showExpression.querySelector('div.expression').innerText = leftNumber + ' * ' + rightNumber;
    //showExpression.innerText = exp; 


    let randomAnswerA = getRandomNumber(100)
    while (randomAnswerA === correctAnswer) {
        randomAnswerA = getRandomNumber(100)
    }

    let randomAnswerB = getRandomNumber(100)
    while (randomAnswerB === correctAnswer) {
        randomAnswerB = getRandomNumber(100)
    }

    let randomAnswerC = getRandomNumber(100)
    while (randomAnswerC === correctAnswer) {
        randomAnswerC = getRandomNumber(100)
    }

    let arrayNumbers = [correctAnswer, randomAnswerA, randomAnswerB, randomAnswerC]

    shuffleArray(arrayNumbers)


    const listOfAnswers = document.getElementById('answers');
    const ul = document.querySelector('ul');
    arrayNumbers.forEach((num) =>{
        document.querySelector('li').innerText = num;
        const li = document.querySelector('li');
        ul.appendChild(li);
    })
    

    console.log(leftNumber + ' * ' + rightNumber + ' = ' + correctAnswer)
    console.log('array: ' + arrayNumbers)

});

