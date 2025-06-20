const images = [
  {
    src: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    src: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    src: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    src: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const list = document.querySelector(".gallery");

/*const markup = images.map((image) => 
    `<li class="gallery-item"><img class="gallery-img" src="${image.src}" alt="${image.alt}"/></li>`)
    .join("");
  
  list.innerHTML = markup;*/

const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const li = document.createElement("li");
  li.classList.add("gallery-item");

  const img = document.createElement("img");
  img.classList.add("gallery-img");
  img.src = image.src;
  img.alt = image.alt;

  li.append(img);
  fragment.append(li);
});

list.append(fragment);