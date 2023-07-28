const posts = [
  {
    idTag: "vincent-post",
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    idTag: "gustave-post",
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    idTag: "joseph-post",
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const postEl = document.getElementById("post");

const newPost = document.createElement("div");

let likesCount = 0;

for (let i = 0; i < posts.length; i++) {
  newPost.innerHTML += `
      <main>
        <div class="post-header">
          <div>
            <img id="artist-avatar" src="${posts[i].avatar}" alt="" />
          </div>
          <div class="name-and-location-container">
            <p class="artist-name">${posts[i].name}</p>
            <p class="artist-location">${posts[i].location}</p>
          </div>
        </div>
        <img
          src="${posts[i].post}"
          alt="image of the Oslo Self Portrait painting by Van Gogh"
        />
      </main>
      <footer class="post-footer-container">
        <div class="img-icons-container">
          <button><img class="heart-icon" id="${posts[i].idTag}" src="images/icon-heart.png" alt="" /></button>
          <button><img class="comment-icon" src="images/icon-comment.png" alt="" /></button>
          <button><img class="dm-icon" src="images/icon-dm.png" alt="" /></button>
        </div>
        <div><p class="likes-count">${posts[i].likes}</p></div>
        <div class="comment-container">
          <p class="username">${posts[i].username}</p>
          <p class="comment">${posts[i].comment}</p>
        </div>
      </footer>
  `;
}
postEl.append(newPost);

let siteContainer = document.querySelector(".container");
let heartIconEl = document.querySelectorAll(".heart-icon");
let likesTotal = document.querySelector(".likes-count");

function targetPost(e) {
  likesCount += 1;

  let likesCountContainer = document.getElementById(e.target.id).parentElement
    .parentElement.nextElementSibling.children[0];
  likesCountContainer.innerText = likesCount;
}
siteContainer.addEventListener("click", targetPost);
