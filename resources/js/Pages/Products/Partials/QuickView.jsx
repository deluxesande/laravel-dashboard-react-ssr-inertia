import Text from "@/Components/Text";
import { defaultProduct } from "@/utils/Lists";
import { X } from "lucide-react";
import { ringColorMap, colorMap } from "@/utils/ProductColors";
import { displayStars } from "@/utils/Functions";
import { useState } from "react";

export default function QuickView({ product = defaultProduct, open, onClose }) {
    const colorClass = (color) => colorMap[color.name.toLowerCase()];
    const ringColorClass = (color) => ringColorMap[color.name.toLowerCase()];

    const [color, setColor] = useState(product.colors[0]);
    const [size, setSize] = useState(product.sizes[0]);

    const handleAddToCart = () => {
        // TODO - handle add to cart
        console.log(color, size);
    };

    return (
        open && (
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50">
                <div className="flex min-h-full justify-center items-center md:px-2 lg:px-4">
                    <div className="bg-slate-300 dark:bg-slate-800  py-6 px-4 w-full lg:w-3/4 rounded-md">
                        <div className="relative w-full items-center overflow-hidden px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                            <button
                                type="button"
                                className="absolute right-2 top-0 lg:right-6 lg:top-8 text-white hover:text-gray-500"
                                onClick={onClose}
                            >
                                <span className="sr-only">Close</span>
                                <X size={32} />
                            </button>
                            <div>
                                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-700 sm:col-span-4 lg:col-span-5">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    <div className="sm:col-span-8 lg:col-span-7">
                                        <Text
                                            variant="h2"
                                            className="text-3xl font-bold sm:pr-12"
                                        >
                                            {product.name}
                                        </Text>

                                        <section
                                            aria-labelledby="information-heading"
                                            className="mt-2"
                                        >
                                            <Text
                                                variant="h3"
                                                id="information-heading"
                                                className="sr-only"
                                            >
                                                Product information
                                            </Text>

                                            {/* Prices */}
                                            <Text className="text-4xl my-6">
                                                $192
                                            </Text>

                                            {/* Reviews */}
                                            <div className="mt-8">
                                                <h4 className="sr-only">
                                                    Reviews
                                                </h4>
                                                <div className="flex items-center text-orange-600 dark:text-blue-600">
                                                    <div className="flex items-center">
                                                        {displayStars(
                                                            product.rating
                                                        )}
                                                    </div>
                                                    <p className="sr-only">
                                                        {product.rating} out of
                                                        5 stars
                                                    </p>
                                                    <a
                                                        href="#"
                                                        className="ml-3 text-sm font-medium text-orange-600 hover:text-orange-500 dark:text-blue-600 dark:hover:text-blue-500"
                                                    >
                                                        {product.reviewCount}{" "}
                                                        reviews
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Colors */}
                                            <div className="mt-6">
                                                <Text
                                                    variant="h4"
                                                    className="text-sm font-medium text-gray-900"
                                                >
                                                    Colors
                                                </Text>
                                                <div className="flex space-x-3">
                                                    {product.colors.map(
                                                        (color, index) => (
                                                            <div
                                                                key={index}
                                                                className={`w-10 h-10 mt-4 rounded-full cursor-pointer ${colorClass(
                                                                    color
                                                                )} focus:ring-2 ${ringColorClass(
                                                                    color
                                                                )}`}
                                                                tabIndex={0}
                                                                onClick={() =>
                                                                    setColor(
                                                                        color
                                                                    )
                                                                }
                                                            ></div>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            {/* Sizes */}
                                            <div
                                                className="mt-12"
                                                aria-label="Choose a size"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <Text className="text-sm font-medium text-gray-900">
                                                        Size
                                                    </Text>
                                                    <a
                                                        href="#"
                                                        className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                                    >
                                                        Size guide
                                                    </a>
                                                </div>

                                                <div className="mt-4 grid grid-cols-4 gap-4">
                                                    {product.sizes.map(
                                                        (size, index) => (
                                                            <button
                                                                key={index}
                                                                className={`relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase ${
                                                                    size.inStock
                                                                        ? "cursor-pointer bg-white text-gray-900 shadow-sm hover:bg-gray-50"
                                                                        : "cursor-not-allowed bg-gray-50 text-gray-200"
                                                                } focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-blue-500 sm:flex-1`}
                                                                disabled={
                                                                    !size.inStock
                                                                }
                                                                onClick={() =>
                                                                    setSize(
                                                                        size
                                                                    )
                                                                }
                                                            >
                                                                {size.name}
                                                            </button>
                                                        )
                                                    )}
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="mt-16 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 dark:bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 dark:hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-500"
                                                    onClick={handleAddToCart}
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}
