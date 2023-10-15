import React from "react";
import "./DogImage.css";

import { Spinner } from "../Spinner/Spinner";

export const DogImage = (props) => {
  const { immagineCasuale, razzaSelezionata } = props;

  return (
    <div className="dogImageContainer">
      <h2 style={{textTransform: razzaSelezionata ? 'capitalize' : 'normal'}}>{razzaSelezionata ? razzaSelezionata : 'Seleziona una razza'}</h2>
      {immagineCasuale ? 
        <img src={immagineCasuale} alt={razzaSelezionata} />
       :
        <Spinner />
      }
    </div>
  );
};
