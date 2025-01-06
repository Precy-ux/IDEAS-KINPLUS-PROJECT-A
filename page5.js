// Simple script to handle image sliding on hover
document.querySelectorAll(".image-slider").forEach((slider) => {
  let images = slider.querySelectorAll("img");
  let currentIndex = 0;

  slider.addEventListener("mouseover", () => {
    setInterval(() => {
      images[currentIndex].style.opacity = 0;
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.opacity = 1;
    }, 2000);
  });
});

const attractionGuideContainer = document.getElementById(
  "attraction-guide-container"
);

let attractionGuideArray = [
  {
    image: "images/BaeCation websitepics/fajuyi park1.jpg",
    guideName: "Fajuyi park",
    guideAddress: "Fajuyi roundabout, Ado-Ekiti, Ekiti state",
    guideDescription:"Fajuyi Park is a serene and beautiful park located at the Fajuyi Roundabout in Ado-Ekiti, Ekiti State. Known for its lush greenery and peaceful atmosphere, it is an ideal spot for relaxation, picnics, and outdoor activities. You can view the location on the map here: [Fajuyi Park Map](https://www.google.com/maps?q=Fajuyi+Roundabout,+Ado-Ekiti,+Ekiti+State)"
  },
  {
    image: "images/BaeCation websitepics/fajuyi park1.jpg",
    guideName: "Fajuyi park",
    guideAddress: "Fajuyi round about",
    guideDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis unde dolor voluptate consequatur quaerat, totam necessitatibus mollitia ipsam velit ipsa officia veniam deserunt. Aut, voluptates aperiam corporis quis optio quisquam?",
  },
  {
    image: "images/BaeCation websitepics/fajuyi park1.jpg",
    guideName: "Fajuyi park",
    guideAddress: "Fajuyi round about",
    guideDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis unde dolor voluptate consequatur quaerat, totam necessitatibus mollitia ipsam velit ipsa officia veniam deserunt. Aut, voluptates aperiam corporis quis optio quisquam?",
  },
  {
    image: "images/BaeCation websitepics/fajuyi park1.jpg",
    guideName: "Fajuyi park",
    guideAddress: "Fajuyi round about",
    guideDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis unde dolor voluptate consequatur quaerat, totam necessitatibus mollitia ipsam velit ipsa officia veniam deserunt. Aut, voluptates aperiam corporis quis optio quisquam?",
  }
];

attractionGuideContainer.innerHTML = attractionGuideArray
  .map(
    (item) => `
  <div class="attraction-guide-items">
    <img
      class="img"
      width="300"
      height="300"
      src="${item.image}"
      alt="${item.guideName}"
    />
    <div class="title-role">
      <h3>${item.guideName}</h3>
      <p>${item.guideAddress}</p>
    </div>
    <p class="guide-description">
      ${item.guideDescription}
    </p>
    <div class="social-icons">
      <img src="images/BaeCation websitepics/facebookicon.png" alt="Facebook" />
      <img src="images/BaeCation websitepics/twitter.png" alt="Twitter" />
      <img src="images/BaeCation websitepics/instagramicon.png" alt="Instagram" />
    </div>
  </div>`
  )
  .join(""); // Join the array of strings into a single string


// attractionGuideContainer.innerHtml =
