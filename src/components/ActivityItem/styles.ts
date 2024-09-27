import styled from "styled-components";

export const ContainerItem = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grayscale.zinc_900};
  padding: 0.625rem 1rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.75rem;

  @media (max-width: 480px) {
    width: 17.5rem;
  }
`;

export const ActivityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActivityDescription = styled.p`
  padding-left: 0.75rem;
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.body_md};
  color: ${({ theme }) => theme.colors.grayscale.zinc_100};
`;

export const ActivityTime = styled.p`
  font-family: ${({ theme }) => theme.font.family.inter};
  font-size: ${({ theme }) => theme.font.size.body_sm};
  color: ${({ theme }) => theme.colors.grayscale.zinc_400};

  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`;
