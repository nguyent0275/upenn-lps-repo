// TODO: Which element is the following line of code selecting?
// the <div> element in (html.line16)
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// the <button> element in (html.line20)
var next = carousel.querySelector(".next");
// the <button> element in (html.line17)
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];
// the default image on page start
carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";
// direction is equal to 1 or -1 depending on whether next or previous button is pressed.
// if next is pressed, direction is equal to 1, then it will pass through the if and else if and end up at index[1] which is second image in image array.
// if previous is pressed, direction is equal to -1, then it will pass through the first if and ends up at index[3] (index = 4(image.length) - 1), which is the last image in the image array
// after one press, the index will change from 0 to either 1 or 3. 
// after a simultaneous press, the index will be 2 (next = 1+1 or previous = 3-1)
function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1;  
  } else if (index > images.length - 1) { 
    index = 0;
  }
  //  the proper image will coincide with the proper link due to the function
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
  console.log(index)
}

// TODO: Describe the functionality of the following event listener.
// adds a link to the images for opening them up in the broswer.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// moves the carousel forward one image
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // stops the function from the "next" button from moving out of <button> and clicking the image (which opens the image in the browser)
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// moves the carousel back one image
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // the previous button would move the carousel to the previous image and then open it in the browser
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
