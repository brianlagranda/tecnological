import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleItem } from '../../services/firebase';
import { cartContext } from '../../storage/cartContext';
import ItemCount from '../ItemCount/ItemCount.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './itemdetail.css';
import { ButtonChild } from '../button/Button';

function ItemDetailContainer() {
    const [isReady, setReady] = useState(false);
    const [fullCart, setCart] = useState(false);
    const [item, setItem] = useState([]);
    const { findItem } = useContext(cartContext);

    const params = useParams();
    const id = params.id;

    const itemFind = findItem(item.id);

    let realStock;

    if (itemFind) {
        realStock = item.stock - itemFind.cant;
    } else {
        realStock = item.stock;
    }

    async function getItemAsync() {
        try {
            let res = await getSingleItem(id);
            setItem(res);
        } catch (error) {
            console.error(error);
        } finally {
            setReady(false);
        }
    }

    useEffect(() => {
        getItemAsync();
    }, []);

    const { addItemToCart } = useContext(cartContext);

    function addToCart(quantity) {
        item.cant = quantity;
        addItemToCart(item);
        if (addItemToCart(item)) {
            toast.success('The product has been added to your cart');
            setCart(true);
        } else {
            toast.error('The product is already in your cart');
        }
    }

    if (isReady) return <Spinner />;

    return (
        <>
            <div className='card-detail_main'>
                <h1 className='cardDetail_title'>{item.model}</h1>
                <div className='card-detail_img'>
                    <img src={item.imgurl} alt='img' />
                </div>

                <div className='card-detail_detail'>
                    <h2 className='cardDetail_price'>$ {item.price}</h2>
                    <p className='cardInfo'>{item.detail}</p>
                    {fullCart === false ? (
                        <div className='cardDetail_buttons'>
                            <ItemCount
                                addToCart={addToCart}
                                start={0}
                                stock={realStock}
                            />
                        </div>
                    ) : (
                        <>
                            <Link to='/cart'>
                                <ButtonChild>Ir al carrito</ButtonChild>
                            </Link>

                            <p className='cartInfo'>
                                El producto ha sido añadido al carrito
                            </p>
                        </>
                    )}
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default ItemDetailContainer;
