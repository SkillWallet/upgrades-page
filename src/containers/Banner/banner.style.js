import styled from "styled-components";

const BannerArea = styled.section`
  background-color: #fff;
  padding-top: 8rem;
  padding-bottom: 8rem;
  position: relative;

  .Container {
    display: flex;
    margin-bottom: 4.25rem;
    flex-direction: column;
  }

  .main-logo {
    img {
      height: 4rem;
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 1199px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media (max-width: 575px) {
    padding-top: 100px;
    padding-bottom: 100px;
    .Container {
      margin-bottom: 1rem;
    }
  }

  h2 {
    font-weight: bold;
    font-size: 6.25rem;
    letter-spacing: -2px;
    color: #000;
    margin-bottom: 1.188rem;
  }
  p {
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.7;
    letter-spacing: 0;
    color: #000;
    margin-bottom: 0;
    max-width: 32.188rem;
    opacity: 0.8;
    @media (max-width: 1600px) {
      max-width: 400px;
    }
  }
`;

export const LogoObject = styled.div`
  position: absolute;
  // width: 100%;
  // height: 100%;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }

  img {
    height: 40rem;
  }

  .LogoObject {
    height: 100%;

    & > DIV {
      height: 100%;
    }
  }
`;

export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (max-width: 767px) {
  }
`;

export default BannerArea;
