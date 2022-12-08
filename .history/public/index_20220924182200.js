const form = document.getElementById("blogForm");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const content = document.getElementById("content").value;

  fetch("http://localhost:4000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      content,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => ("Error occured", err));
}
