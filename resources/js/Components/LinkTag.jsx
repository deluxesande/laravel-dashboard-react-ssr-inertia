import { Link } from '@inertiajs/react';


export default function LinkTag({ className = '', disabled, children, ...props }) {
    return (
        <Link
            {...props}
            className={"text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 "
                + className }
        >
            {children}
        </Link>
    );
}
