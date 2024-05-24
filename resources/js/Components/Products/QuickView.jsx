import Text from "@/Components/Text";
import { defaultProduct } from "@/utils/Lists";

export default function QuickView({ product = defaultProduct, open, onClose }) {
    return (
        open && (
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-50">
                <div className="flex min-h-full justify-center items-center md:px-2 lg:px-4">
                    <div className="bg-slate-300 dark:bg-slate-800  py-6 px-4 w-3/4 h-3/4">
                        <div className="w-full rounded-md relative">
                            <button
                                type="button"
                                className="absolute right-0 top-[-10px] font-light text-5xl text-white hover:text-gray-500"
                                onClick={onClose}
                            >
                                <span className="sr-only">Close</span>
                                &times;
                            </button>
                            <div>
                                {/* <div className="bg-red-500 w-1/2 h-1/2">{product.name}</div> */}
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
                                            className="text-2xl font-bold sm:pr-12"
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
