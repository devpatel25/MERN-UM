let a=0;
let p=10000;
let r=0.10;
let t=2;
let n=12;

a=p*(1+(r/n))**(n*t);
console.log("The compound interest after", t, "years is: ", a);
