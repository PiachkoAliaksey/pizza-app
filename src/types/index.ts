import { ReactNode } from "react";
import { TPizza } from "@/store/store";

export type TButtonProps = {
    className?: string,
    onClick: () => void,
    children: ReactNode,
}

export type PizzaProps = {
    pizzas: TPizza[];
};