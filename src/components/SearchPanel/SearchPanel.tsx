'use client'

import React from 'react';
import { useStorePizza } from '@/store/store';
import styles from './styles.module.scss';
import { useShallow } from 'zustand/shallow';


const SearchPanel = () => {
    const searchQuery = useStorePizza(useShallow((state) => state.searchQuery));
    const setSearchQuery = useStorePizza(useShallow((state) => state.setSearchQuery));

    return (
        <div className={styles.searchPanel}>
            <input
                type="text"
                placeholder="Search pizzas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SearchPanel