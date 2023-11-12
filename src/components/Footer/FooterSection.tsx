import styled from "styled-components";

const FooterSection = () => {
  return (
    <StyledFooter className="container">
      <div className="flex gap-20 footer-container">
        <div>
          <img src="/assets/img/logo.png" alt="logo" />
        </div>
        <div className="flex gap-24 footer-content">
          <div className="footer-section">
            <p className="font-bold text-[18px] mb-2">ABOUT US</p>
            <a className="mb-2 hover:text-[red]" href="#">
              Testimonial
            </a>
            <a className="mb-2 hover:text-[red]" href="#">
              CONTACT US
            </a>
            <a className="mb-2 hover:text-[red]" href="#">
              Feature
            </a>
          </div>
          <div className="footer-section">
            <p className="font-bold text-[18px] mb-2">POLICY LIBRARY</p>
            <a className="mb-2 hover:text-[red]" href="#">
              SITEMAP
            </a>
            <a className="mb-2 hover:text-[red]" href="#">
              EN ESPAROL
            </a>
          </div>
          <div className="footer-section">
            <p className="font-bold text-[18px] mb-2">FOLLOW US</p>
            <div className="flex gap-2">
              <div className="bg-[#081800] p-2 rounded-full cursor-pointer">
                <img width={20} height={20} src="/assets/img/inst.svg" alt="" />
              </div>
              <div className="bg-[#081800] p-2 rounded-full cursor-pointer">
                <img
                  width={20}
                  height={20}
                  src="/assets/img/twitter.svg"
                  alt=""
                />
              </div>
              <div className="bg-[#081800] p-2 rounded-full cursor-pointer">
                <img
                  width={20}
                  height={20}
                  src="/assets/img/facebook.svg"
                  alt=""
                />
              </div>
              <div className="bg-[#081800] p-2 rounded-full cursor-pointer">
                <img
                  width={20}
                  height={20}
                  src="/assets/img/youtube.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  & a {
    display: block;
  }
  @media (max-width: 770px) {
    .footer-container,
    .footer-content {
      display: block;
      width: fit-content;
      margin: 0 auto;
    }
    .footer-section {
      margin-top: 40px;
    }
  }
`;

export default FooterSection;
