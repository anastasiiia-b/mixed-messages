const person = ['You will', 'Your'];

const youWillList = ['find', 'have', 'receive', 'lose', 'meet', 'keep'];
const listOfThings = ['a bad news.', 'a good news.', 'something unexpected.', 'the love.', 'a secret.', 'the truth.'];
const yourList = ['friend', 'family', 'soulmate', 'colleague', 'best friend', 'neighbor', 'secret admiror', 'boss', 'enemy'];
const listOfActions = ['is hiding', 'will find', 'will tell', 'is thinking about', 'has doubts about', 'will offer'];


function randomVariable (arr) {
    let h = Math.floor(Math.random() * arr.length);
    return arr[h];
}


function createFortune () {
let fortune = [];
switch(randomVariable(person)) {
    case 'You will':
        fortune.push(`${person[0]} ${randomVariable(youWillList)} ${randomVariable(listOfThings)}`)
        break
    case 'Your':
        fortune.push(`${person[1]} ${randomVariable(yourList)} ${randomVariable(listOfActions)} ${randomVariable(listOfThings)}`)
        break
        default:
        fortune.push('There is not enough info.')

}
return fortune
}


let button = document.querySelector('#go-button');
let fortune = document.querySelector('#fortune');
 

function showFortune() {
    fortune.innerHTML = createFortune();
    button.innerHTML = "See you nex time.";
 }

 button.addEventListener("click", showFortune);
