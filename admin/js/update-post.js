window.onload = async function() {



    let urlParams = new URLSearchParams(window.location.search)

    let blogId = urlParams.get('id');

    console.log(blogId)

    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/'+ blogId, {
            method: 'GET'
        })
        let blogs = await response.json();
       console.log(blogs.content)

       document.getElementById(`blog-title`).value = blogs.title
       document.getElementById(`blog-author`).value = blogs.author
       document.getElementById(`blog-textarea`).innerHTML = blogs.content


       let blogTags = blogs.tags
       console.log(blogTags)

       let blogString = ""

       for (let tag of blogTags) {
        
        
       blogString += `<option value="${tag}">${tag}</option>`

       }

       document.getElementById(`blog-tags`).innerHTML = blogString
    } catch(error) {
        console.log(error)
    }

/*                                          */

document.getElementById(`blog-submit`).addEventListener('click',async function(event) {


    event.preventDefault()


    let formJson = 
    {
        "content": document.getElementById(`content-textarea`).value
    }
    
     
    console.log(formJson)
     
     console.log(`inne i knappen`)
     let urlParams = new URLSearchParams(window.location.search)

     let myPunId = urlParams.get('id');
     console.log("hejsan" + myPunId)
 
     try {
         await fetch('https://pun-api.up.railway.app/puns/'+ myPunId,  {
             method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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



}