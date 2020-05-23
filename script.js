const progressBarPlus = plus => {
const progress = document.getElementById('progress');
progress.style.width = (parseInt(progress.style.width) + parseInt(plus.target.dataset.value)) + '%'
}
 
let buttons = document.getElementsByTagName('button');
[].forEach.call(buttons, (button) => {
button.onclick = progressBarPlus;
})