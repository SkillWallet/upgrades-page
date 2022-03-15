import styled from "styled-components";

const SectionWrapper = styled.section`
  padding-bottom: 75px;
  overflow: hidden;
  background-color: #fff;

  .section-banner {
    height: 27.458rem;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const UpgradeCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-gap: 5.75rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  > div {
    padding: 6.25rem 0;
    transition: all 0.3s;
    border-radius: 0;
    width: 27.875rem !important;
    min-width: 27.875rem !important;
    min-height: 35.938rem;
  }

  .feature__block {
    text-align: center;
    box-shadow: 5px 7px 12px 2px rgb(18 24 58 / 70%);
    background: #fff;
    .icon__wrapper {
      margin: 0 auto 4.375rem;
      position: relative;
      img {
        display: inline-block;
        height: 8.008rem !important;
        min-height: 8.008rem !important;
      }
    }
    .content__wrapper {
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .content-descriptions {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 4.125rem;
        text-align: left;
        padding-right: 4.125rem;
      }

      .read-more-link {
        color: #000;
        font-size: 1.125rem;
        font-weight: bold;
        margin-top: 10px
      }
      h3 {
        font-size: 1.875rem;
        line-height: 1;
        font-weight: 600;
        margin-bottom: 2.5rem;
      }

      h4 {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: 300;
        margin-bottom: 20px;
      }
      p {
        line-height: 1.9;
        font-size: 1.125rem;
        padding: 0 15px;
        opacity: 0.7;
      }
    }
  }
`;

export default SectionWrapper;
