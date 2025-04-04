"use client"
import ProductCard from "@/components/card";
import { productsAPI } from "@/services/products";
import Product from "@/types/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await productsAPI.getProductList();
      setData(res)
    }

    fetchData();

  }, [])

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB] rounded-md shadow-sm p-4">
      <div className="rounded-lg bg-white">
        <div className="lg:max-w-[1216px] sm:max-w-[704px] !mx-auto lg:!py-24 sm:!py-16 !py-12 !px-4">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-3xl">Latest Arrivals</h3>
              <button className="border border-[0.5px] border-neutral-200 rounded-sm py-[10px] px-[18px] shadow font-medium">View all</button>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 justify-center">
              {data?.map((item: Product) => <ProductCard info={item} key={item.product_id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
