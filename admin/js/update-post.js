console.log(location.search)
let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'))

updatePost();

async function updatePost() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'));
        
        // , {
        //     method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formDataObject) // body data type must match "Content-Type" header
        // })

        let post = await response.json();
        console.log(post);

        let theDiv = document.getElementById('blog-post')
        console.log(theDiv)

        document.getElementById('title-input').value = post.title
        document.getElementById('author-input').value = post.author
        document.getElementById('blog-text').value = post.content

        let selector = document.getElementById('select');

       console.log(post.tags)


       for (let tag of post.tags) {
            console.log(tag)
            selector.innerHTML +=`
            <option value="" selected>${tag}</option>
            `
        // let tagOption[i] = document.createElement('option');

        // tagOption.innerHTML += post.tags[i]
        // selector.append(tagOption)

       }

       let myOptions = document.querySelector('.my-options')
       console.log(myOptions)
       selector.innerHTML += myOptions
       
       console.log(tagOption)

        document.getElementsByTagName('update-btn')

    } catch(error) {
        console.log(error);
    }
}