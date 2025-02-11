'use client'

import Header from '../Header/Header';
import CartComponent from '../Cart/CartComponent';
import SearchPanel from '../SearchPanel/SearchPanel';
import PizzaAnim from '../animations/LottieAnim';
import ListCard from '../ListCard/ListCard';
import { PizzaProps } from '@/types';

import styles from './styles.module.scss';

import React, { useState } from 'react';



const PizzaPage = ({ pizzas }: PizzaProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlerOpenCart = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapperHeader}>
                <Header handlerOpenCart={handlerOpenCart} />
                <CartComponent isOpen={isOpen} />
            </div>
            <div className={styles.wrapper}>
                <SearchPanel />
                <PizzaAnim />
            </div>
            <ListCard pizzas={pizzas} />
        </div>
    )
}

export default PizzaPage