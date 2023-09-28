import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import "../css/style.css";

const Reviews = () => {
  useEffect(() => {
    const carouselElement = document.getElementById(
      "carouselExampleIndicators"
    );
    new Carousel(carouselElement, { interval: false }); // Initialize with no auto-scrolling
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center reviews-h1" id="user-reviews">
        REVIEWS
      </h1>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-between">
              <div className="reviews-container-carousel">
                <div className="image-and-name">
                  <img src="/assets/reviewers/Steffy.png" alt="Steffy" />
                  <h4 className="text-center">Steffy</h4>
                  <p className="text-center">Germany</p>
                </div>
                <div className="review-description">
                  <h1 className="text-center mt-2">Awesome Casino</h1>
                  <div className="stars text-center">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="">
                    I've been getting lots of free spins here lately. I am not a
                    regular player but they make sure I am always updated with
                    all of their special promotions, on top of their daily
                    offerings. Likewise, I am surprised with the new look of
                    their website. Keep it up!
                  </p>
                </div>
              </div>

              <div className="reviews-container-carousel">
                <div className="image-and-name">
                  <img src="/assets/reviewers/Bergmann.png" alt="Bergmann" />
                  <h4 className="text-center">Bergmann</h4>
                  <p className="text-center">Germany</p>
                </div>
                <div className="review-description">
                  <h1 className="text-center mt-2">Simply The Best</h1>
                  <div className="stars text-center">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="">
                    This is a good casino site, I played several times in it but
                    I lost all my money, then my counter blocked my account at
                    my wish. then they sent me a bonus and I activated it again
                    and then, bamm won 3,000 euros in just 2 hours- thank you
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-between">
              <div className="reviews-container-carousel">
                <div className="image-and-name">
                  <img src="/assets/reviewers/Kaisen.jpg" alt="Kaisen" />
                  <h4 className="text-center">Kenji_aisa89</h4>
                  <p className="text-center">Germany</p>
                </div>
                <div className="review-description">
                  <h1 className="text-center mt-2">Very Helpful Support</h1>
                  <div className="stars text-center">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="">
                    I just want to commend the very helpful live chat support of
                    Stakes Casino for to sort out my concems regarding my
                    withdrawals_ Hats off, very respectful and patient How I
                    wish other online casino CS are like yours- I think I'm
                    staying here
                  </p>
                </div>
              </div>
              <div className="reviews-container-carousel">
                <div className="image-and-name">
                  <img src="/assets/reviewers/V.png" alt="V" />
                  <h4 className="text-center">V_Ochenkov</h4>
                  <p className="text-center">Russia</p>
                </div>
                <div className="review-description">
                  <h1 className="text-center mt-2">Easy Withdrawal</h1>
                  <div className="stars text-center">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="">
                    Love this casino Always some pleasant surprises and gifts.
                    The withdrawal of money is simple and understandable to
                    everyone, the casino does not create any problems. Customer
                    service is responsible and helps. I really advise everyone,
                    will not regret it-
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* New container for the indicators */}
      <div className="carousel-indicators-container">
        <div className="carousel-indicators">
          {/* ... (rest of carousel indicator buttons) */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
