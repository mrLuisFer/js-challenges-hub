import styled from "styled-components";

export const ContainerStyled = styled.main`
  background-color: var(--qr-light-gray);
  font-family: "Outfit", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const CardContainerStyled = styled.div`
  width: 315px;
  background-color: var(--qr-white);
  display: block;
  border-radius: 20px;
  padding: 1.5rem;
  transition: 0.15s ease;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImageStyled = styled.img`
  width: 100%;
  border-radius: 15px;
  user-select: none;
  object-fit: cover;
`;

export const CardLinkStyled = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-weight: 600;
`;

export const CardTitleStyled = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
  color: var(--qr-dark-blue);

  &:hover {
    ${CardLinkStyled} {
      color: #000;
    }
  }
`;

export const CardTextStyled = styled.p`
  text-align: center;
  color: var(--qr-grayish-blue);
  font-size: 1rem;
  width: 250px;
  margin: 0 auto;
  line-height: 1.5;
  font-weight: 400;
  margin-top: 10px;
`;
