const products = [
    {
        id: 1,
        name: "Basic Tee 6-Pack",
        price: "$192",
        rating: 3.9,
        reviewCount: 117,
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
        imageAlt:
            "Two each of gray, white, and black shirts arranged on table.",
        colors: [
            {
                name: "white",
            },
            {
                name: "gray",
            },
            {
                name: "black",
            },
        ],
        sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
        ],
    },

    {
        id: 2,
        name: "Basic Tee 6-Pack",
        price: "$192",
        rating: 3.9,
        reviewCount: 117,
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
        imageAlt:
            "Two each of gray, white, and black shirts arranged on table.",
        colors: [
            {
                name: "white",
            },
            {
                name: "gray",
            },
            {
                name: "black",
            },
        ],
        sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
        ],
    },

    {
        id: 3,
        name: "Basic Tee 6-Pack",
        price: "$192",
        rating: 3.9,
        reviewCount: 117,
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
        imageAlt:
            "Two each of gray, white, and black shirts arranged on table.",
        colors: [
            {
                name: "white",
            },
            {
                name: "gray",
            },
            {
                name: "black",
            },
        ],
        sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
        ],
    },

    {
        id: 4,
        name: "Basic Tee 6-Pack",
        price: "$192",
        rating: 3.9,
        reviewCount: 117,
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
        imageAlt:
            "Two each of gray, white, and black shirts arranged on table.",
        colors: [
            {
                name: "white",
            },
            {
                name: "gray",
            },
            {
                name: "black",
            },
        ],
        sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
        ],
    },

    {
        id: 5,
        name: "Basic Tee 6-Pack",
        price: "$192",
        rating: 3.9,
        reviewCount: 117,
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
        imageAlt:
            "Two each of gray, white, and black shirts arranged on table.",
        colors: [
            {
                name: "white",
            },
            {
                name: "gray",
            },
            {
                name: "black",
            },
        ],
        sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
        ],
    },

    {
        id: 6,
        name: "Basic Tee 6-Pack",
        price: "$192",
        rating: 3.9,
        reviewCount: 117,
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
        imageAlt:
            "Two each of gray, white, and black shirts arranged on table.",
        colors: [
            {
                name: "white",
            },
            {
                name: "gray",
            },
            {
                name: "black",
            },
        ],
        sizes: [
            { name: "XXS", inStock: true },
            { name: "XS", inStock: true },
            { name: "S", inStock: true },
            { name: "M", inStock: true },
            { name: "L", inStock: true },
            { name: "XL", inStock: true },
            { name: "XXL", inStock: true },
            { name: "XXXL", inStock: false },
        ],
    },

    // More products...
];

const defaultProduct = {
    id: null,
    name: "",
    price: "",
    rating: null,
    reviewCount: null,
    href: "",
    imageSrc: "",
    imageAlt: "",
    colors: [
        {
            name: "",
        },
    ],
    sizes: [
        {
            name: "",
            inStock: false,
        },
    ],
};

const callOuts = [
    {
        name: "Desk and Office",
        description: "Work from home accessories",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt:
            "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
        href: "#",
    },
    {
        name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt:
            "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
        href: "#",
    },
    {
        name: "Travel",
        description: "Daily commute essentials",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt:
            "Collection of four insulated travel bottles on wooden shelf.",
        href: "#",
    },
];

export default products;
export { callOuts, defaultProduct, products };
