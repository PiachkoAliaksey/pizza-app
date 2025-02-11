'use client'

import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { useStorePizza } from '@/store/store';
import React from 'react';
import Button from '../Button/Button';

const CartComponent = ({ isOpen }: { isOpen: boolean }) => {
    const { cart, removeFromCart, clearCart } = useStorePizza()

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={`${styles.cart} ${isOpen && styles.cartVisible}`}>
            <h2>Your Cart</h2>
            {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                    <span>{item.name} x {item.quantity}</span>
                    <Button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>Remove</Button>
                   
                </div>
            ))}
            <Button onClick={clearCart}>Clear Cart</Button>
        </motion.div>
    )
}

export default CartComponent;