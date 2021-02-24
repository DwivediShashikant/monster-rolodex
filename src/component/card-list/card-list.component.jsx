import React from "react";

import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
  const createMonsters = (monsters) => {
    return monsters.map((monster) => <Card key={monster.id} monster={monster}/>);
  };

  return <div className="card-list">{createMonsters(props.monsters)}</div>;
};
