import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import NavButton from "@/Components/NavButton";
import NavButtons from "@/utils/NavButtons";
import toSentenceCase from "@/utils/Functions";
import Text from "@/Components/Text";
import ResponsiveNavButton from "@/Components/ResponsiveNavButton";
import ResponsiveSubNavButton from "@/Components/ResponsiveSubNavButton";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    // PC states
    const [isOpen, setIsOpen] = useState(false);
    const [activeNav, setActiveNav] = useState("dashboard");
    const [currentNavLinks, setCurrentNavLinks] = useState([]);

    const [isMbOpen, setIsMbOpen] = useState(false);
    const [activeMbNav, setActiveMbNav] = useState("dashboard");
    const [currentMbNavLinks, setCurrentMbNavLinks] = useState([]);

    function handleLinkClick(navButton) {
        setActiveNav(navButton.name);
        setCurrentNavLinks(navButton.sections);
        if (activeNav === navButton.name) {
            isOpen ? setIsOpen(false) : setIsOpen(true);
        } else {
            setIsOpen(isOpen === false ? true : isOpen);
        }
    }

    function handleMbLinkClick(navButton) {
        setActiveMbNav(navButton.name);
        setCurrentMbNavLinks(navButton.sections);
        if (activeMbNav === navButton.name) {
            isMbOpen ? setIsMbOpen(false) : setIsMbOpen(true);
        } else {
            setIsMbOpen(isMbOpen === false ? true : isMbOpen);
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                            </div>

                            <div className="hidden relative space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={
                                        route().current("dashboard") &&
                                        activeNav === "dashboard"
                                    }
                                    onClick={() => {
                                        setActiveNav("dashboard");
                                        setIsOpen(false);
                                    }}
                                >
                                    Dashboard
                                </NavLink>
                                {NavButtons.map((navButton, index) => (
                                    <NavButton
                                        key={index}
                                        active={
                                            activeNav == navButton.name
                                                ? true
                                                : false
                                        }
                                        onClick={() =>
                                            handleLinkClick(navButton)
                                        }
                                    >
                                        {navButton.name}
                                    </NavButton>
                                ))}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            type="button"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                alt=""
                                            />
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Flyout menu */}
                {isOpen && (
                    <div className="absolute w-full h-fit p-10 shadow-lg bg-white dark:bg-gray-700 ">
                        <div
                            className="py-1 flex justify-evenly items-start"
                            role="menu"
                        >
                            {currentNavLinks.map((navLink, index) => (
                                <div key={index} className="flex flex-col">
                                    {/* NavLink is a section */}
                                    <Text className="font-bold text-md">
                                        {navLink.name}
                                    </Text>
                                    {navLink.items.map((item, index) => (
                                        <NavLink
                                            key={index}
                                            href={item.href}
                                            className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            role="menuitem"
                                        >
                                            {toSentenceCase(item.name)}
                                        </NavLink>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mobile menu */}
                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={
                                route().current("dashboard") &&
                                activeMbNav === "dashboard"
                            }
                            onClick={() => {
                                setActiveMbNav("dashboard");
                                setIsMbOpen(false);
                            }}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        {NavButtons.map((navButton, index) => (
                            <ResponsiveNavButton
                                key={index}
                                active={
                                    activeMbNav == navButton.name ? true : false
                                }
                                onClick={() => handleMbLinkClick(navButton)}
                            >
                                {navButton.name}
                            </ResponsiveNavButton>
                        ))}
                        {isMbOpen && (
                            <div className="flex flex-col">
                                <Text className="text-sm font-bold ml-3 my-3">
                                    Categories
                                </Text>
                                <div className="ml-6">
                                    {currentMbNavLinks.map((navLink, index) => (
                                        <ResponsiveSubNavButton
                                            key={index}
                                            active={
                                                activeMbNav == navLink.name
                                                    ? true
                                                    : false
                                            }
                                        >
                                            {navLink.name}
                                        </ResponsiveSubNavButton>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                {user.name}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="hidden bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="overflow-x-auto container mx-auto">
                {children}
            </main>
        </div>
    );
}
