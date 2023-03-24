const posts = [
  {
    id: 1,
    authorName: "Phil Mangione",
    authorPhoto: "https://unsplash.it/300/300?image=15",
    date: "03-22-2023",
    text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/600/300?image=171",
    likes: 80,
  },
  {
    id: 2,
    authorName: "John Doe",
    authorPhoto: "https://unsplash.it/300/300?image=22",
    date: "03-20-2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius quis elit non volutpat. Sed gravida nunc at nunc posuere, sed aliquam sapien hendrerit.",
    likes: 42,
  },
  {
    id: 3,
    authorName: "Jane Smith",
    authorPhoto: "https://unsplash.it/300/300?image=31",
    date: "03-18-2023",
    text: "Donec sit amet justo vel risus dignissim molestie nec sit amet arcu. In hac habitasse platea dictumst. Ut sagittis massa vel iaculis suscipit.",
    image: "https://unsplash.it/600/300?image=310",
    likes: 25,
  },
];

const postEls = [];

posts
  .map((thispost) => {
    return `
      <div class="col">
        <div class="card">
          <img src="${thispost.image}" alt="" class="card-img-top">
          <div class="card-body">
            <h3>${thispost.authorName}</h3>
            <p>${thispost.text}</p>
          </div>
        </div>
      </div>`;
  })
  .forEach((markup) => {
    postEls.push(markup);
  });

document.querySelector(".post").innerHTML = postEls.join("");
