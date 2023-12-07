 var blog = []
 console.log('hi')
function addblog(e)
{
   let title =  document.getElementById("title").value
   let author = document.getElementById("author").value
   let description = document.getElementById("description").value
   let genre = document.getElementById("genre").value
   let newblog = {
    title :title,
    author :author,
    description : description,
    genre : genre
   }
   console.log(newblog)
   blog.push(newblog)
    document.getElementById("title").value=""
    document.getElementById("author").value=""
    document.getElementById("description").value=""
    document.getElementById("genre").value="Technology"
    alert("blog added")
   
}
function fun1()
{
   var a = document.getElementById("mydiv")
   for(let i =0;i<blog.length;i++)
   {
      let blogdiv = document.createElement('div')
      blogdiv.innerHTML=`<h2><b>Title:</b>${blog[i].title}</h2>
                           <p><b>Author:</b>${blog[i].author}</p>
                           <p><b>Description:</b>${blog[i].description}</p>
                           <p><b>Genre:</b>${blog[i].genre}</p>`
      a.appendChild(blogdiv)
   }
}