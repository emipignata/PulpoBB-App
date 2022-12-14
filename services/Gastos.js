import React, { useEffect, useState } from "react";
import {BASE_URL} from '@env'

//aca la raiz es la que me da NGROK
//CADA VEZ QUE SE REFRESCA NGROK HAY QUE CAMBIAR LAS URL QUE NOS DEVUELVE
//levantar la API con nodemon
// INICIALIZAR NGROK en la consola de ngrok >>>>> ngrok http "nro de puerto ej 4000"

const getGastos = () => {
  return new Promise((resolve, reject) => {
    
    fetch(`${BASE_URL}/gastos`)
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
    fetch(`${BASE_URL}/gastos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        return resolve(data);
      })
      .catch((error) => reject(err));
  });
};
//aca hay que ver como hacer el post

const addGasto = (gasto) => {
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gasto),
  };
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/gastos`,option)
      .then((res) => res.json())
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => reject(err));
  });
};

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
