//collecting all the important DOM elements
const reviewBtnList = document.querySelectorAll(".ratingIcon");
const form = document.querySelector(".form");
const thanks = document.querySelector(".overlap");
const card = document.querySelector(".card");
const ratingSubmitted = document.querySelector(".ratingGiven");
//variable collecting the value specified in input
let rating;
//adding event on each input item
reviewBtnList.forEach((item) =>
  item.addEventListener("click", function func(event) {
    //before each addition of active class checking if any of the classes has it before or not
    reviewBtnList.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active"); //adding active class
    rating = event.target.value; //updating the global variable each time new rating is given
  })
);
//getting the data of the class with the active
form.addEventListener("submit", function (e) {
  if (rating == undefined) {
    return e.preventDefault(); //preventing the submission of the form if the user tries to
    //submit the form without clicking any of the rating inputs
  } else {
    e.preventDefault(); //preventing the refresh of the page each time submission is done
    card.style.setProperty("display", "none"); //hiding the rating card
    thanks.classList.add("thanks-visible"); //showing the the thanks card
    ratingSubmitted.textContent = `You selected ${rating} out of 5`;
  }
  //showing the rating given by the user
});
