const postsContainer = document.getElementById("postsContainer");

async function getPosts() {

  try {

    const response = await fetch("/posts");

    const data = await response.json();

const posts = data.posts;

    postsContainer.innerHTML = "";

    posts.forEach((post) => {

      postsContainer.innerHTML += `

        <div class="post">

          <img src="${post.image}" />

          <p>${post.caption}</p>

        </div>

      `;

    });

  } catch (error) {

    console.log(error);

  }

}

getPosts();