let questionList = ['Who was the 16th President of the United States of America?', 'Who won the WDC in F1 in 2016?', 'What is my second favorite NHL team?', 'What is my favorite F1 team?', 'Who was President during Watergate?', 'Whose my favorite hockey player? (not including patty kane!)', 'What is my favorite TV show?', "What is my least favorite hockey team?", 'Who are my three favorite F1 drivers all time? (Last names only, alphabetical order)', 'How do you spell my last name?']; 
let answerList = ['Abraham Lincoln', 'Nico Rosberg', 'Detriot Redwings', 'Red Bull', 'Richard Nixon', 'Connor McDavid', 'Daredevil', 'New York Islanders', 'Rosberg, Verstappen, Vettel', 'Gjelaj']; 
let score = 0; 
let questionIndex = 0; 

const question = document.querySelector('.questioncon'); 
const button = document.querySelector('.buttoncon'); 
const input = document.querySelector('#input-container'); 
let scoreContainer = document.querySelector('.scorecon');

question.textContent = questionList[questionIndex];

let sumbitFunction = () =>{
    button.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1; 
            score += 1; 
            question.textContent = questionList[questionIndex]; 
            scoreContainer.textContent = "Score: " + score; 
        }else{
            score 
        }
    });
}

//10:19