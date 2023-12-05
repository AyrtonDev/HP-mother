import { styled, keyframes } from 'styled-components';

const fall = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(600px) rotate(360deg);
  }
`;

export const ConfettiPiece = styled.div`
    width: 10px;
    height: 10px;
    background-color: #f00; /* Cor do confete (pode ser ajustada) */
    position: absolute;
    animation: ${fall} 2s ease-out; /* Animação de queda */
`;
