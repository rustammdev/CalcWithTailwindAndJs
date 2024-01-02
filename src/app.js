const numContent = document.querySelectorAll('#numContent')
numContent.forEach((e) => {
    Array.from(e.children).forEach((children) => {
        children.classList.add('w-20')
        children.classList.add('p-4')
        children.classList.add('justify-center')
        children.classList.add('items-center')
        children.classList.add('my-2')
        children.classList.add('border')
        children.classList.add('cursor-pointer')
        children.classList.add('select-none')
        children.classList.add('flex')
        children.classList.add('text-lg')
        children.classList.add('font-mono')
        children.classList.add('hover:bg-sky-700')
    })
})

// numbers
const num0 = document.querySelector('#num-0')
const num1 = document.querySelector('#num-1')
const num2 = document.querySelector('#num-2')
const num3 = document.querySelector('#num-3')
const num4 = document.querySelector('#num-4')
const num5 = document.querySelector('#num-5')
const num6 = document.querySelector('#num-6')
const num7 = document.querySelector('#num-7')
const num8 = document.querySelector('#num-8')
const num9 = document.querySelector('#num-9')

// math elements
const dot = document.querySelector('#dot')
const equel = document.querySelector('#equel')
const minus = document.querySelector('#minus')
const multi = document.querySelector('#multi')
const plus = document.querySelector('#plus')
const clear = document.querySelector('#clear')

// display
const display = document.querySelector('#display')


let math = ''

// nums event
num0.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num1.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num2.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num3.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num4.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num5.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num6.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num7.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num8.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

num9.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

// math
dot.addEventListener("click", (e) => {
    math += e.target.textContent
    display.textContent = math
})

multi.addEventListener("click", (e) => {
    math += '*'
    display.textContent = math
})

minus.addEventListener("click", (e) => {
    math += '-'
    display.textContent = math
})

plus.addEventListener("click", (e) => {
    math += '+'
    display.textContent = math
})

// result
equel.addEventListener("click", (e) => {
    let result = eval(math)
    display.textContent = result
    math = result
})

// clear
clear.addEventListener('click', (e) => {
    math = ''
    display.textContent = '0'
})


// keyup

// var mathExpression = '';  // matematik ifodani saqlash uchun o'zgaruvchi

// document.addEventListener('keyup', function(e) {
//     let key = e.key
//     if(e.key = 'Enter') {
//         let result = eval(math);
//         display.textContent = result;
//         math = '';
//     }

//     var regex = /^[0-9_\+\-\*\/\.]$/;
//     let num = '';
//     if (regex.test(key)) {
//         math += key;
//         // ma12t
//         console.log(math);
//     }
// });