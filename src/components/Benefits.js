import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { delay } from "framer-motion";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Training",
    desc: "We provide all the necessary equipments for yoga.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Training",
    desc: "We provide all the necessary equipments for muscles training.",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Routine",
    desc: "We provide all the necessary equipments for fitness routine.",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Benefits = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-6 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
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
