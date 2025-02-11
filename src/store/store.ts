import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TPizza = {
    id: number;
    name: string;
    price: number;
    image: string;
};


type CartItem = TPizza & { quantity: number };

export type Store = {
    cart: CartItem[];
    pizzas: TPizza[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    addToCart: (pizza: TPizza) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};

export const useStorePizza = create<Store>()(persist((set) => ({
    cart: [],
    pizzas: [],
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
    addToCart: (pizza) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === pizza.id);
        if (existingItem) {
            return {
                cart: state.cart.map((item) => {
                    return item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
                })
            }
        }
        return { cart: [...state.cart, { ...pizza, quantity: 1 }] }
    }),
    removeFromCart: (id) => set((state) => {
        const currentItem = state.cart.find((item) => item.id === id)
        if (currentItem && currentItem?.quantity > 1) {
            return {
                cart: state.cart.map((item) => {
                    return item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                })
            }
        }
        return ({ cart: state.cart.filter((item) => item.id !== id) })
    }),
    clearCart: () => set({ cart: [] })
}),
    {
        name: 'pizza-storage', 
       
    }
))