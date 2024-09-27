import styled from "styled-components";

export const BackgroundInput = styled.div`
  height: 3.5rem;
  width: 100%;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.zinc_800};
  background-color: ${({ theme }) => theme.colors.grayscale.zinc_950};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.product.lime_300};
  }
`;

export const InputText = styled.input`
  width: 80%;
  height: 3rem;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.body_md};
  font-family: ${({ theme }) => theme.font.family.inter};
  color: ${({ theme }) => theme.colors.grayscale.zinc_100};
  background-color: ${({ theme }) => theme.colors.grayscale.zinc_950};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px
      ${({ theme }) => theme.colors.grayscale.zinc_950} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.grayscale.zinc_100};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px
      ${({ theme }) => theme.colors.grayscale.zinc_950} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.grayscale.zinc_100};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Error = styled.p`
  font-size: ${({ theme }) => theme.font.size.body_sm};
  font-family: ${({ theme }) => theme.font.family.inter};
  color: red;
  margin-bottom: 0.125rem;
  opacity: 80%;
`;
