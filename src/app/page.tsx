
import { notFound } from 'next/navigation';
import PizzaPage from "@/components/pages/PizzaPage";
import { getPizzas } from '@/api/getPizzas';




export default async function Home() {

  const pizzas = await getPizzas();

  if (!pizzas) {
    return notFound()
  }

  return (
    <PizzaPage pizzas={pizzas} />
  );
}



