'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useStorePizza } from '@/store/store';
import styles from './styles.module.scss';
import { useShallow } from 'zustand/shallow';
import Button from '../Button/Button';

type PizzaCardProps = {
  pizza: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};


const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const addToCart = useStorePizza(useShallow((state) => state.addToCart));

  return (
    <motion.div
      className={styles.pizzaCard}
      whileHover={{ scale: 1.05 }}
    >
      <Image className={styles.imagePizza} src={pizza.image} alt={pizza.name} />
      <h3>{pizza.name}</h3>
      <p>${pizza.price}</p>
      
      <Button onClick={() => addToCart(pizza)}>Add to Cart</Button>
    </motion.div>
  )
}

export default PizzaCard;