import { useState } from "react";
import { Switch } from "@headlessui/react";
import Text from "@/Components/Text";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
        agreed: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-2xl text-center">
                <Text
                    variant="h2"
                    className="text-3xl font-bold tracking-tight sm:text-4xl"
                >
                    Contact sales
                </Text>
                <Text className="mt-2 text-lg leading-8 text-gray-600">
                    Aute magna irure deserunt veniam aliqua magna enim
                    voluptate.
                </Text>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 max-w-4xl mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <Text
                            variant="label"
                            htmlFor="firstName"
                            className="block text-gray-700 text-xs font-bold mb-2"
                        >
                            First Name
                        </Text>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <Text
                            variant="label"
                            htmlFor="lastName"
                            className="block text-gray-700 text-xs font-bold mb-2"
                        >
                            Last Name
                        </Text>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <Text
                        variant="label"
                        htmlFor="company"
                        className="block text-gray-700 text-xs font-bold mb-2"
                    >
                        Company
                    </Text>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="mb-6">
                    <Text
                        variant="label"
                        htmlFor="email"
                        className="block text-gray-700 text-xs font-bold mb-2"
                    >
                        Email
                    </Text>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        required
                    />
                </div>
                <div className="mb-6">
                    <Text
                        variant="label"
                        htmlFor="phoneNumber"
                        className="block text-gray-700 text-xs font-bold mb-2"
                    >
                        Phone Number
                    </Text>
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
                <div className="mb-6">
                    <Text
                        variant="label"
                        htmlFor="message"
                        className="block text-gray-700 text-xs font-bold mb-2"
                    >
                        Message
                    </Text>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    ></textarea>
                </div>
                <div className="flex items-center mb-6">
                    <div className="flex items-center">
                        <Switch
                            checked={formData.agreed}
                            onChange={() =>
                                setFormData({
                                    ...formData,
                                    agreed: !formData.agreed,
                                })
                            }
                            className={`${
                                formData.agreed
                                    ? "bg-indigo-600"
                                    : "bg-gray-200"
                            } flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            <span
                                aria-hidden="true"
                                className={`${
                                    formData.agreed
                                        ? "translate-x-3.5"
                                        : "translate-x-0"
                                } h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                        <Text
                            variant="span"
                            className="ml-3 text-sm font-medium text-gray-700"
                        >
                            Agree to policies
                        </Text>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
