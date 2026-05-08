const form = document.getElementById("postForm");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const image = document.getElementById("image").files[0];
  const caption = document.getElementById("caption").value;

  const formData = new FormData();

  formData.append("image", image);
  formData.append("caption", caption);

  try {

    const response = await fetch("/create-post", {

      method: "POST",
      body: formData

    });

    const data = await response.json();

    alert(data.message);

    form.reset();

  } catch (error) {

    console.log(error);

  }

});