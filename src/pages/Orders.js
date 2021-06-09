import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { OrderContext } from '../context/OrdersContext';
import Button from 'react-bootstrap/Button';

const Orders = () => {
    const {orders, setOrders} = useContext(OrderContext);

    const deleteHandler = (id) => {
        console.log(id);
        const newOrders = orders.filter((item) => item.orderId !== id);
        setOrders(newOrders);
    }

    console.log(orders);
    return (
        <>
            <Container>
                <Col className="mt-3"><h3>Your Orders</h3></Col>
                {orders.map(item => (
                    <Row key={item.orderId} className="mt-4">
                        <Col><img alt="img" src={item.img} height="150px"/></Col>
                        <Col><p style={{flexDirection: 'column'}}>Category</p> {item.themeSelected}</Col>
                        <Col><p>Size</p>{item.shirtSize}</Col>
                        <Col><p>Your text</p>{item.shirtText}</Col>
                        <Col>
                        <Button 
                        variant="danger"
                        onClick={() => deleteHandler(item.orderId)}>Delete</Button>
                        </Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}

export default Orders
