import Text from "@/Components/Text";

export default function LogoClouds() {
    return (
        <div className="bg-gray-50 text-black/50 dark:bg-gray-900 dark:text-white/50 pb-10 sm:pb-14">
            <div className="mx-auto max-w-7xl pb-10 sm:pb-14">
                <Text
                    variant="h2"
                    className="text-center text-lg font-semibold leading-8 text-gray-900"
                >
                    Trusted by the world’s most innovative teams
                </Text>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:filter dark:invert"
                        src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:filter dark:invert"
                        src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:filter dark:invert"
                        src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:filter dark:invert"
                        src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:filter dark:invert"
                        src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                        alt="Statamic"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </div>
    );
}
