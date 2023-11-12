import HeaderSection from "./components/Header/HeaderSection";
import OrderSection from "./components/OrderPlantSection/OrderSection";
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
      <div className="py-20">
        <OrderSection />
      </div>
    </div>
  );
};

export default App;
