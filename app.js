const postsEl = document.getElementById("post");
const postform = document.getElementById("post");

function Posts(event)
{
    postsEl.InnerHTML = "";
    let formData = new FormData(form);
    let uid = formData.get("userid");
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => data.forEach((posts) => 
  {
    if(posts.userId == uid)
    {
        let container = document.createElement("div");
        let text = document.createElement('p');
        let title = document.createElement('h3');

        title.innerText = posts.title;
        text.innerText = posts.body;

        container.appendChild(title);
        container.appendChild(text);

        postsEl.appendChild(container);
        
    }
    console.log(posts);
  }));
  event.preventDefault();
}
Posts();