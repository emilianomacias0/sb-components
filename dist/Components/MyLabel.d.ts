/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
