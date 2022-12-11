// OBS! Grupparbetet

// window.onload = async function() {
    
    
    // let urlParams = new URLSearchParams(window.location.search)

        // let myId = urlParams.get('id')
        // console.log(myId)

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

                        posts.content += `
                        <a href="#" class="read-more">read more</a>
                        `
                    }

                    // vid tags: .join(', ')
                    blogsection += `
                        <h2 id="blog-title">${posts.title}</h2>
                        <i id="author">${posts.author}</i>
                        <i id="date">${posts.date}</i>
                        <p id="tags">Tags: ${posts.tags}</p>
                        <p class="blog-content"id="content">
                            ${posts.content}
                        </p> 
                        <br>
                        <br>
                    `;

            }   

        
            document.getElementById('blog-post').innerHTML = blogsection;


            const readMore = document.querySelectorAll('.read-more')

                for (let read of readMore) {
                    read.addEventListener('click', function(e){
                        e.preventDefault();
                        console.log("hej")
                    })
                }


        } 
        
        catch(error){
            console.log(error)
        }
        
    }    




