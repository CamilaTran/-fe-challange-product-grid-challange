import Product from "@/types/products";
import Image from "next/image";

interface ProductCardProps {
    info: Product
}

const ProductCard = ({ info }: ProductCardProps) => {
    const firstImage = info?.images?.[0]

    return (
        <div className="flex flex-col gap-4">
            <div className="relative h-75 w-auto rounded-lg">
                <Image
                    src={firstImage?.image_url ?? ""}
                    alt="product-image"
                    className="object-cover rounded-lg"
                    fill
                />
            </div>

            <div className="gap-3 flex flex-col">
                <div>
                    <span className="capitalize text-neutral-600 text-xs">{firstImage?.color}</span>
                    <h3 className="text-neutral-900 text-lg font-medium">{info.name}</h3>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-lg text-neutral-500">${info.priceRange.lowest}</span>
                    {info.priceRange.highest > info.priceRange.lowest && <span className="text-sm line-through text-neutral-600">${info.priceRange.highest}</span>}
                </div>
            <div className="flex mb-[30px]">
                    {/* color list  */}
                    {info.colors.map((color: string) => (
                        <div key={color} className="p-1">
                            <div
                                className={`rounded-full w-4 h-4 ${color === 'white' ? 'border border-neutral-300' : ''}`}
                                style={{ background: color }}
                            />
                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}

export default ProductCard