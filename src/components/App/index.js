import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/global';
import defaultTheme from '../../assets/theme/default';
import music from '../../assets/happy_birth.mp3';

import {
    Container,
    Button,
    CountdownContainer,
    Center,
    Title,
    SubTitle
} from './styles';
import { useState, useEffect } from 'react';

import Confetti from '../Confetti';
import AudioPlayer from '../Audio';

function App() {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(3);
    // const mp3File = '../../assets/happy_birth.mp3';

    const timer = () =>
        setInterval(() => {
            setCount((prevCount) => prevCount - 1);
        }, 1000);

    useEffect(() => {
        if (count == 0) {
            clearInterval(timer);
        }
    }, [count]);

    function handleCountBuntton() {
        setShow(true);
        timer();
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Container>
                {!show && (
                    <Center>
                        <Button onClick={handleCountBuntton}>Iniciar</Button>
                    </Center>
                )}
                {show && (
                    <CountdownContainer currentNumber={count}>
                        {count > 0 && count}
                    </CountdownContainer>
                )}
                {show && count <= 0 && (
                    <>
                        <Confetti />
                        <AudioPlayer mp3File={music} />
                        <Center>
                            <Title>Feliz Aniversário Marli!</Title>
                            <SubTitle> Mulher Guerreira e Grande Mãe</SubTitle>
                        </Center>
                    </>
                )}
            </Container>
        </ThemeProvider>
    );
}

export default App;
