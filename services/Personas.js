import React, { useEffect, useState } from "react";


const BASE_URL = `https://3cd7-181-28-88-61.sa.ngrok.io/personas`;

const getPersonas = () => {
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
  //aca hay que ver como hacer el post
  
  const addPersona = (persona) => {
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    };
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}`,option)
        .then((res) => res.json())
        .then((data) => {
          return resolve(data);
        })
        .catch((err) => reject(err));
    });
  };
  
  const editarPersona = (persona) => {
    const option = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    }};
  

export default {
  getPersonas,
  getPersona,
  addPersona,
};
