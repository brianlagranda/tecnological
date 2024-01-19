import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';
import './cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    TextField,
    Typography,
} from '@mui/material';
import Spinner from '../Spinner/Spinner';
import { createOrder } from '../../services/firebase';

function CartContainer() {
    const cart = useContext(cartContext).cart;
    const { removeItem } = useContext(cartContext);
    const { getTotalPrice } = useContext(cartContext);
    const [isLoading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const navigateTo = useNavigate();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, [cart]);

    async function makeCheckout(e) {
        e.preventDefault();

        const items = cart.map(({ id, model, price, cant }) => ({
            id: id,
            model: model,
            price: price,
            cant: cant,
        }));

        const order = {
            client: {
                name: 'test',
                email: 'test',
                address: 'test',
            },
            items: items,
            date: new Date(),
            total: getTotalPrice(cart),
        };

        let id = await createOrder(order);

        setOrderId(id);

        navigateTo(`/thank-s2/${id}`);
    }

    if (cart.length === 0 && orderId === null) {
        return isLoading ? (
            <Spinner />
        ) : (
            <div>
                <h1 className='cartTitle'>Tu carrito está vacío</h1>
                <div className='btnContainer'>
                    <Link to='/'>
                        <button className='shopBtn'>Continuar comprando</button>
                    </Link>
                </div>
            </div>
        );
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <>
            <h1 className='cartTitle'>Resumen del pedido</h1>

            <div className='orderContainer'>
                <div className='productsContainer'>
                    {cart.map(({ id, imgurl, model, price, cant }) => (
                        <div key={id} className='itemContainer'>
                            <div className='imgContainer'>
                                <img
                                    src={imgurl}
                                    alt={model}
                                    className='itemImg'
                                ></img>
                            </div>

                            <div className='itemInfoContainer'>
                                <h3>{model}</h3>
                                <div className='itemInfo'>
                                    <p>
                                        ${price} x {cant}
                                    </p>
                                </div>
                            </div>
                            <DeleteIcon
                                className='trash'
                                onClick={() => removeItem(id)}
                            ></DeleteIcon>
                        </div>
                    ))}

                    <div className='totalCart'>
                        <h3>Total</h3>{' '}
                        <h3 className='price'>${getTotalPrice(cart)}.00</h3>
                    </div>
                </div>

                <form autoComplete='off' className='contactContainer'>
                    <Card variant='outlined'>
                        <Box m={1}>
                            <CardContent>
                                <Typography
                                    variant='h5'
                                    component='h2'
                                    style={{ fontWeight: 500 }}
                                >
                                    Información de entrega
                                </Typography>
                                <Box mb={1}>
                                    <Divider />
                                </Box>
                                <TextField
                                    margin='normal'
                                    size='small'
                                    color='primary'
                                    variant='outlined'
                                    label='Name'
                                    placeholder='Enter your fullname'
                                    name='name'
                                    fullWidth
                                    required
                                />
                                <TextField
                                    margin='normal'
                                    size='small'
                                    color='primary'
                                    type='email'
                                    variant='outlined'
                                    label='Email'
                                    placeholder='Enter your email'
                                    name='email'
                                    fullWidth
                                    required
                                />
                                <TextField
                                    margin='normal'
                                    size='small'
                                    color='primary'
                                    multiline
                                    rows={4}
                                    variant='outlined'
                                    label='Address'
                                    placeholder='Enter your address'
                                    name='address'
                                    fullWidth
                                    required
                                />
                            </CardContent>
                            <CardActions>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='primary'
                                    disableElevation
                                    fullWidth
                                    onClick={makeCheckout}
                                >
                                    Check Out
                                </Button>
                            </CardActions>
                        </Box>
                    </Card>
                </form>
            </div>
        </>
    );
}

export default CartContainer;
