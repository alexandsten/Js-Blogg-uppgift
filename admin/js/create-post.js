window.onload = async function() {

document.getElementById(`blog-submit`).addEventListener('click',async function(event) {


    event.preventDefault()

    
    var options = document.getElementById("blog-tags").options;
    var tagArray = [];
    for(option of options){
       if(option.selected) tagArray.push(option.value);
    }
    console.log("valen är " + tagArray);
 
    /*
    var text = blogOptions.options[blogOptions.selectedIndex].text;

    var values = Array.prototype.slice.call(document.querySelectorAll('#blog-tags selected'),0).map(function(v,i,a) { 
        return v.value; 
    });

    */

    let formJson = 
    {
        "tags": [
            tagArray
        ],
        "title": document.getElementById(`blog-title`).value,
        "content": document.getElementById(`blog-textarea`).value,
        "author": document.getElementById(`blog-author`).value

    }
    
     
    console.log(formJson)
     
     console.log(`inne i knappen`)
     let urlParams = new URLSearchParams(window.location.search)


 
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
    /* window.location.replace('index.html');   */
 })
}