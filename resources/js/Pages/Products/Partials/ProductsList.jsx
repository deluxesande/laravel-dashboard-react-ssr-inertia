import Text from "@/Components/Text";
import { products, defaultProduct } from "@/utils/Lists";
import { useState } from "react";
import QuickView from "@/Pages/Products/Partials/QuickView";

export default function ProductsList() {
    const [open, setOpen] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(defaultProduct);

    return (
        <div className="w-full px-4 py-6 sm:px-6 sm:py-12 lg:px-8">
            <Text variant="h2" className="text-2xl font-bold tracking-tight">
                Customers also purchased
            </Text>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group relative bg-slate-300 dark:bg-slate-800 rounded-md p-4"
                        onClick={() => {
                            setOpen(true);
                            setCurrentProduct(product);
                        }}
                    >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-slate-700 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <Text
                                    variant="h3"
                                    className="text-sm text-gray-700"
                                >
                                    <a href={product.href}>
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                        />
                                        {product.name}
                                    </a>
                                </Text>
                                <Text className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                </Text>
                            </div>
                            <Text className="text-sm font-medium text-gray-900">
                                {product.price}
                            </Text>
                        </div>
                    </div>
                ))}
            </div>

            <QuickView
                product={currentProduct}
                open={open}
                onClose={() => setOpen(false)}
            />
        </div>
    );
}
