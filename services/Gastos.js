import React, { useEffect, useState } from "react";
import {BASE_URL} from '@env'
//const BASE_URL= "https://5ba5-181-28-88-61.sa.ngrok.io"
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

  const deleteGasto = (id) => {
    console.log(id)
    const option = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: id,
    };
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/gastos/`+id,option)
        .then((res) => res.json())
        .catch((err) => reject(err));
    });
  }
export default {
  getGastos,
  getGasto,
  addGasto,
  deleteGasto
};
