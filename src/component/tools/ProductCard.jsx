import { FaCheck } from "react-icons/fa";

const ProductCard = ({ toolData }) => {
    // console.log(cardPromise)
    // console.log(toolData);
    const { badge, badgeColor, icon, title, description, price, priceType, features } = toolData

    return (
        <div className="card bg-base-100 shadow-sm relative">
            <div className="card-body">
                <div>
                    <span className="badge p-2  badge-xs badge-warning absolute top-1 right-1 text-white" style={{ backgroundColor: [badgeColor] }}>{badge}</span>
                    <img src={icon} alt={title} width={"30px"} height={"30px"} className="rounded-4xl" />
                </div>

                <div className="mt-2">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-500 mt-2">{description}</p>
                    <h2 className="mt-2"> <span className="text-2xl font-bold">${price}</span>/{priceType}</h2>
                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-purple-600"><FaCheck className="text-green-500" /></span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <button className="btn w-full rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;