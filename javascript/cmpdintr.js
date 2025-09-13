function compoundInterest(p,r,t,n)
{
    return p*Math.pow((1+r/n),n*t);
}
const prin=1000;
const rat=0.05;
const time=4;
const yrs=5;
const amnt=compoundInterest(prin,rat,time,yrs);
console.log("compound Interest{years} is",amnt.toFixed(2));
let age=22;
if(age>=18)
{
    console.log("you are eligible")
}