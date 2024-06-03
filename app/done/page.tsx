"use client";
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWhitProducts } from "@/src/types";
import LatestItem from "@/components/order/LatestItem";

export default function DonePage() {
  const url = "/done/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  const { data, error, isLoading } = useSWR<OrderWhitProducts[]>(url, fetcher, {
    refreshInterval: 5000,
    revalidateOnFocus: false,
  });
  if (isLoading) return <p>cargando...</p>;
  if (data)
    return (
      <>
        <h1 className="text-center mt-20 text-6xl font-black">
          Ordenes Listas
        </h1>

        <Logo />

        {data.length ? (
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
            {data.map((order) => (
              <LatestItem key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className=" text-center my-10">No hay ordenes listas</p>
        )}
      </>
    );
}
