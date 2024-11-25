"use client";

import { useState } from "react";

const Calculator = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("00.00");
  const [comment, setComment] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");

  const calculate = () => {
    if (!age || !height || !weight || !gender) {
      setModalText("Todos los campos son requeridos!");
      setModalVisible(true);
    } else {
      countBmi();
    }
  };

  const countBmi = () => {
    const heightInMeters = height / 100; // Convertir altura de centímetros a metros
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calcular el IMC
    setBmi(bmiValue);

    let result = "";

    // Caso para menores de 18 años (niños y adolescentes)
    if (age < 18) {
      result = interpretChildBmi(bmiValue, age, gender);
    } else {
      // Caso para adultos y ancianos
      result = interpretAdultBmi(bmiValue, age);
    }

    // Establecer el comentario con el resultado
    setComment(result); // Cambié el nombre de setComment a updateComment
  };

  // Función para interpretar el IMC en adultos
  const interpretAdultBmi = (bmiValue, age) => {
    if (age < 60) {
      if (bmiValue < 18.5) {
        return "Bajo Peso";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        return "Saludable";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        return "Sobrepeso";
      } else if (bmiValue >= 30 && bmiValue < 34.9) {
        return "Obesidad de clase I";
      } else if (bmiValue >= 35 && bmiValue < 39.9) {
        return "Obesidad de clase II";
      } else {
        return "Obesidad de clase III";
      }
    } else {
      if (bmiValue < 21.9) {
        return "Bajo Peso";
      } else if (bmiValue >= 22 && bmiValue < 27) {
        return "Saludable";
      } else if (bmiValue >= 27.1 && bmiValue < 32) {
        return "Sobrepeso";
      } else {
        return "Obesidad";
      }
    }
  };

  // Función para interpretar el IMC en niños y adolescentes de 2 a 5 años
  const interpretChildBmi = (bmiValue, age, gender) => {
    if (age < 2) {
      return "IMC no aplicable para menores de 2 años";
    }

    if (age >= 2 && age <= 5) {
      if (bmiValue < 14) {
        return "Bajo Peso";
      } else if (bmiValue >= 14 && bmiValue < 17) {
        return "Saludable";
      } else if (bmiValue >= 17 && bmiValue < 19) {
        return "Sobrepeso";
      } else {
        return "Obesidad";
      }
    }

    if (age >= 6 && age <= 17) {
      if (gender === "male") {
        if (bmiValue < 10) {
          return "Bajo Peso (percentil muy bajo)";
        } else if (bmiValue >= 10 && bmiValue < 85) {
          return "Saludable";
        } else if (bmiValue >= 85 && bmiValue < 95) {
          return "Sobrepeso";
        } else {
          return "Obesidad";
        }
      } else if (gender === "female") {
        if (bmiValue < 10) {
          return "Bajo Peso (percentil muy bajo)";
        } else if (bmiValue >= 10 && bmiValue < 85) {
          return "Saludable";
        } else if (bmiValue >= 85 && bmiValue < 95) {
          return "Sobrepeso";
        } else {
          return "Obesidad";
        }
      }
    }

    // Si el niño tiene más de 17 años, se interpreta como adulto
    return interpretAdultBmi(bmiValue, age);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Calcule su IMC</h1>
        <p className="font-medium font-roboto">Bienvenido, Ingrese sus datos para calcular su IMC <br /> (Índice de Masa Corporal)</p>
        <div className="space-y-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <label
              htmlFor="age"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Ingrese su edad
            </label>
            <input
              type="text"
              className="w-full border-b-2 border-blue-500 text-center text-xl focus:outline-none"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-around items-center bg-white shadow-md rounded-lg p-4">
            <label className="form-control flex items-center gap-1">
              <input
                type="radio"
                name="radio-4"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <span className="label text-base">Masculino</span>
            </label>

            <label className="form-control flex items-center gap-1">
              <input
                type="radio"
                name="radio-4"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <span className="label text-base">Femenino</span>
            </label>
          </div>

          <div className="flex justify-around items-center">
            <div className="bg-white shadow-md rounded-lg p-4 mr-4">
              <label
                htmlFor="height"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Altura (cm)
              </label>
              <input
                type="number"
                className="w-full border-b-2 border-blue-500 text-center text-xl focus:outline-none"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <label
                htmlFor="weight"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Peso (kg)
              </label>
              <input
                type="number"
                className="w-full border-b-2 border-blue-500 text-center text-xl focus:outline-none"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={calculate}
          >
            Calcular IMC
          </button>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-700">Su IMC es:</p>
          <div className="text-3xl font-bold text-blue-500 bg-gray-200 inline-block py-2 px-4 rounded-full mt-2">
            {bmi}
          </div>
          <p className="rounded-full border-4 p-2 border-dashed border-indigo-300 bg-indigo-100 text-lg font-semibold text-gray-700 mt-4">
            {comment}
          </p>
        </div>

        {modalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <span
                className="text-gray-700 text-2xl font-bold cursor-pointer float-right"
                onClick={() => setModalVisible(false)}
              >
                &times;
              </span>
              <p className="text-gray-700 text-lg mt-4">{modalText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator