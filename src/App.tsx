import HeaderSection from "./components/Header/HeaderSection";
import PlantContent from "./components/PlantContent/PlantContent";

const App = () => {
  return (
    <div>
      <div className="py-6">
        <HeaderSection />
      </div>
      <div className="py-20">
        <PlantContent />
      </div>
    </div>
  );
};

export default App;
