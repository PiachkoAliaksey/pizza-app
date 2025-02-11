import imagePizza from '../../public/image/imagePizza.jpg';
import { TPizza } from '@/store/store';

export async function getPizzas() {
    const response = new Promise((resolve) => {
      setTimeout(() => {
        const pizzas = [
          { id: 1, name: 'Margherita', price: 8.99, image: imagePizza.src },
          { id: 2, name: 'Pepperoni', price: 10.99, image: imagePizza.src },
          { id: 3, name: 'Vegetarian', price: 9.99, image: imagePizza.src },
        ];
  
        resolve(pizzas)
      }, 1000)
    }).then((res) => res)
  
    return response as Promise<TPizza[]>;
  };