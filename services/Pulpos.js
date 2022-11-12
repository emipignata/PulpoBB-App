import React, { useEffect, useState } from "react";

//const [pulpos,getPulpos]=useState(pulpos)

const BASE_URL = `https://pokeapi.co/api/v2/berry/`;

const getPulpos = () => {
  //``
  // Ejemplo con FETCH
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => reject(err));
  });
};
const getPulpo = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => reject(err));
  });
};
//aca hay que ver comop hacer el post
const addPulpo = (pulpo) => {
  return new Promise((resolve, reject) => {
    tareas.push(pulpo);
    return resolve({ ...pulpo, status: "added" });
  });
};
//DELETE TAREA????? como se hace??? RECIBVE ID

export default {
  getPulpos,
  getPulpo,
  addPulpo,
};
