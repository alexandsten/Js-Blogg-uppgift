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
            blogsection.classList.add('.blogsection')
            blogsection = "";
            
            
            for (let posts of blog){
                blogsection += `
                    <h2 id="blog-title">${posts.title}</h2>
                    <i id="author">${posts.author}</i>
                    <i id="date">${posts.date}</i>
                    <p id="tags">Tags: ${posts.tags.join(', ')}</p>
                    <p class="blog-content"id="content">
                        ${posts.content}
                        <a href="#" class="read-more">read more</a>
                    </p> 
                    <br>
                    <br>
                    <br>
                    <br>
                `;
            }   


            const blogContent = document.querySelectorAll('.blog-content')
            console.log(blogContent)

            const readMore = document.querySelectorAll('.read-more')
            console.log(readMore)

                for (let read of readMore) {
                    read.addEventListener('click', function(e){
                        e.preventDefault();
                        console.log("hej")
                    })
                }





            if ( blogContent.length > 100) {
                shortenContent(blogContent);
            }

            document.getElementById('blog-post').innerHTML = blogsection;

        // const blog = await response.json();

        } 
        
        
        
        catch(error){
            console.log(error)
        }
        
    }    

///////////// Här slutar fetchBlog //////////////////


    function shortenContent(string) {
        let shortened = string.slice(0, 100);
        shortened += "...";
        return shortened;
    }
        
// }

