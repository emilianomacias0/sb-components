import React from "react";
import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Este es el texto que llevara la etiqueta
   */
  label: string;
  /**
   * Este es el tamańo que tendra el texto
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Convertir el texto a mayusculas
   */
  allCaps?: boolean;
  /**
   * Color del texto
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Font color
   */
  fontColor?: string;
  /**
   * Color de fondo
   */
  backgroundColor?: string;
}
export const MyLabel = ({
  label = "No_label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} ${allCaps ? "all-caps" : ""}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {label}
    </span>
  );
};

export default MyLabel;
