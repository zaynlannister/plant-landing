import PrimaryButton from "../Buttons/PrimaryButton";
import styled from "styled-components";

const PlantContent = () => {
  return (
    <StyledPlantContent className="container flex justify-between gap-2">
      <div className="flex flex-col justify-between">
        <p className="text-[50px] font-bold w-[500px] plant-content__text-1">
          Plant are the lungs of the world
        </p>
        <div className="bg-[#f7ffec] w-fit p-4 plant-content__img-1">
          <img src="/assets/img/pngwing.png" />
        </div>
      </div>
      <div>
        <div className="bg-[#f7ffec] w-fit p-4 plant-content__img-2">
          <img src="/assets/img/pngwing2.png" />
        </div>
        <p className="w-[385px] my-6 font-bold text-[#888e81]">
          That were not animals, and included algae and however, all current
          definitions
        </p>
        <PrimaryButton>Order now</PrimaryButton>
      </div>
    </StyledPlantContent>
  );
};

const StyledPlantContent = styled.div`
  @media (max-width: 1025px) {
    flex-direction: column;
    .plant-content__text-1 {
      width: 100%;
      font-size: 40px;
    }
    .plant-content__img-1 {
      display: none;
    }
    & img {
      width: 200px;
      height: 200px;
    }
  }
  @media (max-width: 490px) {
    .plant-content__img-2 {
      width: 100%;
    }
    .plant-content__img-2 img {
      margin: 0 auto;
    }
  }
`;

export default PlantContent;
