import React from "react";

import "./DogTypes.css";

export const DogTypes = (props) => {
  const { razze, gestisciSelezioneRazza, razzaSelezionata } = props;

  return (
    <div className="container">

      <div className="select">
        <select
          className="select-dropdown"
          value={razzaSelezionata}
          onChange={(event) => gestisciSelezioneRazza(event.target.value)}
        >
          <option className="" value="">
            Scorri le razze
          </option>
          {razze.map((razza, indice) => (
            <option key={indice} value={razza}>
              {razza}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
