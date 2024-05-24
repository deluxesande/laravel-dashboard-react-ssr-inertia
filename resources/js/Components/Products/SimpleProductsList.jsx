import { products } from "@/utils/Lists";
import Text from "@/Components/Text";

export default function SimpleProductsList({ user }) {
    return (
        <div className="w-full px-4 py-6 sm:px-6 sm:py-12 lg:mb-16 lg:py-16 lg:px-8">
            <span className="sr-only">Products</span>
            <Text
                variant="h2"
                className="text-2xl font-bold tracking-tight mb-8"
            >
                Products
            </Text>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <a
                        key={product.id}
                        href={product.href}
                        className="group bg-slate-300 dark:bg-slate-800 rounded-md p-4"
                    >
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <Text
                            variant="h3"
                            className="mt-4 text-sm text-gray-700"
                        >
                            {product.name}
                        </Text>
                        <Text className="mt-1 text-lg font-medium text-gray-900">
                            {user ? product.price : null}
                        </Text>
                    </a>
                ))}
            </div>
        </div>
    );
}
