import * as styles from "./Comentario.module.css";
import React, { useEffect, useState } from "react";

export default function Comentario({ comentarios }) {
  const montarComentario = () => {};

  return (
    <div>
      {" "}
      <div>
        {turtles.map((turtle, index) => (
          <div key={turtle.name + index}>
            <h1>
              {turtle.name} ({turtle.nickName})
            </h1>
            <p>Weapon of choice: {turtle.weapon}</p>
            <img src={turtle.imgUrl} alt={`${turtle.name}`} width="200" />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
