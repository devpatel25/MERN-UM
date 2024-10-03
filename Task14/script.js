const division= (a,b)=>{
    return new Promise((resolve,reject)=>{
        if (b==0){
            reject("Error: Division by zero is not allowed")
        }
        else{
            resolve(a/b);
        }
    })
}

async function funDiv(a,b) {
    try{
        let result = await division(a,b);
        console.log("Dividing", a, "by", b);
        console.log("Result: ",result);
        
    }
    catch(err){       
        console.log("Dividing", a, "by", b);
        console.log(err);
    }
}
// case 1:
funDiv(10,0);

// case 2:
funDiv(20,3);

// case 3:
funDiv(187,2);

// case 4:
funDiv(12,0);

// case 5:
funDiv(780,10);
