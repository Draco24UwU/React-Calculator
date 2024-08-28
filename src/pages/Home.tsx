import { useLocation } from "react-router-dom";
import ImageSlider from "@/components/UI/ImageSlider";
import samsung from "@/assets/images/samsung.avif";
import samsung2 from "@/assets/images/samsung2.avif";
import build from "@/assets/images/building.avif";
import memory from "@/assets/images/memory.avif";

function MainContent() {
  return (
    <div>
      <h1 className="text-center text-white">Hola mundo</h1>
      <ImageSlider
        className="lg:w-[60%] md:w-[75%] w-[90%] md:h-[600px] h-[450px]"
        slides={[
          { title: "uwu 1", url: samsung },
          { title: "uwu 2", url: samsung2 },
          { title: "uwu 3", url: build },
          { title: "uwu 4", url: memory },
        ]}
      />
    </div>
  );
}

function Home() {
  const location = useLocation();
  return <>{location.pathname == "/" && <MainContent />}</>;
}

export default Home;
