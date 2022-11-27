import React, { useEffect, useState } from "react";


const BASE_URL = `https://3cd7-181-28-88-61.sa.ngrok.io/pulpos`;

const getPulpos = () => {
  //GET PULPOS
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
//POST
const addPulpo = (pulpo) => {
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pulpo),
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
//DELETE pulpo???

export default {
  getPulpos,
  getPulpo,
  addPulpo,
};
