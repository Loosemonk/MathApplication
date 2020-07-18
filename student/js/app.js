let correctAnswer;
let points = 0;
let currentProblemNum = 2;


/**
* Utility function to shuffle the items in an array
* @param {object} arr
*/
function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}


/**
* Utility function to generate a random number based on max
* @param {number} max
*/
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


//Create function that take in 'click' event
function answerCorrect() {
    const liAnswer = document.querySelector('li')
    liAnswer.innerText === correctAnswer;
}



function populateQuestionAndAnswer() {

    let leftNumber = getRandomNumber(10)
    let rightNumber = getRandomNumber(10)
    correctAnswer = leftNumber * rightNumber;


    let strLeftNum = leftNumber.toString();
    let strRightNum = rightNumber.toString();

    let currentLi = document.querySelector('.currentProblem')
    let newLi = parseInt(currentLi.innerText)

    let showExpression = document.getElementById('problem');
    showExpression.querySelector('div.expression').innerText = leftNumber + ' * ' + rightNumber;


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


    let listOfAnswers = document.getElementById('answers');
    let ul = document.querySelector('ul');
    arrayNumbers.forEach((num) => {
        document.querySelector('li').innerText = num;
        const li = document.querySelector('li');
        ul.appendChild(li);
    })


}




document.addEventListener("DOMContentLoaded", () => {

    const startOver = document.querySelectorAll('#btnStartOver')
    startOver.forEach((over) => {
        over.addEventListener('click',() => {

            points = 0;
            currentProblemNum = 2;
            populateQuestionAndAnswer();

            const currentScore = document.querySelector('.currentScore')
            currentScore.innerText = 0

            const currentProblem = document.querySelector('.currentProblem')
            currentProblem.innerText = 1

        })
    })


    populateQuestionAndAnswer(); ////populate question and answers the first time

    const lists = document.querySelectorAll('li');

    //let points = 0;
    //let currentProblemNum = 2;

    lists.forEach((list) => {

        list.addEventListener('click', () => {

            if (currentProblemNum <= 11) {
                if (parseInt(list.innerText) === correctAnswer) {

                    //populateQuestionAndAnswer();

                    //const currentProblem = document.querySelector('.currentProblem')
                    //currentProblem.innerText = currentProblemNum;

                    points++
                    const currentScore = document.querySelector('.currentScore')
                    currentScore.innerText = points
                }


                
                const currentProblem = document.querySelector('.currentProblem')

                if(currentProblemNum<11){
                    currentProblem.innerText = currentProblemNum;
                }
                currentProblemNum++

                populateQuestionAndAnswer();

            }
            
            if (currentProblemNum === 11){
                //const answers = document.querySelectorAll('#answers')
                document.getElementById('answers').style.display = 'none';
                document.getElementById('.expression show-hide').style.display = 'none';

            }
            //if the number of questions asked is less than 10, populate next new quiz question
            /*elseif (currentProblemNum <= 10) {
                //const currentProblem = document.querySelector('.currentProblem')
                //currentProblem.innerText = currentProblemNum;

                populateQuestionAndAnswer(); //populate question and answers again

                clickedAnswer = document.querySelector('li')
                clickedAnswer.addEventListener('click', (event) => {

                    clickedAnswer = document.querySelector('li')
                    if (parseInt(event.target.innerText) === correctAnswer) {
                        points++
                        const currentScore = document.querySelector('.currentScore')
                        currentScore.innerText = points
                    }
                    //userClickAnswer = true;
                })

            }*/


        })

    })





    //console.log(leftNumber + ' * ' + rightNumber + ' = ' + correctAnswer)
    //console.log('array: ' + arrayNumbers)

});



