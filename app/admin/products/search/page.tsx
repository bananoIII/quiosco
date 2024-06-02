import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import ProductSearchform from "@/components/products/ProductSearchForm";

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search);

  return (
    <>
      <Heading>Resultados de busqueda: {searchParams.search}</Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <Link
          href={`/admin/products/new`}
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
        >
          Crear Producto
        </Link>
        <ProductSearchform />
      </div>

      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-lg">No hay</p>
      )}
    </>
  );
}
