import React, { useState, useEffect } from "react";
import "../css/style.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import topCasinoData from "../data/topCasinoData"; // Adjust this path accordingly

const TopCasino = () => {
  const [isGamesModalVisible, setGamesModalVisible] = useState(false);
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
  const [activeCasino, setActiveCasino] = useState(null);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  useEffect(() => {
    const allGames = topCasinoData.flatMap((data) => data.modalGames.flat());
    const interval = setInterval(() => {
      setCurrentGameIndex((prevIndex) => (prevIndex + 1) % allGames.length);
    }, 2000); // Change game every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const showGamesModal = (casino) => {
    setActiveCasino(casino);
    setGamesModalVisible(true);
  };

  const hideGamesModal = () => {
    setGamesModalVisible(false);
  };

  const showPaymentModal = (casino) => {
    setActiveCasino(casino);
    setPaymentModalVisible(true);
  };

  const hidePaymentModal = () => {
    setPaymentModalVisible(false);
  };

  return (
    <div className="container top-casino-container">
      <h1 className="text-center" id="top-casino">
        TOP CASINO
      </h1>
      {topCasinoData.map((data, index) => (
        <div className="row" key={index}>
          <div className="triple-border-container">
            <div className="row">
              <div
                className={`column_1 col-md-8 col-lg-3 d-flex justify-content-center align-items-center ${
                  data.casino.name === "CHANZ"
                    ? "chanz_bg_color"
                    : data.casino.name === "CASINO VOILA"
                    ? "casino_voila_bg_color"
                    : data.casino.name === "BRANGO CASINO"
                    ? "brango_bg_color"
                    : data.casino.name === "NORGES SPILL"
                    ? "norges_bg_color"
                    : ""
                }`}
              >
                <img
                  src={data.casino.logo}
                  alt={`${data.casino.name} Logo`}
                  className="img-fluid"
                />
              </div>

              <div className="col-sm-12 col-lg-4">
                <div className="fw-bold custom-title pt-2">
                  {data.casino.name}
                </div>
                <div className="yellow-stars">
                  {[...Array(5)].map((_, i) => {
                    if (data.casino.name === "CHANZ" && i === 4) {
                      return <i key={i} className="fas fa-star-half-alt"></i>;
                    } else if (
                      data.casino.name === "BRANGO CASINO" &&
                      i === 4
                    ) {
                      return <i key={i} className="far fa-star"></i>; // Outlined star (not filled)
                    } else if (data.casino.name === "NORGES SPILL") {
                      if (i < 3) {
                        return <i key={i} className="fas fa-star"></i>; // Filled star
                      } else if (i === 3) {
                        return <i key={i} className="fas fa-star-half-alt"></i>; // Half-filled star
                      } else {
                        return <i key={i} className="far fa-star"></i>; // Outlined star (not filled)
                      }
                    } else {
                      return <i key={i} className="fas fa-star"></i>;
                    }
                  })}
                </div>

                {data.casino.checks.map((check, checkIndex) => (
                  <div className="check-text-container mt-1" key={checkIndex}>
                    <div className="check-icon-bg">
                      <i className="fas fa-check check-icon"></i>
                    </div>
                    <p className="text-design ml-3">{check}</p>
                  </div>
                ))}
                <div className="col-sm centered-btn">
                  <a
                    href={data.casino.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="visit-casino-btn my-4">
                      Visit Casino
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-sm-12 col-lg-4">
                <div className="expanding-container mt-2">
                  <input
                    type="checkbox"
                    id={`toggle-expand-${index}`}
                    className="toggle-input"
                  />
                  <label
                    htmlFor={`toggle-expand-${index}`}
                    className="toggle-label"
                  >
                    <i className="arrow-icon fas fa-arrow-down"></i>
                    <i className="arrow-icon fas fa-arrow-up hidden"></i>
                    LANGUAGE OPTIONS
                  </label>
                  <div className="expanding-content">
                    <div className="row">
                      {data.languages.map((lang, langIndex) => (
                        <div
                          className={`col-4 language-row mb-2`}
                          key={langIndex}
                        >
                          <div className="language-option">
                            <img
                              src={lang.icon}
                              alt={`${lang.name} Logo`}
                              className="language-icon"
                            />
                            <p>{lang.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-none d-lg-block d-flex">
                    <button
                      className="games-payment-btn my-1"
                      onClick={() => showGamesModal(data)}
                    >
                      Available Games
                    </button>
                  </div>
                </div>

                <div className="row d-none d-lg-flex">
                  {" "}
                  {/* Add the Bootstrap classes here */}
                  {data.games.slice(0, 3).map((game, gameIndex) => (
                    <div className="col-4 d-flex my-2" key={gameIndex}>
                      <button
                        className={`games-btn-${
                          gameIndex + 1
                        } justify-content-center`}
                      >
                        {game}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="row d-none d-lg-flex">
                  {" "}
                  {/* Add the Bootstrap classes here */}
                  {data.games.slice(3).map((game, gameIndex) => (
                    <div className="col-4 d-flex my-2" key={gameIndex + 3}>
                      <button
                        className={`games-btn-${
                          gameIndex + 4
                        } justify-content-center`}
                      >
                        {game}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="row">
                  <div className="d-flex mt-1">
                    <button
                      className="games-payment-btn my-1"
                      onClick={() => showPaymentModal(data)} // pass the entire data object
                    >
                      Payment Methods
                    </button>
                  </div>
                </div>
                <div className="white-bg-container my-1 d-none d-lg-block">
                  {" "}
                  {/* Add the Bootstrap classes here */}
                  <div className="row">
                    {data.paymentMethods
                      .slice(0, 4)
                      .map((method, methodIndex) => (
                        <div className="col-3 img-container" key={methodIndex}>
                          <img
                            src={method}
                            alt={`Method ${methodIndex}`}
                            className="my-image"
                          />
                        </div>
                      ))}
                  </div>
                  <div className="row">
                    {data.paymentMethods.slice(4).map((method, methodIndex) => (
                      <div
                        className="col-3 img-container"
                        key={methodIndex + 4}
                      >
                        <img
                          src={method}
                          alt={`Method ${methodIndex + 4}`}
                          className="my-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Mobile Available Games Section */}
                <div className="available-games-sm d-sm-block d-lg-none">
                  <h4>AVAILABLE GAMES</h4>
                  <div className="games-marquee">
                    <span className="game-name">
                      {
                        data.modalGames.flat()[
                          currentGameIndex % data.modalGames.flat().length
                        ]
                      }
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal
        show={isGamesModalVisible}
        onHide={hideGamesModal}
        centered
        className="dark-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Available Games</Modal.Title>
        </Modal.Header>
        <Modal.Body className="games-modal-content">
          {activeCasino?.modalGames?.map((gameRow, rowIndex) => (
            <div className="d-flex justify-content-between mb-2" key={rowIndex}>
              {gameRow.map((game, gameIndex) => (
                <span key={gameIndex}>• {game}</span>
              ))}
              {rowIndex === 3 && <span></span>}{" "}
              {/* Empty span to keep alignment for the last row */}
            </div>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideGamesModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={isPaymentModalVisible}
        onHide={hidePaymentModal}
        centered
        className="dark-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment Methods</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          {activeCasino && (
            <img
              src={activeCasino.paymentMethodImage}
              alt={`Payment Method - ${activeCasino.casino.name}`}
              className="img-fluid"
            />
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hidePaymentModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TopCasino;
