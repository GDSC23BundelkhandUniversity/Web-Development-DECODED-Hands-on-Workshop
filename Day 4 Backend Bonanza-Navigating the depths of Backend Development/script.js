
fetch("https://652c0f94d0d1df5273ef193d.mockapi.io/blog")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("https://652c0f94d0d1df5273ef193d.mockapi.io/blog")
  .then((res) => res.json())
  .then((data) => {
    const apiDataElement = document.getElementById("api-data");

    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = item.image;
      card.appendChild(img);

      const heading = document.createElement("h2");
      heading.textContent = item.heading;
      card.appendChild(heading);

      const description = document.createElement("p");
      description.textContent = item.description;
      card.appendChild(description);

      apiDataElement.appendChild(card);
    });
  })
  .catch((err) => console.log(err));
