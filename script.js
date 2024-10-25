//grade claculator//
//Q1
let m=40
if(m>=90){
    console.log('A')
}
else if(m>=75 && m<90){
    console.log('B')
}
else if(m>=50 && m<75){
    console.log('C')
}
else{
    console.log('D')
}

//Q2
//number reversal//
let num=12345;
let temp=0;
let digit=0;
while(num!=0){
    digit=num%10;
    temp=(temp*10)+digit;
    num= Math.floor(num/10);
}
console.log(temp)


//Q3
//calculate power
let base=2;
let expo=3;
let result1=1;
for(i=0;i<expo;i++){
    (result1*=base)
}
console.log(result1)



//Q4//
//palindromic string checker//
let str='hello'
let n=str.length;
answer=true;
for(i=0;i<n;i++){
    if(str[i]!=str[n-i-1]){
        answer=false
        break;
    }else{
        answer=true
    }
}
console.log(answer)



//Q5//
//counting the vowels//
var vowels='mammoth'
var cnt=0;
for(var i=0;i<vowels.length;i++){
    if(vowels[i]=='a' || vowels[i]=='e' || vowels[i]=='i'|| vowels[i]=='o'||vowels[i]=='u'){
        cnt=cnt+1;
    }
}
console.log(cnt);



//Q6//
for(var i=5;i<=50;i+=5){
    console.log(i);
}


//Q7
// sum of odd and even//
let ar=[1,2,3,4,5,6,7,8,9,10]
let o=0;
let e=0;
for(i=0;i<10;i++){
 if(ar[i]%2==0){
    e+=ar[i];
   }
 else{
    o+=ar[i];
   }
}
let result={
    e:e,
    o:o
}
console.log(result);




//Q10
var year=400;
(year%4==0 && (year%100!=0 || year%400==0))?console.log(true):console.log(false);










































