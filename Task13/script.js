function findMax(array1){
    let max = array1[0];
    for (let i=0;i<array1.length;i++){
        if (array1[i]>max){
            max=array1[i];
        }
    }
    return max;
}
let sum=function (array1){
    let total=0;
    for(let i=0;i<array1.length;i++){
        total+=array1[i];
    }
    return total;

}


odds=(array1)=>{
    let counter=0;
    for (i=0;i<array1.length;i++){
        if (array1[i]%2!=0){
            counter++;
        }
    }
    return counter;
}


const array1=[93,12,45,2,124,543,12];
console.log("Array: ",array1);

console.log("Maximum number is: ", findMax(array1));
console.log("Sum of all elements: ",sum(array1));
console.log("Count of odd numbers are: ",odds(array1));


