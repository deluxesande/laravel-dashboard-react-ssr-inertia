import Text from "@/Components/Text";

export default function HeroSection() {
    return (
        <div className="relative isolate px-4">
            <div className="mx-auto max-w-2xl py-24">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <Text>
                            Announcing our next round of funding.
                            <a
                                href="#"
                                className="font-semibold text-blue-600 ml-2"
                            >
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </Text>
                    </div>
                </div>
                <div className="text-center">
                    <Text
                        variant="h1"
                        className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                    >
                        Data to enrich your online business
                    </Text>
                    <Text className="mt-6 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                        irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat fugiat aliqua.
                    </Text>
                    <div className="mt-10 flex flex-wrap items-center justify-evenly gap-x-6 gap-y-6">
                        <a
                            href={route("products")}
                            className="rounded-md bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Shop Now
                        </a>
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                        >
                            Learn more <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
