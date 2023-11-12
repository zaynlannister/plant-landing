import PrimaryButton from "../Buttons/PrimaryButton";
import PlantComponent from "../Plant/PlantComponent";
import styled from "styled-components";

const plants = [
  {
    name: "Fringilla Augue",
    description: "that were not animals, and included algae and however",
    price: "97.00",
    img: "pngwing8.png",
  },
  {
    name: "Faded Short",
    description: "that were not animals, and included algae and however",
    price: "97.00",
    img: "pngwing9.png",
  },
  {
    name: "Eled Doming",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    price: "97.00",
    img: "pngwing10.png",
  },
];

const OrderSection = () => {
  return (
    <StyledOrderSection className="container">
      <div className="flex gap-4 order-block">
        <div className="w-[50%] order-container">
          <div className="mb-4">
            <PlantComponent {...plants[0]} />
          </div>
          <PlantComponent {...plants[1]} />
        </div>
        <div className="w-[50%] order-container">
          <div className="mb-4">
            <p className="font-bold text-[50px]">Get our greatest plants</p>
          </div>
          <PlantComponent {...plants[2]} width="350" />
        </div>
      </div>
      <div className="mt-6">
        <PrimaryButton>Order now</PrimaryButton>
      </div>
    </StyledOrderSection>
  );
};

const StyledOrderSection = styled.div`
  @media (max-width: 1280px) {
    .order-block {
      flex-direction: column;
    }
    & .order-container {
      width: 100%;
    }
  }
`;

export default OrderSection;
