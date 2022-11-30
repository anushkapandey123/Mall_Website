import React from "react";

function Movies() {
    return (
        <div>
            <h1> Now Showing </h1>

            <section id="movies">
                <div class="container-fluid row">
                    <div class="col-lg-4 col-md-6 card-margin">
                        <div class="card text-white bg-dark flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="https://theatersollution.s3.amazonaws.com/5d69511e-f52c-4448-936e-baf9760e3bfe.jpg" class="card-img-top" />

                                    <div class="card-body">
                                        <h3>Strange World</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 card-margin">
                        <div class="card text-white bg-dark flip-card">
                            <div class="flip-card-back">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05f78TQxi25dB0ZG6n-IWTt1zRggMWex8sA&usqp=CAU" />
                                <div class="card-body">
                                    <h3>Pinocchio</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 card-margin">
                        <div class="card text-white bg-dark flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="https://theatersollution.s3.amazonaws.com/5d69511e-f52c-4448-936e-baf9760e3bfe.jpg" class="card-img-top" />

                                    <div class="card-body">
                                        <h3>Strange World</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Movies;