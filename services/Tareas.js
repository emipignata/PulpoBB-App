import React, { useEffect, useState } from "react";

//const [tareas,getTareas]=useState(tareas)

const BASE_URL = `https://6826-181-28-88-61.sa.ngrok.io/tareas`;

const getTareas = () => {
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
const addTarea = (tarea) => {
  const option = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tarea),
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
//DELETE TAREA??

export default {
  getTareas,
  getTarea,
  addTarea,
};
