window.onload = async function() {

    // hämtar bloggens API med metoden GET
    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/', {
            method: 'GET'
        })
        let blogs = await response.json();
   
        // loopar genom bloggens inlägg
       for (let blog of blogs) {

        // skapar tabellrad element med blogginläggets innehåll
            let tableContent = `
            <tr>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.tags}</td>
            <td>${blog.date}</td>
            <td data-id="${blog._id}">
                <input type="button" value="uppdatera" class="table-button-update">
                <input type="button" value="radera" class="table-button-delete">
            </td>
            </tr>
            `
            // lägger in inläggets tabell rad + innehåll till taballen
            document.getElementById(`admin-table`).innerHTML += tableContent
        }
        buttonEvents()   // kallar på funktion som ger eventlistener till inläggens knappar
    } catch(error) {
        console.log(error)
    }
}

function buttonEvents() {   // ger knappar "uppdatera" och "radera" sin funktion

    let updateBtn = document.getElementsByClassName(`table-button-update`)
    let deleteBtn = document.getElementsByClassName(`table-button-delete`)

    // loop som går igenom alla "uppdatera" knappar
    for (let update of updateBtn) {

        update.addEventListener('click',function(event) {
        console.log(`trycka på uppdatera`)

        let parentTr = update.parentNode
        let dataId =   parentTr.getAttribute('data-id')
            
        window.location.replace(`update-post.html?id=${dataId}`); 
        })
    }

    // loop som går igenom alla "radera" knappar
    for (let deleteb of deleteBtn) {
        deleteb.addEventListener('click',async function(event) {
            event.preventDefault()
            let dtId = deleteb.parentNode.getAttribute('data-id')
   
            try {
                await fetch(`https://blog-api-assignment.up.railway.app/posts/${dtId}` , {
                method: 'DELETE' 
                })
                this.parentNode.parentNode.remove()
            } catch (error) {
                console.log(error)
            }
        })
    }
}