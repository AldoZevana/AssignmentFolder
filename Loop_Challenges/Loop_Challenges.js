//Challenge 1:Print odds 1-20.
for(var i=1;i<=20;i++){
    console.log(i);
}
// Challenge 2:Decreasing Multiples of 3.
for(var i=100;i>=0;i--){
    if(i%3==0){
        console.log(i);
    }
}
// Challenge 3:Print the sequence.
var list =[4,2.5,1,-0.5,-2,-3.5];
    for(var i=0; i<list.length; i++){
        console.log(list[i]+",");
    }
// Challenge 4:Sigma.
var sum = 0;
for(var i=1;i<=100;i++){
    console.log(i+",")
    sum +=i ;
}
console.log(sum);
// Challenge 5:Factorial.
var product = 1;
for(var i=1;i<=12;i++){
    product *= i;
}
console.log(product);