window.onload = async function() {

document.getElementById(`blog-submit`).addEventListener('click',async function(event) {


    event.preventDefault()

    
    var options = document.getElementById("blog-tags").options;
    var tagArray = [];
    for(let option of options){
       if(option.selected) tagArray.push(option.value);
    }
    console.log("valen är " + tagArray);

    let date = new Date();

    let blogJson = 
    {
        "tags": 
            tagArray
        ,
        "title": document.getElementById(`blog-title`).value,
        "content": document.getElementById(`blog-textarea`).value,
        "author": document.getElementById(`blog-author`).value,
        "date": date
    }
 
     try {
         await fetch('https://blog-api-assignment.up.railway.app/posts/',  {
             method: 'POST', 
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(blogJson) 
         })
       
     } catch(error) {
         console.log(error)
     }
     window.location.replace('index.html');   
 })
}