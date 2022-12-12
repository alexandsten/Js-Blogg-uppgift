window.onload = async function() {

document.getElementById(`blog-submit`).addEventListener('click',async function(event) {


    event.preventDefault()

    var blogOptions = document.getElementById("blog-tags");
    var text = blogOptions.options[blogOptions.selectedIndex].text;

    var values = Array.prototype.slice.call(document.querySelectorAll('#blog-tags selected'),0).map(function(v,i,a) { 
        return v.value; 
    });

    let formJson = 
    {
        "tags": [
            text
        ],
        "title": document.getElementById(`blog-title`).value,
        "content": document.getElementById(`blog-textarea`).value,
        "author": document.getElementById(`blog-author`).value

    }
    
     
    console.log(formJson)
     
     console.log(`inne i knappen`)
     let urlParams = new URLSearchParams(window.location.search)

     let blogId = urlParams.get('id');
     console.log("hejsan" + blogId)
 
     try {
         await fetch('https://blog-api-assignment.up.railway.app/posts/',  {
             method: 'POST', // *GET, POST, PUT, DELETE, etc.
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(formJson) // body data type must match "Content-Type" header
         })
       
     } catch(error) {
         console.log(error)
     }
     window.location.replace('index.html');
 })
}