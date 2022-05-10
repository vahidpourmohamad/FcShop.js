import React, { useEffect } from "react";
import "./PopularProductListCom.css";
import { ProductsDummy } from "./ProductlistDummy";
import ProductCardCmp from "../ProductCardComponent/ProductCardCmp";
import { useQuery, gql } from "@apollo/client";
import { getProductsGQL } from "../../GraphQl/Queries";

export default function PopularProductListCom() {
  const { error, loading, data } = useQuery(getProductsGQL);
  useEffect(() => {
    if (!loading && !error) {
      console.log(data);
      data.getProducts.map((item, id) => {
        console.log(item);
      });
    }
    return () => {
      // console.log(data);
      // console.log(getProducts[0]);
    };
  }, [data]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="PopularProductListComContainer">
      <div className="PopularProductListComParent">
        <div className="PopularProductListComHeading">
          <div className="PopularProductListComHeadingText">
            پر طرفدار ترین ها
          </div>
          <div className="Line"></div>
        </div>
        <div className="Productlist">
          {data.getProducts.map((Product, Id) => (
            <ProductCardCmp
              Id={Product.Id}
              Pname={Product.name}
              Price={Product.price}
              Discount={50}
              imgone={Product.images[0]}
              imgtwo={Product.images[1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
