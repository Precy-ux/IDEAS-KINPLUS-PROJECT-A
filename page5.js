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
      guideDescription:`Fajuyi Park is a serene and beautiful park located at the Fajuyi Roundabout in Ado-Ekiti, Ekiti State. Known for its lush greenery and peaceful atmosphere, it is an ideal spot for relaxation, picnics, and outdoor activities.
    `
  
    },
    
      
    {
      image: "images/BaeCation websitepics/fajuyi park1.jpg",
      guideName: "Arinta waterfall",
      guideAddress: " is located in Ipole-Iloro town, Ekiti State, Nigeria. 1  It's just a short 5-minute drive from the famous Ikogosi Warm Spring",
      guideDescription:
        "Arinta Waterfall, also known as Erin Ijesha Waterfall, is one of the most beautiful waterfalls in Ekiti State. It features a series of cascading waterfalls set in a scenic environment, offering visitors a peaceful atmosphere and opportunities for hiking and outdoor activities",
    },
    {
      image: "images/BaeCation websitepics/fajuyi park1.jpg",
      guideName: "Esa Cave",
      guideAddress: "It is located in Iyin Ekiti, Ekiti State, Nigeria. It's approximately 3 kilometers away from Ado-Ekiti, the state capital",
      guideDescription:
        " Esa Cave is a popular historical and cultural site in Ekiti. The cave offers a great hiking and adventure experience for nature enthusiasts and those interested in the rich history and folklore surrounding the area",
    },
    {
          image: "images/BaeCation websitepics/fajuyi park1.jpg",
          guideName: "Ikogosi Warm Spring",
          guideAddress: "It is located in Ikogosi Ekiti",
          guideDescription:" Ikogosi Warm Springs is one of Nigeria’s natural wonders, where warm and cold springs meet. It's a popular tourist destination, offering a serene environment for relaxation, nature walks, and a spa experience. The warm springs create a unique and tranquil atmosphere."
        },
         {
            image: "amor.jpg",
            guideName: "Amor hotels",
            guideAddress: "Amor Hotels Ekiti is located at Grand Tower Road, Iworoko-Ifaki, Road, Ado Ekiti 362103, Ekiti, Nigeria",
            guideDescription:" It offers a variety of comfortable and modern accommodations, including classic king rooms, deluxe rooms, diplomatic suites, and executive suites. The hotel also features an outdoor swimming pool, a bar/lounge, and a restaurant, providing a variety of amenities for guests to enjoy",
          }, 
          {
            image: "images/BaeCation websitepics/fajuyi park1.jpg",
            guideName: "Prosperous Hotel",
            guideAddress: "Prosperous Hotel in Ado-Ekiti, Ekiti, Nigeria is Km 4 Iworoko road Opposite Bawa Estate Km 4 Iworoko, road, opposite Bawa Estate, Ado Ekiti 360212, Ekiti, Nigeria",
            guideDescription:"Prosperous Hotel offers an unmatched blend of comfort, luxury, and warmth. Designed to cater to both business and leisure travelers, this sophisticated hotel features well-appointed rooms with modern amenities, ensuring a relaxing and memorable stay. The elegantly furnished spaces are perfect for any occasion, from corporate meetings to family vacations"
          },
          {
            image: "images/BaeCation websitepics/fajuyi park1.jpg",
            guideName: "Amala spot",
            guideAddress: "Amala Spot Ado Ekiti is 5, NTA-Ilawe Bypass ( the Federal Polytechnic Ado-Ekiti satellite campus)after.",
            guideDescription:" Amala Spot in Ekiti is a must-visit. Specializing in the famous Yoruba dish Amala, this spot delivers rich, flavorful meals in a cozy, inviting setting. Served with mouth-watering Gbegiri (bean soup), Ewedu, and an assortment of meat options including goat meat, beef, and stockfish, the meals are both hearty and satisfying"
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