import styled from 'styled-components';
import { Main } from '../../styles/main';

export const StyledMain = styled(Main)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
  div {
    text-align: center;
    padding: 1rem 5rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    input {
      border: none;
      color: var(--grey-0);
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      width: 100%;
      text-align: center;
      :focus {
        outline: 1px solid var(--primary);
      }

      ::placeholder {
        color: var(--grey-0);
        text-align: center;
      }
    }
  }
`;
