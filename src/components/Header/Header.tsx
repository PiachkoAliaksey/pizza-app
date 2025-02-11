'use client'
import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import Button from '../Button/Button';
import { useStorePizza } from '@/store/store';
import { useShallow } from 'zustand/shallow';


const Header = ({ handlerOpenCart }: { handlerOpenCart: () => void }) => {
  const cart = useStorePizza(useShallow((state) => state.cart.reduce((prev, current) => prev + current.quantity, 0)))

  return (
    <motion.header initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.header} >
      <h1>🍕 Pizza Shop</h1>
      <Button className={styles.btnCartHeader} onClick={handlerOpenCart}>
        Cart
        {cart > 0 && <span className={styles.counterPizza}>{cart}</span>}
      </Button>
    </motion.header>
  )
}

export default Header