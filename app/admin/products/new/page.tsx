import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function CreateProductsPage() {
  return (
    <>
      <Heading>Productos Nuevos</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <GoBackButton />
      </div>

      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
