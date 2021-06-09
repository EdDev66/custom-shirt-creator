import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Dropdown, InputGroup, FormControl, Button, Row, Col, Form } from 'react-bootstrap'
import styles from './ThemeSelect.module.css';
import { OrderContext } from '../context/OrdersContext';
import domtoimage from 'dom-to-image';
import { IdContext } from '../context/IdContext';

const ThemeSelect = ({ onSelectTheme, onChangeText}) => {
    const history = useHistory();
    const {orders, setOrders} = useContext(OrderContext);
    const {id, setId} = useContext(IdContext);

    const [image, setImage] = useState('');
    const [themeSelected, setThemeSelected] = useState('');
    const [shirtSize, setShirtSize] = useState('S');
    const [shirtText, setShirtText] = useState('');

    const orderShirtHandler = () => {
          setOrders([ ...orders, {
              orderId: id,
              themeSelected: themeSelected,
              shirtSize: shirtSize,
              shirtText: shirtText,
              img: image
          } ]);
          console.log(orders);
          setId(id + 1);
          history.push('/orders')
    }

    const shirtChangeHandler = (e) => {
        setShirtText(e.target.value);
        onChangeText(e.target.value);
    }

    const shirtSizeHandler = (key) => {
        getImage();
        setShirtSize(key)
    }

    const themeHandler = (e) => {
        setThemeSelected(e);
        onSelectTheme(e);
    }

    const getImage = () => {
        var node = document.getElementById('my-node');
 
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        setImage(dataUrl);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    }


    return (
        <>
            <p>Select a theme</p>
            <Dropdown className="mt-2"b>
                <Dropdown.Toggle className={styles.dropdown} variant="primary" id="themeDropdown">
                    {themeSelected === '' ? 'Select' : themeSelected === 'casual' ? 'Casual' : themeSelected === 'beach' ? 'Beach' : 'Formal'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="casual" onSelect={themeHandler}>Casual</Dropdown.Item>
                    <Dropdown.Item eventKey="beach" onSelect={themeHandler}>Beach</Dropdown.Item>
                    <Dropdown.Item eventKey="formal" onSelect={themeHandler}>Formal</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {themeSelected !== '' ? (
            <div>
                <div className="mt-3">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                            Shirt Text
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    <FormControl onChange={shirtChangeHandler}/>
                    </InputGroup>
                </div>

                <div className="mt-3">
                    <Row>
                    <Col md={8}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success">
                            Size
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onSelect={() => shirtSizeHandler('XS')}>XS</Dropdown.Item>
                            <Dropdown.Item onSelect={() => shirtSizeHandler('S')}>S</Dropdown.Item>
                            <Dropdown.Item onSelect={() => shirtSizeHandler('M')}>M</Dropdown.Item>
                            <Dropdown.Item onSelect={() => shirtSizeHandler('L')}>L</Dropdown.Item>
                            <Dropdown.Item onSelect={() => shirtSizeHandler('XL')}>XL</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </Col>
                    <Col md={2} className="h4">{shirtSize}</Col>
                    </Row>
                </div>

                <div className="mt-3">
                    <Button onClick={orderShirtHandler}>Order</Button>
                </div>
            </div>
            ) : null}
        </>
    )
}

export default ThemeSelect
