export default function Text({ variant = 'p', className = '', children, ...props }) {
    const Component = variant;

    return (
        <Component
            {...props}
            className={"text-gray-900 dark:text-gray-100 " + className}
        >
            {children}
        </Component>
    );
}