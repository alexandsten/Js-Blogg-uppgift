window.onload = async function() {
    let postSection = document.getElementById(`admin-posts`)

    try {
        const response = await fetch('https://blog-api-assignment.up.railway.app/posts/', {
            method: 'GET'
        })
        let blogs = await response.json();
       console.log(blogs)

       for (let blog of blogs) {

       let tableContent = `
       
                <tr>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td>
                    <input type="button" value="uppdatera" id="upp${i}">
                    <input type="button" value="radera" id="rad${i}">
                </td>
                </tr>
       `
       console.log(blog)
        /*

        loop som skapar ny tr med innehpllande td

        lägg in rätt innehåll

        */


       document.getElementById(`admin-table`).innerHTML += tableContent
}

    } catch(error) {
        console.log(error)
    }



}

function buttonEvents() {
    let postSection = document.getElementById(`admin-posts`)
    let buttonsTd = postSection.getElementsByTagName(`td`)

    for (let td of buttonsTd) {
        console.log(td)
    }
}