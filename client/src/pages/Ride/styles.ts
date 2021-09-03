import styled from "styled-components";

export const RideContainer = styled.div`
  display: flex;
`;

export const RideFeatures = styled.section``;

export const FeaturesContainer = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  @media (min-width: 600px) {
    border: 1px solid #eee;
    width: 50%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeatureTab = styled.li`
  //width: 25%;
  font-size: 1.5rem;
  list-style: none;
  margin: 0.75rem 0.75rem 0 0.75rem;
  font-weight: 500;
  cursor: pointer;
  i {
    display: inline-block;
  }
`;

export const FeatureContent = styled.div`
  display: none;
  //  display: inline;
  margin: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 2rem;
    text-align: center;
  }

  .ride--form {
    width: 100%;
    margin: 0 auto;
    background: #f6f6f6;
    border: 1px solid #eee;
    padding: 1.5rem 1rem;
    margin-bottom: 2.5rem;
    @media (min-width: 600px) {
      display: flex;
      align-items: center;
      width: 90%;
    }
  }
`;

// service content
export const ServiceContent = styled.section`
  display: grid;
  gap: 5rem;
`;

// app promotion
export const AppPromotion = styled.section`
  width: 100%;
  background-color: #afccf8;

  @media (min-width: 600px) {
    .promote {
      display: flex;
    }
  }
`;
