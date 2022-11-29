import React, { useEffect, useState } from "react";
import {BASE_URL} from "@env"

const getTareas = () => {
  return new Promise((resolve, reject) => {

    fetch(`${BASE_URL}/tareas`)
      .then((res) => res.json())
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => reject(err));
  });
};

const getTarea = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/tareas/${id}`)
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
    fetch(`${BASE_URL}/tareas`,option)
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
