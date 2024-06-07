import {
    ShoppingCartIcon,
    CreditCardIcon,
    MapIcon,
    UserIcon,
    LockClosedIcon,
    CalendarIcon,
} from "@heroicons/react/24/outline";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Text from "@/Components/Text";
import React, { useState, useEffect, useRef } from "react";
import VisaLogo from "../../assets/visa-logo.png";
import MastercardLogo from "../../assets/mastercard-logo.png";
import { Head } from "@inertiajs/react";

const products = [
    {
        id: 1,
        name: "Throwback Hip Bag",
        href: "#",
        color: "Salmon",
        price: "$90.00",
        quantity: 1,
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
        imageAlt:
            "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
];

function CheckoutPage({ auth }) {
    const [cardType, setCardType] = useState("visa");
    const cardInputRef = useRef(null);

    useEffect(() => {
        const detectCardType = (number) => {
            if (number) {
                if (/^4[0-9]/.test(number)) return "visa";
                if (/^5[1-5]/.test(number)) return "mastercard";
            }
        };

        const handleInput = () => {
            const type = detectCardType(cardInputRef.current.value);
            if (type) setCardType(type);
        };

        const cardInput = cardInputRef.current;
        cardInput.addEventListener("input", handleInput);

        return () => cardInput.removeEventListener("input", handleInput);
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Checkout
                </h2>
            }
        >
            <Head title="Checkout" />

            <div className="container mx-auto p-4">
                <div className="flex flex-wrap lg:flex-nowrap gap-4 pt-4 lg:pt-10">
                    <div className="w-full lg:w-2/3 bg-slate-300 dark:bg-slate-800 p-4 shadow">
                        <Text
                            variant="h2"
                            className="text-xl font-semibold mb-2"
                        >
                            Your Cart
                        </Text>
                        {/* Example Item */}
                        <div className="mt-8">
                            <div className="flow-root">
                                <ul
                                    role="list"
                                    className="-my-6 divide-y divide-gray-200"
                                >
                                    {products.map((product) => (
                                        <li
                                            key={product.id}
                                            className="flex py-6"
                                        >
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex flex-col justify-between text-base font-medium">
                                                        <Text variant="h3">
                                                            <a
                                                                href={
                                                                    product.href
                                                                }
                                                            >
                                                                {product.name}
                                                            </a>
                                                        </Text>
                                                        <div className="flex flex-1 mt-4 flex-row items-center justify-between">
                                                            <Text className="text-sm">
                                                                {product.color}
                                                            </Text>
                                                            <Text>
                                                                {product.price}
                                                            </Text>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <Text className="text-gray-500">
                                                        Qty {product.quantity}
                                                    </Text>

                                                    <div className="flex">
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Repeat for other items */}
                    </div>
                    <div className="w-full lg:w-1/3 bg-slate-300 dark:bg-slate-800 p-4 shadow">
                        <Text
                            variant="h2"
                            className="text-xl font-semibold mb-2"
                        >
                            Billing Details
                        </Text>
                        <form className="mt-8 max-w-4xl mx-auto">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="flex w-full flex-wrap lg:flex-nowrap">
                                    <div className="w-full px-3 mb-6">
                                        <div className="flex items-center rounded py-3 px-4 gap-4">
                                            <Text
                                                variant="label"
                                                className="block text-md font-bold"
                                            >
                                                Name
                                            </Text>
                                            <UserIcon className="h-5 w-5 mr-2 text-gray-900 dark:text-gray-100" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        />
                                    </div>
                                    <div className="w-full px-3 mb-6">
                                        <div className="flex items-center rounded py-3 px-4 gap-4">
                                            <Text
                                                variant="label"
                                                className="block text-md font-bold"
                                            >
                                                Address
                                            </Text>
                                            <MapIcon className="h-5 w-5 mr-2 text-gray-900 dark:text-gray-100" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="123 Main St"
                                            className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 mb-6">
                                    <div className="flex items-center rounded py-3 px-4 gap-4">
                                        <Text
                                            variant="label"
                                            className="block text-md font-bold"
                                        >
                                            Credit Card
                                        </Text>
                                        <CreditCardIcon className="h-5 w-5 mr-2 text-gray-900 dark:text-gray-100" />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            ref={cardInputRef}
                                            id="card-input"
                                            type="number"
                                            placeholder="•••• •••• •••• 1234"
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        />
                                        {cardType === "visa" && (
                                            <img
                                                src={VisaLogo}
                                                alt="Visa"
                                                className="h-6 ml-4"
                                            />
                                        )}
                                        {cardType === "mastercard" && (
                                            <img
                                                src={MastercardLogo}
                                                alt="Mastercard"
                                                className="h-12 ml-[22px]"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="flex w-full flex-wrap lg:flex-nowrap">
                                    <div className="w-full px-3 mb-6">
                                        <div className="flex items-center rounded py-3 px-4 gap-4">
                                            <Text
                                                variant="label"
                                                className="block text-md font-bold"
                                            >
                                                CCV
                                            </Text>
                                            <LockClosedIcon className="h-5 w-5 mr-2 text-gray-900 dark:text-gray-100" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        />
                                    </div>
                                    <div className="w-full px-3 mb-6">
                                        <div className="flex items-center rounded py-3 px-4 gap-4">
                                            <Text
                                                variant="label"
                                                className="block text-md font-bold"
                                            >
                                                Expiry Date
                                            </Text>
                                            <CalendarIcon className="h-5 w-5 mr-2 text-gray-900 dark:text-gray-100" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Complete Purchase
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default CheckoutPage;
