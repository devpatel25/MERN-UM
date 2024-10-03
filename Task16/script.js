const studentDetails=[
    {Name:"Dev Patel", Marks:"98%", Class: "12th", Address: "Arera Colony"},
    {Name:"Rahul Singh", Marks:"95%", Class: "12th", Address:"Purshottam Nagar"},
    {Name:"Dhruv Kumar", Marks:"92%", Class: "10th", Address:"Shiv Villas Palace"},
    {Name:"Rohan Singh", Marks:"88%", Class: "8th", Address:"Alkapuri"},
    {Name:"Aryan Jain", Marks:"90%", Class: "11th", Address:"Vijay Nagar"},
    {Name:"Rajat Sharma", Marks:"85%", Class: "9th", Address:"Saket Nagar"},
    {Name:"Karan Patel", Marks:"96%", Class: "12th", Address:"MP Nagar"},
    {Name:"Siddharth Singh", Marks:"89%", Class: "10th", Address:"Shivaji Nagar"},
    {Name:"Ankit Kumar", Marks:"91%", Class: "11th", Address:"Gautam Nagar"},
    {Name:"Vivek Jain", Marks:"94%", Class: "12th", Address:"Ratlam Kothi"}
]

studentDetails.forEach((student)=>{
    const card=document.createElement('div');
    card.className='card';
    const cardDetails= `
    <div><label>Name:</label><span>${student.Name}</span></div>
    <div><label>Marks:</label><span>${student.Marks}</span></div>
    <div><label>Class:</label><span>${student.Class}</span></div>
    <div><label>Address:</label><span>${student.Address}</span></div>
    `;
    card.innerHTML= cardDetails;
    document.getElementById('card-con').appendChild(card);
})


document.getElementById('search-btn').addEventListener('click',function(){
    let searchedString=document.getElementById('search-input').value;
    const searchReasults= studentDetails.filter(student=>
        student.Name.toLowerCase().startsWith(searchedString.toLowerCase())
    )
    console.log(searchReasults);
    document.getElementById('card-con').innerHTML=`<h1>Search Reasults for "${searchedString}"`;
    searchReasults.forEach((student)=>{
        const card=document.createElement('div');
        card.className='card';
        const cardDetails= `
        <div><label>Name:</label><span>${student.Name}</span></div>
        <div><label>Marks:</label><span>${student.Marks}</span></div>
        <div><label>Class:</label><span>${student.Class}</span></div>
        <div><label>Address:</label><span>${student.Address}</span></div>
        `;
        card.innerHTML=cardDetails;
        document.getElementById('card-con').appendChild(card);

    })
});