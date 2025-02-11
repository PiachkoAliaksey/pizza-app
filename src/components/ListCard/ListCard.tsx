'use client'

import React from 'react';
import PizzaCard from '../PizzaCard/PizzaCard';
import styles from './styles.module.scss'
import { useStorePizza } from '@/store/store';
import { PizzaProps } from '@/types';


const ListCard = ({ pizzas }: PizzaProps) => {
    const { searchQuery } = useStorePizza();

    const filteredPizzas = pizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(searchQuery.toLowerCase()))


    return (
        <div className={styles.pizzaGrid}>
            {filteredPizzas.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
        </div>
    )
}

export default ListCard