// const  immagineRandom = "https://unsplash.it/300/300?imag="
const posts = [
  {
    id: 1,
    authorName: "Phil Mangione",
    authorPhoto:
      "https://fastly.picsum.photos/id/910/300/300.jpg?hmac=GPismqzJDMPj5TFrxPYdDH8VDZ6KJqKvRI7-SHyErIA",
    date: "03-22-2023",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/300/300?image=",
    likes: 80,
  },
  {
    id: 2,
    authorName: "John Doe",
    authorPhoto: "https://unsplash.it/300/300?imag=",
    date: "03-20-2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius quis elit non volutpat. Sed gravida nunc at nunc posuere, sed aliquam sapien hendrerit.",
    image: "https://unsplash.it/300/300?image",
    likes: 42,
  },
  {
    id: 3,
    authorName: "Jane Smith",
    authorPhoto: "https://unsplash.it/300/300?image",
    date: "03-18-2023",
    text: "Donec sit amet justo vel risus dignissim molestie nec sit amet arcu. In hac habitasse platea dictumst. Ut sagittis massa vel iaculis suscipit.",
    image: "https://unsplash.it/300/300?image",
    likes: 125,
  },
  {
    id: 4,
    authorName: "Jane Smith",
    authorPhoto: "https://unsplash.it/300/300?image=",
    date: "03-8-2023",
    text: "Donec sit amet justo vel risus dignissim molestie nec sit amet arcu. In hac habitasse platea dictumst. Ut sagittis massa vel iaculis suscipit.",
    image:
      "https://fastly.picsum.photos/id/258/300/300.jpg?hmac=zR2WW2PIXyiboQTsS4SBS4PwD80sI5dtJoAjovkSrG4",
    likes: 215,
  },
  {
    id: 5,
    authorName: "Jane Smith",
    authorPhoto:
      "https://fastly.picsum.photos/id/118/300/300.jpg?hmac=y5ogOME73iMgH2ExOcgp4s7H59GHjryoeyqvOwb0oeY",
    date: "02-18-2023",
    text: "Donec sit amet justo vel risus dignissim molestie nec sit amet arcu. In hac habitasse platea dictumst. Ut sagittis massa vel iaculis suscipit.",
    image: "https://unsplash.it/300/300?image",
    likes: 252,
  },
];

const card = document.getElementById("card");
// console.log(card);

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  // console.log(posts[0].likes);

  const markup = `
    
    <div id="container" class="posts-list">
      <div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img
                class="profile-pic"
                src="${post.authorPhoto}"
                alt="Phil Mangione"
              />
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">"${post.authorName}"</div>
              <div class="post-meta__time">${post.date}</div>
            </div>
          </div>
        </div>
        <!-- profile name  -->
        <div class="post__text">
        ${post.text}
        </div>
        <div class="post__image">
          <img src="${post.authorPhoto}" alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <a class="like-button js-like-button" href="#" data-postid="1">
                <i
                  class="like-button__icon fas fa-thumbs-up"
                  aria-hidden="true"
                ></i>
                <span class="like-button__label">Mi Piace</span>
              </a>
            </div>
            <div class="likes__counter">
              Piace a
              <b id="like-counter-1" class="js-likes-counter">${post.likes}</b>
              persone
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  card.innerHTML += markup;
}
