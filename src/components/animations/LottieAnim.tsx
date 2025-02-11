'use client'

import React from 'react';
import Lottie from 'lottie-react';
import PizzaAnimation from '../../../public/animation/pizzaAnim.json';
import styles from './styles.module.scss'

const PizzaAnim = () => {
    return (
        <Lottie className={styles.animation} animationData={PizzaAnimation} loop={true} />
    )
}

export default PizzaAnim;