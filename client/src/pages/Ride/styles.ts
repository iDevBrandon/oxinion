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
