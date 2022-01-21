import './index.css'

console.log('Hello');

const btn = document.getElementById('btn')
const num = document.getElementById('num')

btn.addEventListener('click', function(){
    let a = parseInt(num.innerText, 10);
    num.innerText = ++a;
})


class Test{
    #a = 1
}

const tt = new Test()
console.log(tt.a)