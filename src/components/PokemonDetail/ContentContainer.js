import React from "react";
import styled from "@emotion/styled";

const ContentCTR = styled.div`
  display: flex;
  flex-direction: column;

  .moves-container {
    .moves-list {
      display: flex;
      flex-wrap: wrap;
      .move-card {
        background-color: #c2c2c2;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #555555;
        border-radius: 8px;
        padding: 10px 15px;
        font-size: 10px;
        margin: 0px 3px 3px 0px;
      }
    }
  }
`;

const ContentContainer = ({ data }) => {
  return (
    <ContentCTR>
      <div className="moves-container">
        <h2 className="title">List of Moves</h2>
        <div className="moves-list">
          {data.pokemon_v2_pokemonmoves.map((move, index) => (
            <div className="move-card" key={index}>
              {move.pokemon_v2_move.name}
            </div>
          ))}
        </div>
      </div>
    </ContentCTR>
  );
};

export default ContentContainer;
