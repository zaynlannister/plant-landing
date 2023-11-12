import styled from "styled-components";

interface Plant {
  name: string;
  description: string;
  img: string;
  price: string;
  remove?: boolean;
}

const PlantComponent = (props: Plant) => {
  return (
    <StyledPlantComponent className="bg-[#F7FFEC] flex items-center p-8 w-[500px]">
      <div
        className={`mr-4 ${props.remove && "hidden"}`}
        style={{ objectFit: "cover" }}
      >
        <img src={`/assets/img/${props.img}`} alt="img" />
      </div>
      <div>
        <p className="text-[25px] font-[600]">{props.name}</p>
        <p className="text-[#888e81] my-2">{props.description}</p>
        <p className="text-[#418A1C] font-bold text-[20px]">${props.price}</p>
      </div>
    </StyledPlantComponent>
  );
};

const StyledPlantComponent = styled.div`
  @media (max-width: 1280px) {
    width: 100%;

    & img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default PlantComponent;
