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

function getPostHtml() {
  let postHtml = ``;

  posts.forEach(function (post) {
    postHtml += `
      <main>
        <div class="post-header">
          <div>
            <img id="artist-avatar" src="${post.avatar}" alt="" />
          </div>
          <div class="name-and-location-container">
            <p class="artist-name">${post.name}</p>
            <p class="artist-location">${post.location}</p>
          </div>
        </div>
        <img
          src="${post.post}"
          alt="image of the Oslo Self Portrait painting by Van Gogh"
        />
      </main>
      <footer class="post-footer-container">
        <div class="img-icons-container">
          <button><img class="heart-icon" data-likes="${post.idTag}" src="images/icon-heart.png" alt="" /></button>
          <button><img class="comment-icon" src="images/icon-comment.png" alt="" /></button>
          <button><img class="dm-icon" src="images/icon-dm.png" alt="" /></button>
        </div>
        <div><p class="likes-count">${post.likes}</p></div>
        <div class="comment-container">
          <p class="username">${post.username}</p>
          <p class="comment">${post.comment}</p>
        </div>
      </footer>
  `;
  });
  return postHtml;
}

document.addEventListener("click", function (e) {
  if (e.target.dataset.likes) {
    handleLikeClick(e.target.dataset.likes);
  }
});
function handleLikeClick(likeId) {
  const targetLikeObj = posts.filter((like) => {
    return like.idTag === likeId;
  })[0];
  targetLikeObj.likes++;
  render();
}
function render() {
  document.getElementById("post").innerHTML = getPostHtml();
}

render();
