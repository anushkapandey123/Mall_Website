import React from "react";

function Fashion() {
    return (
        <div>
    <section id="fashion">
        <div class = "container-fluid row">
            <h1>For the Fashionista in You</h1>
        </div>



        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">

     <div class="carousel-item active">
    {/* <img src="levis.png" class="d-block w-100" alt="..." /> */}
    <img src="https://dtbtob4osa700.cloudfront.net/BrandsImages/19042020170048327_brbann.jpg" class="d-block w-100" alt="..." />
    
    </div>

    <div class="carousel-item">
        <img src="https://dtbtob4osa700.cloudfront.net/BrandsImages/10012020115250258_brbann.jpg" class="d-block w-100" alt="..." />  
    </div>

    <div class="carousel-item">
        <img src="https://dtbtob4osa700.cloudfront.net/BrandsImages/14012020083252151_brbann.jpg" class="d-block w-100" alt="..." />  
    </div>

    <div class="carousel-item">
       <img src="https://dtbtob4osa700.cloudfront.net/BrandsImages/12042020172758666_brbann.jpg" class="d-block w-100" alt="..." />
    </div>
   </div> 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<button type="button" class="btn btn-secondary btn-lg btn-style">Know More</button>







    </section>
        </div>
    )
}
export default Fashion;