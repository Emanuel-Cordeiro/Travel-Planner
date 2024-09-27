import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grayscale.zinc_950};
`;

export const Container = styled.div`
  width: 1280px;
  min-height: 100vh;
  padding: 2.5rem 10rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContainerRegister = styled.div`
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

export const LocationComponent = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  padding-left: 0.5rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.grayscale.zinc_900};
`;

export const InputText = styled.input`
  height: 3rem;
  width: 80%;
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.body_sm};
  background-color: ${({ theme }) => theme.colors.grayscale.zinc_900};
  color: ${({ theme }) => theme.colors.grayscale.zinc_100};
  font-weight: 300;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  height: 2.5rem;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.product.lime_300};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.product.lime_950};
  font-size: ${({ theme }) => theme.font.size.body_sm};
  font-family: ${({ theme }) => theme.font.family.inter};
  margin: 0.25rem 0;

  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;
//-------------------
export const ContainerActivities = styled.div`
  flex: 1;
`;

export const TitleActivity = styled.h1`
  color: ${({ theme }) => theme.colors.grayscale.zinc_50};
  font-size: ${({ theme }) => theme.font.size.heading_lg};
  font-family: ${({ theme }) => theme.font.family.inter};
  margin-bottom: 1.5rem;
`;

export const EmptyContentMessage = styled.p`
  color: ${({ theme }) => theme.colors.grayscale.zinc_500};
  font-size: ${({ theme }) => theme.font.size.body_sm};
  font-family: ${({ theme }) => theme.font.family.inter};
`;
