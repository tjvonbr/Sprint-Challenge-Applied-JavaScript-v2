/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carouselCreator());

function carouselCreator() {
  // Create elements
  console.log('hey there');

  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div');

  let index = 0;

  // Create class lists

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Create text content

  img1.src = '../assets/carousel/mountains.jpeg';
  img2.src = '../assets/carousel/computer.jpeg';
  img3.src = '../assets/carousel/trees.jpeg';
  img4.src = '../assets/carousel/turntable.jpeg';

  img1.style.display = 'block';

  // Append children

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);

  
  
  rightButton.addEventListener('click', event => {
    const carouselImg = document.querySelectorAll('.carousel img');
    carouselImg[index].style.display = 'none';

    if (index === carouselImg.length - 1) {
      index = 0;
    } else {
      index += 1
    }

    carouselImg[index].style.display = 'block';  
  })

  leftButton.addEventListener('click', event => {
    const carouselImg = document.querySelectorAll('.carousel img');
    carouselImg[index].style.display = 'none';

    if (index === 0) {
      index = carouselImg.length - 1;
    } else {
      index -= 1
    }

    carouselImg[index].style.display = 'block';  
  })
  

  return carousel;
}







