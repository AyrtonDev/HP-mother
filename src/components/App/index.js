import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/global';
import defaultTheme from '../../assets/theme/default';

import { Container, Button } from './styles';
import { useState } from 'react';

import Confetti from '../Confetti';

function App() {
    const [show, setShow] = useState(false);

    const handleButton = () => {
        setTimeout(() => {
            setShow(true);
        }, 3000);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Container>
                {!show && <Button onClick={handleButton}>Iniciar</Button>}
                {show && <Confetti quantity={20} />}
            </Container>
        </ThemeProvider>
    );
}

export default App;
