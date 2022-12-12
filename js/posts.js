// OBS! Grupparbetet

// window.onload = async function() {
    
    
    // let urlParams = new URLSearchParams(window.location.search)

    //     let myId = urlParams.get('id')
    //     console.log(myId)

fetchBlog();

async function fetchBlog() {
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts');
        let blog = await response.json();


        // method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(formDataObject) // body data type must match "Content-Type" header

        let blogsection = document.createElement('section')
        blogsection.classList.add('blogsection')
        blogsection = "";
        let num = 100;

        
            for (let posts of blog){    

                if (num <= posts.content.length) {
                    posts.content = posts.content.slice(0, num - 3) + "..."; 

                }

                // vid tags: .join(', ')
                blogsection += `
                    <h2 id="blog-title">${posts.title}</h2>
                    <p>Author: <i id="author">${posts.author}</i></p>
                    <p id="date">${posts.date}</p>
                    <p id="tags">Tags: <i>${posts.tags}</i></p>
                    <p class="blog-content"id="content">
                        ${posts.content}
                        <a href="#" class="read-more" data-id="${posts._id}">read more</a>
                    </p> 
                    <br>
                    <br>
                `;
        }   

            // let link = document.getElementById('the-id')
            // // let postID = link.getAttribute('data-id')
            // console.log(link)

            document.getElementById('blog-post').innerHTML = blogsection;

            const blogContent = document.querySelectorAll('.blog-content')
            const blogTitels = document.getElementById('blog-title')


            const readMore = document.querySelectorAll('.read-more')

                for (let read of readMore) {
                    read.addEventListener('click', function(e){
                        let moreId = read.getAttribute("data-id")
                        console.log(moreId)
                        e.preventDefault();
                        console.log(e.target)
                        location.replace(`post.html?id=${moreId}`)
                    })
                }
            } 
    
    catch(error){
        console.log(error)
    }
    
}    





