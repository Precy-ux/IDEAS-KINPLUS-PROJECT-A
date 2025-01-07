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
    guideAddress: "Fajuyi round about",
    guideDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis unde dolor voluptate consequatur quaerat, totam necessitatibus mollitia ipsam velit ipsa officia veniam deserunt. Aut, voluptates aperiam corporis quis optio quisquam?",
  },
  {
    image: "images/BaeCation websitepics/amorfrontplace.jpg",
    guideName: "Amor hotels",
    guideAddress:
      "Amor Hotels Ekiti is located at Grand Tower Road, Iworoko-Ifaki, Road, Ado Ekiti 362103, Ekiti, Nigeria",
    guideDescription:
      " It offers a variety of comfortable and modern accommodations, including classic king rooms, deluxe rooms, diplomatic suites, and executive suites. The hotel also features an outdoor swimming pool, a bar/lounge, and a restaurant, providing a variety of amenities for guests to enjoy",
  },
  {
    image: " images/BaeCation websitepics/delight frontpc.jpg",
    guideName: "Delight Hotel",
    guideAddress:
      " Delight Hotels Ado Ekiti is 1, Ado - Ilawe Road, Ado-Ekiti,Ekiti State, Nigeria",
    guideDescription:
      "Delight Hotels offers a blend of modern comfort and exceptional hospitality. This elegant hotel provides a relaxing retreat for both business and leisure travelers. Guests can enjoy well-furnished rooms, a variety of amenities, and personalized services designed to meet the needs of every visitor",
  },
  {
    image: "images/BaeCation websitepics/.jpg",
    guideName: "Chicken Republic",
    guideAddress:
      " Sectariat,New-Iyin road, Ado Ekiti,360211, Ado-Ekiti Ekiti state",
    guideDescription:
      " Chicken Republic in Ado Ekiti is a popular fast-food chain that offers a delicious selection of affordable and mouthwatering meals. Known for its signature crispy fried chicken, Chicken Republic serves a variety of tasty dishes, including hearty meals, wraps, burgers, and flavorful sides. With a focus on quality and freshness, the restaurant provides a comfortable and casual dining experience for families, friends, and busy professionals alike",
  },

  {
    image: "images/BaeCation websitepics/amala spot front view1.jpgjpg",
    guideName: "Amala Spot",
    guideAddress:
      "Amala Spot is located at 5, NTA-Ilawe Bypass (after the Federal Polytechnic Ado-Ekiti satellite campus) ",
    guideDescription:
      " Amala Spot in Ado Ekiti is a popular local eatery known for serving some of the best traditional Nigerian dishes, with a special focus on Amala – a beloved Yoruba delicacy made from yam flour. The restaurant offers a cozy, no-frills environment where guests can enjoy delicious, home-cooked meals in a relaxed setting. At Amala Spot, the star attraction is, of course, the Amala served with a variety of rich and flavorful soups, such as Efo Riro, Gbegiri, and Ogbono, along with tender meats like Goat meat, Beef, and Assorted meats.",
  },
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
