export default function Text({ className = '', disabled, children, ...props }) {
    return (
        <p
            {...props}
            className={"text-gray-900 dark:text-gray-100 " + className}
        >
            {children}
        </p>
    );
}
