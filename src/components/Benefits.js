import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { FaAppleAlt, FaUserPlus } from "react-icons/fa";
import { FaWeightScale } from "react-icons/fa6";
import { delay } from "framer-motion";

const EquipmentData = [
  {
    id: 1,
    title: "Calcula tu IMC",
    desc: "Calcula tu Índice de Masa Corporal (IMC) para conocer tu estado físico y guiarte en tu camino hacia la salud.",
    icon: <FaWeightScale />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Rutinas",
    desc: "Accede a rutinas de ejercicio adaptadas a tus objetivos de salud y bienestar.",
    icon: <GiGymBag />,
    delay: 0.9,
  },
  {
    id: 3,
    title: "Plan de Comida",
    desc: "Recibe planes de alimentación diseñados específicamente para ayudarte a alcanzar tus metas de salud.",
    icon: <FaAppleAlt />,
    delay: 1.2,
  },
];


const Benefits = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-6 p-6">
            <h1 className="text-3xl md:text-4xl font-bold" id="about">
              Lo que te damos
            </h1>
            <p className="text-gray-500">
              Somos unos pros entrenando (entrenamos a Chris Bumstead para su
              primer Mr. Olympia)
            </p>
          </div>
          {
            EquipmentData.map((item) => {
              return (
                <div key={item.id} className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]">
                  <div className="text-4xl font-semibold">{item.icon}</div>
                  <p className="text-2xl">{item.title}</p>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Benefits;
