import React, { useEffect, useState } from "react";

//const [gastos,getGastos]=useState(gastos)

const BASE_URL = `https://pokeapi.co/api/v2/berry/`;

const getGastos = () => {
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
const getGasto = (id) => {
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
const addGasto = (gasto) => {
  return new Promise((resolve, reject) => {
    tareas.push(gasto);
    return resolve({ ...gasto, status: "added" });
  });
};
//DELETE TAREA????? como se hace??? RECIBE ID

export default {
  getGastos,
  getGasto,
  addGasto,
};
