import React, { useEffect, useState } from "react";

//const [personas,getPersonas]=useState(personas)

const BASE_URL = `https://pokeapi.co/api/v2/berry/`;

const getPersonas = () => {
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
const getPersona = (id) => {
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
const addPersona = (persona) => {
  return new Promise((resolve, reject) => {
    tareas.push(persona);
    return resolve({ ...persona, status: "added" });
  });
};
//DELETE TAREA????? como se hace??? RECIBVE ID

export default {
  getPersonas,
  getPersona,
  addPersona,
};
