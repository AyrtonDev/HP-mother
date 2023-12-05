import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/global';
import defaultTheme from '../../assets/theme/default';

import { Container, Button, CountdownContainer, Center } from './styles';
import { useState, useEffect } from 'react';

import Confetti from '../Confetti';

function App() {
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(3);

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
                {show && count <= 0 && <Confetti />}
            </Container>
        </ThemeProvider>
    );
}

export default App;
