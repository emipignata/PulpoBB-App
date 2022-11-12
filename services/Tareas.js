import React, { useEffect, useState } from "react";

//const [tareas,getTareas]=useState(tareas)

const BASE_URL = `https://pokeapi.co/api/v2/berry/`;

const getTareas = () => {
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
const getTarea = (id) => {
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
const addTarea = (tarea) => {
  return new Promise((resolve, reject) => {
    tareas.push(tarea);
    return resolve({ ...tarea, status: "added" });
  });
};
//DELETE TAREA????? como se hace??? RECIBVE ID

export default {
  getTareas,
  getTarea,
  addTarea,
};
