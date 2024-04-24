import React from "react";
import { useNavigate } from "react-router-dom";
// import ScrollToTop from "./ScrollToTop";

const ProductCard = ({ product }) => {
  const { title, category, thumbnail, price, id } = product;
  const navigate = useNavigate();
  return (
    <>
      <div
  className="relative cursor-pointer p-2 border after:w-0  hover:after:w-full after:absolute after:top-0 after:left-0 after:bg-main after:h-[3px] after:content-'' hover:shadow-2xl after:transition-all"

        onClick={() => navigate(`${id}`, { state: product })}
      >
        <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
          <img
            src={thumbnail}
            alt={title}
            title={"title"}
            className="h-[200px] w-full object-fit lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div className="flex-1">
            <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-1">
              {category}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">{price} $</p>
        </div>
      </div>
      {/* <ScrollToTop /> */}
    </>
  );
};

export default ProductCard;
