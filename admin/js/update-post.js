console.log(location.search)
let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'))

updatePost();

async function updatePost() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'));

        let post = await response.json();
        console.log(post);

        document.getElementById('title-input').value = post.title
        document.getElementById('author-input').value = post.author
        document.getElementById('blog-text').value = post.content

        let selector = document.getElementById('select');

       console.log(post.tags)

       for (let tag of post.tags) {
            console.log(tag)
            selector.innerHTML +=`
            <option name="tags" value="${tag}" selected>${tag}</option>
            `
       }

       let myOptions = document.querySelector('.my-options')
       console.log(myOptions)
       selector.innerHTML += myOptions
       
        document.getElementsByTagName('update-btn')

    } catch(error) {
        console.log(error);
    }
}

document.getElementById('update-post').addEventListener('submit', async function(e){
    e.preventDefault();
    const form = e.target;
    console.log(form)
    let formDataObject = serializeForm(form)
        console.log(JSON.stringify(formDataObject));

    
    try {
        await fetch ('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'), {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        })
       
        location.replace('index.html')

    }  catch(error) {
        console.log(error)
    }
})


let serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);

    for (var key of formData.keys()) {
        let inputData = formData.getAll(key);

        if (inputData.length > 1) {
            obj[key] = inputData;
        } else {
            obj[key] = inputData[0];    
        }
    }
    
    console.log(obj);
    return obj;
};