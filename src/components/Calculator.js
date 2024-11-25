// const Calculator = () => {
//   return (
//     <div class="container">
//         <div class="box">
//           <h1>BMI Calculator</h1>
//           <div class="content">


//             <div class="input">
//                 <label for="height">Age</label>
//                 <input type="text" class="text-input" id="age" autocomplete="off" required/>
//             </div>

//             <div class="gender">

//                 <label class="container">
//                     <input type="radio" name="radio" id="m"><p class="text">Male</p>
//                     <span class="checkmark"></span>
//                   </label>


//                 <label class="container">
//                     <input type="radio" name="radio" id="f" ><p class="text">Female</p>
//                       <span class="checkmark"></span>
//                     </label>

//             </div>

//             <div class="containerHW">
//             <div class="inputH">
//               <label for="height">Height(cm)</label>
//               <input type="number" id="height" required>
//             </div>

//             <div class="inputW">
//               <label for="weight">Weight(kg)</label>
//               <input type="number" id="weight" required>
//             </div>
//           </div>

//             <button class="calculate" id="submit" onclick="calculate();">Calculate BMI</button>
//           </div>
//           <div class="result">
//             <p>Your BMI is</p>
//             <div id="result">00.00</div>
//             <p class="comment"></p>
//           </div>
//           <div class="footer"><a class="footer-text" target="_blank" href="https://myskypower.net/">By My Sky Power</a></div>
        
      

//         </div>
//       </div>
//   );
// };

// export default Calculator;
'use client';

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
      setModalText("All fields are required!");
      setModalVisible(true);
    } else {
      countBmi();
    }
  };

  const countBmi = () => {
    // Convertir altura de centímetros a metros
    const heightInMeters = height / 100;
    // Calcular el IMC
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    // Establecer el valor calculado del IMC
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
    setComment(result);
  };
  
  // Función para interpretar el IMC en adultos
  const interpretAdultBmi = (bmiValue, age) => {
    // Para personas menores de 60 años, seguimos los rangos estándar de la OMS.
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
    }
    // Para adultos mayores (60 años o más), se ajustan los rangos para evitar sobrevaloración del IMC
    else {
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
  
  // Función para interpretar el IMC en niños y adolescentes (basado en percentiles)
  const interpretChildBmi = (bmiValue, age, gender) => {
    if (age < 2) {
      return "IMC no aplicable para menores de 2 años";
    }
  
    // Para niños de 2 a 5 años, usar un rango simplificado
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
  
    // Para niños y adolescentes de 6 a 17 años, ajustar por percentiles de género
    if (age >= 6 && age <= 17) {
      if (gender === 'male') {
        // Rango simplificado de percentiles para niños (hombres) de 6 a 17 años
        if (bmiValue < 10) {
          return "Bajo Peso (percentil muy bajo)";
        } else if (bmiValue >= 10 && bmiValue < 85) {
          return "Saludable";
        } else if (bmiValue >= 85 && bmiValue < 95) {
          return "Sobrepeso";
        } else {
          return "Obesidad";
        }
      } else if (gender === 'female') {
        // Rango simplificado de percentiles para niñas (mujeres) de 6 a 17 años
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
    <div className="flex items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Calcule su IMC</h1>
        <div className="space-y-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <label htmlFor="age" className="block text-lg font-semibold text-gray-700 mb-2">Ingrese su edad</label>
            <input
              type="text"
              className="w-full border-b-2 border-blue-500 text-center text-xl focus:outline-none"
              id="age"
              autoComplete="off"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="flex justify-around items-center bg-white shadow-md rounded-lg p-4">
            <label className="form-control flex items-center gap-1">
              <input
                type="radio"
                name="radio-4"
                className="radio checked:border-yellow-500 checked:bg-yellow-500"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <span className="label cursor-pointer">
                <span className="label-text text-base">Masculino</span>
              </span>
            </label>

            <label className="form-control flex items-center gap-1">
              <input
                type="radio"
                name="radio-4"
                className="radio checked:border-purple-500 checked:bg-purple-500"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <span className="label cursor-pointer">
                <span className="label-text text-base">Femenino</span>
              </span>
            </label>
          </div>

          <div className="flex justify-around items-center">
            <div className="bg-white shadow-md rounded-lg p-4 mr-4">
              <label htmlFor="height" className="block text-lg font-semibold text-gray-700 mb-2">Altura (cm)</label>
              <input
                type="number"
                className="w-full border-b-2 border-blue-500 text-center text-xl focus:outline-none"
                id="height"
                required
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
              <label htmlFor="weight" className="block text-lg font-semibold text-gray-700 mb-2">Peso (kg)</label>
              <input
                type="number"
                className="w-full border-b-2 border-blue-500 text-center text-xl focus:outline-none"
                id="weight"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          <button
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            id="submit"
            onClick={calculate}
          >
            Calcular IMC
          </button>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-700">Su IMC es:</p>
          <div className="text-3xl font-bold text-blue-500 bg-gray-200 inline-block py-2 px-4 rounded-full mt-2">{bmi}</div>
          <p className="rounded-full border-4 p-2 border-dashed border-indigo-300 bg-indigo-100 text-lg font-semibold text-gray-700 mt-4">{comment}</p>
        </div>
        <div className="mt-6">
          <a className="text-gray-600 text-sm" target="_blank" href="https://www.who.int/es/news-room/fact-sheets/detail/obesity-and-overweight">
            Información proporcionada por Organización Mundial de la Salud
          </a>
        </div>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <span className="text-gray-700 text-2xl font-bold cursor-pointer float-right" onClick={() => setModalVisible(false)}>
              &times;
            </span>
            <p className="text-gray-700 text-lg mt-4">{modalText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;