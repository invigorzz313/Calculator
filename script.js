let prog = document.querySelector('#prog');
let eraser = document.querySelector('#erasech');
let clearing = document.querySelector('#clearscn');
let findout = document.querySelector('#findout');

let currProg = [];
clearing.addEventListener("click", () => {
    currProg = [''];
    prog.innerHTML = 0;
})

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.id.match('eraser')== False) {
            currProg.push(btn.value);
            prog.innerHTML = currProg.join('');
        }
        if(btn.id.match('eraser')==True) {
            currProg.pop();
            prog.innerHTML = currProg.join('');
        }
        if(btn.id.match('findout')==True) {
            prog.innerHTML = eval(currProg.join(''));
        }
        if(typeof(eval(prog.join('')))=='undefined') {
            prog.innerHTML = 0;
        }
    })
});