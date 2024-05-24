import { callOuts } from "@/utils/Lists";
import Text from "@/Components/Text";

export default function Collections() {
    return (
        <div className="w-full px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <Text variant="h2" className="text-2xl font-bold">
                Collections
            </Text>

            <div className="mt-6 space-y-12 gap-x-6 gap-y-10 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {callOuts.map((callout) => (
                    <div key={callout.name} className="group relative">
                        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                            <img
                                src={callout.imageSrc}
                                alt={callout.imageAlt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <Text
                            variant="h3"
                            className="mt-6 text-sm text-gray-500"
                        >
                            <a href={callout.href}>
                                <span className="absolute inset-0" />
                                {callout.name}
                            </a>
                        </Text>
                        <Text className="text-base font-semibold">
                            {callout.description}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
}
