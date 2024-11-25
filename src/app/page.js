import Hero from "@/components/Hero";
import Header from "@/components/Header";
import BgImage from "../../public/assets/fondo.png"; // No funciona la importación de imágenes
import Benefits from "@/components/Benefits";
import Calculator from "@/components/Calculator";

const bgStyle = {
  backgroundImage: `url(/assets/fondo.png)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function HomePage() {
  return (
    // <div>HomePage o sea el {"{"}children{"}"}</div>
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Header />
        <Hero />
      </div>
      <Benefits />
      <Calculator />
    </div>
  );
}

export default HomePage;
