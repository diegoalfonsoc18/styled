import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";

import { IconoTema } from "./Components/UI";

// eslint-disable-next-line import/no-anonymous-default-export
export default (type) => {
  const Images = {
    Restaurante: <IconoTema src={alimentacion} alt="Restaurante" />,
    Salud: <IconoTema src={salud} alt="Salud" />,

    Transporte: <IconoTema src={transporte} alt="Transporte" />,
    Utilidades: <IconoTema src={utilidades} alt="Utilidades" />,
    default: <IconoTema src={otros} alt="default" />,
  };
  return Images[type] || Images["default"];
};
