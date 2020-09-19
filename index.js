// function myFunction() {
// const switchers = [...document.querySelectorAll('.switcher')]

// switchers.forEach(item => {
// 	item.addEventListener('click', function() {
// 		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
// 		this.parentElement.classList.add('is-active')
// 	})
// })
// }

function continueLogin() {
    const switchers = document.querySelectorAll('.switcher-signup')[0]
    switchers.parentElement.classList.remove('is-active')
const value = document.querySelector('#login')
value.parentElement.classList.add(' is-active')
}


function hi() {
    document.getElementById('myAudio').onplay();
}
/* chay text letter */
// set up text to print, each item in array is new line
   