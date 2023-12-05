import { ConfettiPiece } from './styles';

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Confetti = ({ quantity }) => {
    const confettiPieces = [];

    for (let i = 0; i < quantity; i++) {
        const leftPosition = generateRandomNumber(0, window.innerWidth);
        const animationDelay = generateRandomNumber(0, 2000);

        confettiPieces.push(
            <ConfettiPiece
                key={i}
                style={{
                    left: `${leftPosition}px`,
                    animationDelay: `-${animationDelay}ms` // Inverte para garantir variação aleatória
                }}
            />
        );
    }

    return <div>{confettiPieces}</div>;
};

export default Confetti;
