import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ThemeSelect from '../components/ThemeSelect'
import Tshirt from '../components/Tshirt'
import { IdContext } from '../context/IdContext';

const Customization = () => {
    const [themeSelected, setThemeSelected] = useState('');
    const [shirtText, setShirtText] = useState('');

    const selectThemeHandler = (value) => {
        setThemeSelected(value)
        console.log(themeSelected)
    }

    const changeTextHandler = (value) => {
        setShirtText(value)
    }

    return (
        <>
            <Container>
            <Row style={{ border: '1px solid #000', padding: '50px' }} className="mt-3">
                <Col md={{ span: 4, offset: 1 }}>
                    {/* <Button onClick={getImage}>Get image</Button> */}
                    <Tshirt theme={themeSelected} text={shirtText}/>
                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                    <ThemeSelect 
                     onChangeText={changeTextHandler}
                     onSelectTheme={selectThemeHandler}/>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Customization
