window.onload = async function() {

    // lägger till eventListener till submit knappen
    document.getElementById(`blog-submit`).addEventListener('click',async function(event) {

    event.preventDefault()
    
    // hämta options för tags
    var options = document.getElementById("blog-tags").options;

    // skapa array där tags ska sparas
    var tagArray = [];

    // loopa genom options och pusha de valda options till arrayen
    for(let option of options){
       if(option.selected) tagArray.push(option.value);
    }

    let date = new Date();  // spara nuvarande tid

    // Body för skapap inlägg. Får sina värden från det användaren fyllt i.
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
    
    // metod som skapar inlägget. användaren metoden post
    try {
        await fetch('https://blog-api-assignment.up.railway.app/posts/',  {
            method: 'POST', 
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogJson) 
        })
       
    }   catch(error) {
        console.log(error)
    }
    // leder användaren tillbaka till admin index
    window.location.replace('index.html');   
 })
}