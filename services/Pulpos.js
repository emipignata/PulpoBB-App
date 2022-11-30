import React, { useEffect, useState } from "react";
import {BASE_URL} from "@env"
//const BASE_URL= "https://5ba5-181-28-88-61.sa.ngrok.io"
const getPulpos = () => {
  return new Promise((resolve, reject) => {

    fetch(`${BASE_URL}/pulpos`)
      .then((res) => res.json())
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => reject(err));
  });
};
const getPulpo = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/pulpos/${id}`)
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
    fetch(`${BASE_URL}/pulpos`,option)
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
