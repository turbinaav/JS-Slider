let images = [{
  url: "./images/admiral.jpg",
  city: "Rostov-on-Don <br> LCD admiral",
  area: "81 m2",
  time: "3.5 months",
  link: "Rostov-on-Don, LCD admiral"
}, {
  url: "./images/thieves.jpg",
  city: "Sochi <br> Thieves",
  area: "105 m2",
  time: "4 months",
  link: "Sochi Thieves"
}, {
  url: "./images/patriotic.jpg",
  city: "Rostov-on-Don <br> Patriotic",
  area: "93 m2",
  time: "3 months",
  link: "Rostov-on-Don Patriotic"
}];

function initSlider() {

  const sliderImages = document.querySelector(".images")
  const sliderArrows = document.querySelector(".arrow")
  const sliderDots = document.querySelector(".dots")
  const sliderInfo = document.querySelector(".completed-information")
  const sliderLinks = document.querySelector(".completed-navigation")


  initImages();
  initArrows();
  initDots();
  initInfo();
  initLinks();

  function initImages() {
    images.forEach((image, index) => {
      let img = `<img class="completed-img n${index} ${index === 0 ? "active" : ""}" src="${images[index].url}" data-index="${index}">`;
      sliderImages.innerHTML += img;
    });
  }

  function initInfo() {
    images.forEach((image, index) => {
      let infoDiv = `<div class="info n${index} ${index === 0 ? "active" : ""}">
          <div class="item">
            <h3 class="title completed-subtitle">City:</h3>
            <p>${images[index].city}</p>
          </div>
          <div class="item">
              <h3 class="title completed-subtitle">apartment area:</h3>
              <p>${images[index].area}</p>
          </div>
          <div class="item">
              <h3 class="title completed-subtitle">Repair time:</h3>
              <p>${images[index].time}</p>
          </div>
          <div class="item">
              <h3 class="title completed-subtitle">Repair Cost:</h3>
              <p>Upon request</p> 
          </div>
        </div>`;
      sliderInfo.innerHTML += infoDiv;
    })
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".button-arrow").forEach(arrow => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });

    sliderDots.querySelectorAll(".dots-item").forEach(dot => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      })
    })
  }

  function initLinks() {
    images.forEach((image, index) => {
      let link = `<div class="navigation-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].link}</div>`;
      sliderLinks.innerHTML += link;
    });

    sliderLinks.querySelectorAll(".navigation-item").forEach(link => {
      link.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      })
    })
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    sliderInfo.querySelector(".active").classList.remove("active");
    sliderInfo.querySelector(".n" + num).classList.add("active");
    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");
  }

}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});