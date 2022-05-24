import React, {useState} from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import {Section, Container, Heading, Image, Hero} from 'react-bulma-components';
import './App.css';
import 'bulma/css/bulma.min.css';
import {config, useSpring, animated} from "react-spring";

export function Text() {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        // onRest: () => set(!flip),
    })
    // eslint-disable-next-line react/jsx-no-undef
    return <animated.h1 style={props}>httphangar</animated.h1>
}

export function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<Container pt={5} breakpoint={'fullhd'}>*/}
                {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
                {/*    <h1 className="title"><Text></Text></h1>*/}
                {/*</Container>*/}
                <Hero size={'fullheight'}>
                    <Hero.Header></Hero.Header>
                    <Hero.Body>
                        <Container breakpoint={'fullhd'}>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <br/>
                            <br/>
                            <h1 className="title"><Text></Text></h1>
                        </Container>
                    </Hero.Body>
                    <Hero.Footer></Hero.Footer>
                </Hero>

            </header>
            <Section>
                {/*<Heading>Websites</Heading>*/}
            </Section>
        </div>
    );
}

export default App;
