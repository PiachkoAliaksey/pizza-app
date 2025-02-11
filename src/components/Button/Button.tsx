import React from 'react';
import styles from './styles.module.scss';
import { TButtonProps } from '@/types';


const Button = ({ className, onClick, children }: TButtonProps) => {
    return (
        <button className={`${className} ${styles.button}`} onClick={onClick}>{children}</button>
    )
}

export default Button;