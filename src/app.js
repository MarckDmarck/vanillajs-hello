/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombre = ["the", "our"];
  let adjetivo = ["great", "big"];
  let sustantivo = ["fishman", "dog"];

  for (let p = 0; p < pronombre.length; p++) {
    for (let a = 0; a < adjetivo.length; a++) {
      for (let s = 0; s < sustantivo.length; s++) {
        let dominio = pronombre[p] + adjetivo[a] + sustantivo[s] + ".com";
        console.log(dominio);
      }
    }
  }
};
