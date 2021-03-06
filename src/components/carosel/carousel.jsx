import React from 'react';

export default class Carousel extends React.Component{
  render(){
    return(
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://picsum.photos/200/300" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/seed/picsum/200/300" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/200/300?grayscale" alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/200/300?random=2" alt="Third slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://picsum.photos/200/300?random=1" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
  }
}