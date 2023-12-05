import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 10px 2px 20px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 10px 5px;
`;

const zoomOutAndFade = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.5);
    opacity: 0;
  }
`;

export const CountdownContainer = styled.div`
    font-size: 48px;
    font-weight: bold;
    animation: ${zoomOutAndFade} 1s ease-out forwards;
    animation-iteration-count: ${({ currentNumber }) =>
        currentNumber === 0 ? '0' : 'infinite'};
`;
