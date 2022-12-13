
let urlParams = new URLSearchParams(window.location.search)
console.log(urlParams.get('id'))

readMore();

async function readMore() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/' + urlParams.get('id'));
         let post = await response.json();
         console.log(post)

       
        let blogsection = document.createElement('section')
        blogsection.classList.add('blogsection')
        blogsection = "";
          
                blogsection += 
                `
                <h2 id="blog-title">${post.title}</h2>
                <p>Author: <i id="author">${post.author}</i></p>
                <p id="date">${post.date}</p>
                <p id="tags">Tags: <i>${post.tags}</i></p>
                <p class="blog-content"id="content">
                    ${post.content}
                </p> 
             `
            
               
        
        document.getElementById('blog-post').innerHTML = blogsection;



    } catch(error) {
        console.log(error)
    }
}

