import { Star } from "lucide-react";

function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function displayStars(rating) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<Star key={i} fill="currentColor" stroke="none" />);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(
                <svg
                    key={i}
                    width="24"
                    height="24"
                    fill="none"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-star-half"
                >
                    <defs>
                        <linearGradient
                            id="half-gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                        >
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "currentColor",
                                    stopOpacity: 1,
                                }}
                            />
                            <stop
                                offset="50%"
                                style={{
                                    stopColor: "currentColor",
                                    stopOpacity: 1,
                                }}
                            />
                            <stop
                                offset="50%"
                                style={{
                                    stopColor: "rgb(219, 234, 254)",
                                    stopOpacity: 1,
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "rgb(219, 234, 254)",
                                    stopOpacity: 1,
                                }}
                            />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#half-gradient)"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.73L18.18 21 12 17.27 5.82 21 7 14 2 9.27l6.91-1.01L12 2z"
                    ></path>
                </svg>
            );
        } else {
            stars.push(<Star key={i} fill="rgb(219 234 254)" stroke="none" />);
        }
    }
    return stars;
}

export default toSentenceCase;
export { displayStars, toSentenceCase };
