import React, { useEffect, useState } from "react";

//const [gastos,getGastos]=useState(gastos)

const BASE_URL = `https://f389-181-28-88-61.sa.ngrok.io/gastos`;
//aca la raiz es la que me da NGROK
//CADA VEZ QUE SE REFRESCA NGROK HAY QUE CAMBIAR LAS URL QUE NOS DEVUELVE
//levantar la API con nodemon
// INICIALIZAR NGROK en la consola de ngrok >>>>> ngrok http "nro de puerto ej 4000"

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
//OK
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
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gasto),
  };

  // el PUT es igual a POST
  

  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}`,option)
      .then((res) => res.json())
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => reject(err));
  });
};
//DELETE TAREA????? como se hace??? RECIBE ID

const editarGasto = (gasto) => {
  const option = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gasto),
  }};

export default {
  getGastos,
  getGasto,
  addGasto,
};
