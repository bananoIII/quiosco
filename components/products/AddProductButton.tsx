"use client";

import { Product } from "@prisma/client";
import { useStore } from "@/src/store";

type AddProductButton = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButton) {
  const addOrder = useStore((state) => state.addOrder);

  return (
    <button
      type="button"
      className=" bg-purple-500 hover:bg-purple-800 text-gray-50 hover:text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
      onClick={() => addOrder(product)}
    >
      Agregar
    </button>
  );
}
