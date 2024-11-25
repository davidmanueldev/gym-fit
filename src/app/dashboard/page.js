// import Header from "@/components/Header";


// const DashboardPage = () => {
  


//   return (
//     <>
//       <Header />
//       <div>Hola</div>

//     </>
//   );
// };

// export default DashboardPage;
"use client";

import Header from "@/components/Header";
import { useState } from 'react';

const DashboardPage = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activity, setActivity] = useState('');
  const [recommendations, setRecommendations] = useState(null);

  const recommendationData = {
    teen: {
      routine: {
        sedentary: {
          intensity: "Principiante",
          exercises: [
            "Lunes, Miércoles y Viernes: Ejercicios de peso corporal (Flexiones, Sentadillas, Plancha)",
            "Martes y Jueves: 15-20 minutos de cardio ligero (caminar o bicicleta)",
            "Domingo: Estiramientos y movilidad"
          ]
        },
        active: {
          intensity: "Intermedio",
          exercises: [
            "Lunes: Entrenamiento de cuerpo completo (Pesas ligeras y ejercicios compuestos)",
            "Martes: 30 minutos de cardio moderado (trotar, bicicleta)",
            "Miércoles: Día de descanso o movilidad",
            "Jueves: Circuito de fuerza (Sentadillas, Press de Banca, Remo)",
            "Viernes: Ejercicios funcionales y estiramientos",
            "Sábado: Deporte recreativo o actividad física divertida"
          ]
        }
      },
      nutrition: {
        underweight: [
          "5-6 comidas pequeñas al día",
          "Aumentar el consumo de proteínas magras (pollo, pescado, tofu)",
          "Incluir carbohidratos complejos (arroz integral, avena, patatas)",
          "Snacks saludables entre comidas (frutos secos, yogurt)",
          "Batidos nutritivos caseros (proteínas, avena, frutas)"
        ],
        normal: [
          "3 comidas principales + 2 snacks",
          "Proteínas en cada comida principal (pollo, pescado, huevos)",
          "Frutas y verduras variadas",
          "Granos integrales (pan integral, arroz integral)",
          "Lácteos bajos en grasa o alternativas vegetales"
        ],
        overweight: [
          "Control de porciones y evitar el exceso de calorías",
          "Aumentar consumo de verduras en cada comida",
          "Reducir azúcares refinados (dulces, refrescos)",
          "Preferir proteínas magras (pavo, pescado, legumbres)",
          "Meriendas saludables planificadas (frutos secos, batidos verdes)"
        ]
      }
    },
    young: {
      routine: {
        sedentary: {
          intensity: "Principiante-Intermedio",
          exercises: [
            "Lunes: Pesas ligeras y ejercicios de resistencia",
            "Martes: 30 minutos de cardio moderado (caminar, nadar)",
            "Miércoles: Día de descanso o yoga",
            "Jueves: Ejercicios compuestos (Sentadillas, Flexiones, Pull-ups)",
            "Viernes: Cardio HIIT (20 minutos de sprints)",
            "Sábado: Rutina de core (Abdominales, Plancha)",
            "Domingo: Estiramientos y movilidad"
          ]
        },
        active: {
          intensity: "Intermedio-Avanzado",
          exercises: [
            "Lunes: Día de fuerza (pesas, deadlifts, press de banca)",
            "Martes: HIIT (Entrenamiento en intervalos de alta intensidad)",
            "Miércoles: Día de recuperación activa (caminar, estiramientos)",
            "Jueves: Día de fuerza (piernas y core)",
            "Viernes: HIIT o circuito de entrenamiento",
            "Sábado: Deporte o actividad recreativa (fútbol, natación)",
            "Domingo: Estiramientos y recuperación"
          ]
        }
      },
      nutrition: {
        underweight: [
          "Dieta alta en calorías nutritivas",
          "Proteínas en cada comida (1.6-2g/kg de peso corporal)",
          "Carbohidratos complejos abundantes (arroz, pasta, avena)",
          "Grasas saludables (aguacate, frutos secos, aceite de oliva)",
          "Batidos post-entrenamiento con proteínas y carbohidratos"
        ],
        normal: [
          "Dieta balanceada con macronutrientes adecuados",
          "Proteínas (1.4-1.6g/kg de peso corporal)",
          "Carbohidratos según actividad (arroz, pan integral, patatas)",
          "Grasas saludables moderadas (aceite de oliva, frutos secos)",
          "Hidratación constante durante todo el día"
        ],
        overweight: [
          "Déficit calórico moderado para perder peso de forma saludable",
          "Alto consumo de proteínas (1.6-2g/kg de peso corporal)",
          "Reducir carbohidratos procesados (pan blanco, azúcares refinados)",
          "Incrementar fibra dietética (verduras, legumbres, avena)",
          "Controlar tamaño de porciones y realizar comidas frecuentes"
        ]
      }
    }
  };

  const getRecommendations = (event) => {
    event.preventDefault();

    const heightInMeters = parseFloat(height) / 100;
    const imc = weight / (heightInMeters * heightInMeters);
    let imcCategory;

    if (imc < 18.5) imcCategory = 'underweight';
    else if (imc < 25) imcCategory = 'normal';
    else imcCategory = 'overweight';

    const ageGroup = age <= 15 ? 'teen' : 'young';
    const activityLevel = activity === 'sedentary' || activity === 'light' ? 'sedentary' : 'active';

    const routineRecs = recommendationData[ageGroup].routine[activityLevel];
    const nutritionRecs = recommendationData[ageGroup].nutrition[imcCategory];

    setRecommendations({
      routine: routineRecs,
      nutrition: nutritionRecs
    });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-12 p-6 bg-white rounded-xl shadow-lg">
        <div className="card bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4"><i className="fas fa-user-plus"></i> Obtén tu Plan Personalizado</h2>
          <form onSubmit={getRecommendations}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="input-group">
                <label htmlFor="age" className="block text-sm font-semibold">Edad</label>
                <input
                  type="number"
                  id="age"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required min="10" max="80"
                  placeholder="Ej: 15"
                />
              </div>
              <div className="input-group">
                <label htmlFor="weight" className="block text-sm font-semibold">Peso (kg)</label>
                <input
                  type="number"
                  id="weight"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  step="0.1"
                  placeholder="Ej: 65.5"
                />
              </div>
              <div className="input-group">
                <label htmlFor="height" className="block text-sm font-semibold">Altura (cm)</label>
                <input
                  type="number"
                  id="height"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  placeholder="Ej: 170"
                />
              </div>
              <div className="input-group">
                <label htmlFor="activity" className="block text-sm font-semibold">Nivel de Actividad</label>
                <select
                  id="activity"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="sedentary">Sedentario</option>
                  <option value="light">Actividad Ligera</option>
                  <option value="moderate">Actividad Moderada</option>
                  <option value="active">Muy Activo</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Obtener Recomendaciones
            </button>
          </form>
        </div>

        {recommendations && (
          <div className="recommendations-container mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="recommendation-card p-6 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600 mb-4"><i className="fas fa-running"></i> Rutina de Ejercicios</h3>
                <div className={`intensity-label p-2 mb-4 text-sm rounded ${recommendations.routine.intensity === 'Principiante' ? 'bg-green-200 text-green-600' : recommendations.routine.intensity === 'Intermedio' ? 'bg-yellow-200 text-yellow-600' : 'bg-red-200 text-red-600'}`}>
                  Intensidad: {recommendations.routine.intensity}
                </div>
                <ul>
                  {recommendations.routine.exercises.map((exercise, index) => (
                    <li key={index} className="flex items-start gap-2 mb-2">
                      <span>💪</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="recommendation-card p-6 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600 mb-4"><i className="fas fa-apple-alt"></i> Recomendaciones Nutricionales</h3>
                <ul>
                  {recommendations.nutrition.map((nutrient, index) => (
                    <li key={index} className="flex items-start gap-2 mb-2">
                      <span>🍎</span>
                      {nutrient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
