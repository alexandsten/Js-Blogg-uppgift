window.onload = async function() {
    let postSection = document.getElementById(`admin-posts`)

    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/', {
            method: 'GET'
        })
        let blogs = await response.json();
   

       for (let blog of blogs) {

       let tableContent = `
       
                <tr>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td data-id="${blog._id}">
                    <input type="button" value="uppdatera" class="table-button-update">
                    <input type="button" value="radera" class="table-button-delete">
                </td>
                </tr>
       `
    
        /*

        loop som skapar ny tr med innehpllande td

        lägg in rätt innehåll

        */


       document.getElementById(`admin-table`).innerHTML += tableContent

       buttonEvents()

       
}

    } catch(error) {
        console.log(error)
    }


}

function buttonEvents() {

    console.log(`hallå eller`)

    let updateBtn = document.getElementsByClassName(`table-button-update`)
    let deleteBtn = document.getElementsByClassName(`table-button-delete`)

  

    for (let update of updateBtn) {

        console.log(update)
       



        /*

        */

       update.addEventListener('click',function(event) {
            console.log(`trycka på uppdatera`)

            let parentTr = update.parentNode

        
            let dataId =   parentTr.getAttribute('data-id')
            
            window.location.replace(`update-post.html?id=${dataId}`); 

        })

     

        
    }
}