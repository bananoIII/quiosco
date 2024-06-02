import ProductTable from "@/components/products/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * 10;

  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });
  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  /*

*/

  const page = +searchParams.page || 1;
  const pageSize = 10;

  const products = await getProducts(page, pageSize);

  return (
    <>
      <Heading>Administrar Productos</Heading>
      <ProductTable products={products} />
    </>
  );
}
