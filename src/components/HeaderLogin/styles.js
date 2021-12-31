import styled from "styled-components";

export const ContainerHeaderLogin = styled.header`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ContainerHeaderLoginButton = styled.div`
  max-width: 50%;
  > div button {
    margin-bottom: 1rem;
    min-width: 8rem;
  }
`;

export const ContainerHeaderTitle = styled.div`
  font-size: 1.3rem;
  margin-top: -0.3rem;

  > h1 {
    color: #000;
    text-align: center;
    font-size: 2.7rem;
    margin-top: 3px;
    width: 150px;

    @media (max-width: 576px) {
      font-size: 2.3rem;
      margin-top: 8px;
    }
  }
`;