import React from "react";

function Services() {
    return (
        <section id="services">
            <div class="container-fluid row">
                <h1> New Mall Services</h1>
                <div class="bd-example">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item">
                                <img src="https://lucidworks.com/wp-content/uploads/2021/02/iStock-1267600974-e1614139434623.jpg" class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Curbside Pick - Up</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                            </div>
                            <div class="carousel-item active">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAp4Ri8LOIFDeJHYOSbNc6OohbLWOte4wjEA&usqp=CAU" class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Home Delivery</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://assist-ant.com/wp-content/uploads/2019/05/Concierge-Service-AssistAnt-Travel.png" class="d-block w-100" alt="..."/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Concierge Services</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
                {/* <Carousel
                    // showDots={true}
                    // //ssr={true} // means to render carousel on server-side.
                    // autoPlaySpeed={1000}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    // containerClass="carousel-container"
                    // dotListClass="custom-dot-list-style"
                    // itemClass="carousel-item-padding-40-px"
                >
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </Carousel> */}
        </section>
    );
}

export default Services;