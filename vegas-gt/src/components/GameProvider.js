import React from "react";
import "../css/style.css";

const GameProvider = () => {
  return (
    <div className="container">
      <h1 className="provider-h1 text-center mb-3" id="game-provider">
        FEATURED GAMES PROVIDER
      </h1>
      <div className="row container-flex">
        <div class="provider-container">
          <div class="card-body p-2">
            <div className="text-center mt-1">
              <img
                src="/assets/game_provider/play.png"
                class="img-fluid provider-img"
                alt="..."
              />
            </div>
            <p class="card-text mt-3">
              The best gaming entertainment supplier there is. We bring MORE
              than games to the table. Features like Dynamic Payways create more
              innovative gameplay for players.
            </p>
          </div>
        </div>
        <div class="provider-container">
          <div class="card-body p-2">
            <div className="text-center mt-1">
              <img
                src="/assets/game_provider/pragmatic_play.png"
                class="img-fluid provider-img"
                alt="..."
              />
            </div>
            <p class="card-text mt-3">
              Pragmatic Play is a leading content provider for regulated markets
              around the world, for slots, live casino, bingo, scratchcards and
              more. Designed for perfect player experience.
            </p>
          </div>
        </div>
        <div class="provider-container">
          <div class="card-body p-2">
            <div className="text-center mt-1">
              <img
                src="/assets/game_provider/ygg.png"
                class="img-fluid bg-white provider-img"
                alt="..."
              />
            </div>
            <p class="card-text mt-3">
              Yggdrasil stands for world-class entertainment. Yggdrasil breaths
              innovation. We push the boundaries. Our passion for gaming is
              limitless.
            </p>
          </div>
        </div>
        <div class="provider-container">
          <div class="card-body p-2">
            <div className="text-center mt-1">
              <img
                src="/assets/game_provider/netent.png"
                class="img-fluid provider-img"
                alt="..."
              />
            </div>
            <p class="card-text mt-3">
              NetEnt is a leading provider of premium gaming solutions to the
              world’s most successful online casino operators. We have been a
              true pioneer in driving the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProvider;
