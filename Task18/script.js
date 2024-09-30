// Question 1:

function que1(){
    const array1= [1,2,3,4,5,6,7];
    const sqArray=array1.map(num=>{
        return num**2;
    })
    console.log(sqArray);
}

// que1();

// Question2:

function que2(score){
    return score >= 90 && score<=100 ? 'A' :
    score >= 80 && score<90 ? 'B' :
    score >= 70 && score<80 ? 'C' :
    score >= 60 && score<70 ? 'D' :
                  'F';
}

// console.log(que2(68));

// Question 3:

function que3(){
    const data=[
        {CompanyName: "Hundai", model: "Creta", year: 2019},
        {CompanyName: "Toyota", model: "Innova", year: 2024},
        {CompanyName: "BMW", model: "650L", year: 2020},
        {CompanyName:"BMW", model: "340i M3", year: 2023},
        {CompanyName: "Mercedes", model: "AMG G650", year: 2023},
        {CompanyName: "Mercedes", model: "GLS 4-Matic", year: 2024},
    ]
    function changeYear(obj){
        obj.forEach(car => {
            car.year=2024;
        });
    }
    
    function printModelYear(data){
        data.forEach(car=>{
            const {model, year}=car;
            console.log(model, year);
        })
    }

    changeYear(data);
    printModelYear(data);

}

// que3();


// Question 4:

function que4(){
    const nums=[38,65,8,527,98,754,18,39,33,2,45];
    const prime=nums.filter(num=>{
            return num%2==0;
        })
    console.log(prime);
}

// que4();

// Question 5:
function que5(){

    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    // Use case of map function 
    function doubling(arr){
        return arr.map(num=> num*2);
    }
    console.log(doubling(arr));

    // Use case of filter funtion
    function evens(arr){
        return arr.filter(num=> num%2==0);
    }
    console.log(evens(arr));

    // Use case of reduce function
    function summing(arr){
        return arr.reduce((acc,num)=> acc+num,0);
    }
    console.log(summing(arr));
}

// que5();
// Question 6
function que6(){
    const fetch = require('node-fetch');
    async function fetchData(url) {
        try{
            const response= await fetch(url);
            const data= await response.json();
            console.log(data);
        }
        catch(error){
            console.error("Error fetching data: ", error);
        }

    }
    fetchData('https://jsonplaceholder.typicode.com/posts');
}

// que6();

// Question 7
function que7(){
    const person = {
        name: {
          firstName: 'John',
          lastName: 'Doe'
        },
        address: {
          street: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zip: '12345'
        },
        contact: {
          phone: '555-555-5555',
          email: 'johndoe@example.com'
        }
      };

    const contactInfo= ()=>{
        return person?.contact;
    }

    console.log(contactInfo());
}

// que7();