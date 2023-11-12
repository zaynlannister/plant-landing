import PrimaryButton from "../Buttons/PrimaryButton";
import styled from "styled-components";

const HeaderSection = () => {
  return (
    <StyledHeader className="container">
      <div className="flex justify-between items-center">
        <div>
          <img width={60} height={50} src="/assets/img/logo.png" alt="logo" />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-8 header-nav">
            <a className="custom-link" href="#home">
              Home
            </a>
            <a className="custom-link" href="#home">
              About
            </a>
            <a className="custom-link" href="#home">
              Contact
            </a>
          </div>
          <PrimaryButton>Order now</PrimaryButton>
        </div>
      </div>
      <StyledHeaderContent className="relative">
        <div className="w-[58%] ml-auto header-content__text">
          <p className="text-[70px] font-bold text-[#418A1C] header-content__text-1">
            Plant a tree today
          </p>
          <p className="text-[60px] font-bold header-content__text-2">
            it will help us breathe tomorrow.
          </p>
          <p className="font-bold text-[#888e81] pt-4 pb-8">
            We know how important trees are to our existence and for the
            well-being of the planet at large, which is why we have put together
            a number
          </p>
          <PrimaryButton>Order now</PrimaryButton>
          <div className="flex gap-20 mt-4">
            <div>
              <p className="text-[40px] font-bold text-[#418A1C]">
                355<sup>+</sup>
              </p>
              <p>Awesome collection</p>
            </div>
            <div>
              <p className="text-[40px] font-bold text-[#418A1C]">
                100<sup>+</sup>
              </p>
              <p>Sell everyday</p>
            </div>
          </div>
        </div>
      </StyledHeaderContent>
    </StyledHeader>
  );
};

const StyledHeaderContent = styled.div`
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    background-color: #f7ffec;
    height: 640px;
    width: 500px;
    left: 0;
    top: -100px;
    background-image: url("/assets/img/header-bg.png");
    background-size: cover;
  }

  @media (max-width: 1025px) {
    &::before {
      width: 0;
      height: 0;
      background-color: none;
    }
    .header-content__text {
      margin-top: 40px;
      width: 100%;
    }
    .header-content__text-1 {
      font-size: 50px;
    }
    .header-content__text-2 {
      font-size: 40px;
    }
  }
`;

const StyledHeader = styled.div`
  @media (max-width: 540px) {
    .header-nav {
      display: none;
    }
  }
`;

export default HeaderSection;
