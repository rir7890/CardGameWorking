const Dice1=['one.png','two.png','three.png','four.png','five.png','six.png']
const Dice2=['one.png','two.png','three.png','four.png','five.png','six.png']

let p=((a)=>{
    return Math.floor(Math.random()*a);
})
const bt=document.getElementsByTagName('img')
// console.log(b)
const btn=document.getElementsByTagName('button');
const r=document.getElementById('result');

// console.log(b[0].src)
// let a=Dice1[p(6)];
function Generate(){
    let a=Dice1[p(6)];
    let b=Dice2[p(6)];
    bt[0].src=a;
    bt[1].src=b;
    if(a===b){
        r.innerHTML="you win";
    }else{
        r.innerHTML="you lose";
    }
}


