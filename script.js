const nextBtn = document.querySelector('#next')
const resetBtn = document.querySelector(".reset")
const groupOfQuestions = document.getElementsByClassName('section')
const options = document.querySelectorAll("input[type = 'radio']")
let index = 0;
let getScoreContent = document.querySelector(".score-mark");
let score = 0;
let answers = document.querySelectorAll(".ans")
getScoreContent.textContent = 0;

console.log(options)


// Initializing all the question to a single question

function init() {
        for (const i of groupOfQuestions) {
                i.style.display = 'none';
                groupOfQuestions[0].style.display = 'block';
        }
}

init();


// This part of the codes takes user to the next question if the next button is clicked on
nextBtn.addEventListener('click', function(){
        if( index == groupOfQuestions.length - 1) {
                alert(' Your percentage score is: ' + `${(score/groupOfQuestions.length) * 100 + '%'}`)
        }else {
                groupOfQuestions[index].style.display = 'none';
                groupOfQuestions[index + 1].style.display = 'block';
        }
        index += 1;
})

// Reset button allows you to revert everything back to the start
 
resetBtn.addEventListener('click', function() {
        if ( index < groupOfQuestions.length - 1) {
                let userAnswer = prompt("Your progress will be not be saved if you restart. \n\n Are you sure about this?")
                if( userAnswer == 'yes' || userAnswer == 'Yes' || userAnswer == "YES") {
                        window.location.reload();
                }else {
                        alert("That's a good choice, Let's continue")
                }
        }else {
                window.location.reload();
        }
})


// adding visual effect to the right or wrong answer
options.forEach(function(option) {
        option.addEventListener('click', function() {
                if ( option.className === 'ans') {
                        option.parentElement.classList.add('correct-answer')
                        option.parentElement.classList.add('disabled')
                        score++;
                        getScoreContent.textContent = score;
                        
                } else {
                        option.parentElement.classList.add('incorrect-answer')
                        option.parentElement.classList.add('disabled')
                }
        })
        
})
