let isPaused = false;
let counter = document.getElementById('counter');
let pause = document.getElementById('pause');
let number = parseInt(counter.innerText);
let plus = document.getElementById('+');
let minus = document.getElementById('-');
let heart = document.getElementById('<3');
let likes = {};
let submit = document.getElementById('submit');


function addSeconds() {
   setInterval(function() {
     if (isPaused === false){
       counter.innerText = ++number
     }
   }, 1000)
}

addSeconds()

pause.addEventListener('click', function() {
 if(pause.innerText === "pause" && !isPaused){
   pause.innerText = "unpause";
   isPaused = true;
 } else if (pause.innerText === "unpause" && isPaused){
   pause.innerText = "pause";
   isPaused = false;
 }
})

plus.addEventListener('click', function (){
 ++number;
})

minus.addEventListener('click', function (){
 --number;
})

heart.addEventListener('click', function(){
 //if it doesnt exist append to the body
 //if it does exist increment the amount of likes

 if(!likes[number]){
   let li = document.createElement('li');
   likes[number] = 1;
   li.innerText = `${number} has been liked 1 time.`
   li.setAttribute("id", number)
   let ul = document.querySelector('ul')
   ul.append(li)
 } else {
   // debugger
   let li = document.getElementById(number)
   likes[number] += 1;
   li.innerText = `${number} has been liked ${likes[number]} times.`
 }
})


submit.addEventListener('click', function() {
 event.preventDefault()
 let inputText = document.querySelector('#comment-form input').value

 addText(inputText);
})


function addText(input) {
 let p = document.createElement('p')
 p.innerText = input
 comments = document.querySelector('h3')
 comments.append(p)
}
