import React,{useEffect} from "react";
import "./PopularProductListCom.css";
import { ProductsDummy } from "./ProductlistDummy";
import ProductCardCmp from "../ProductCardComponent/ProductCardCmp";
import { useQuery, gql } from "@apollo/client";
import { getProductsGQL } from "../../GraphQl/Queries";


export default function PopularProductListCom() {
  const { error, loading, data } = useQuery(getProductsGQL);
  useEffect(() => {
    
    console.log(data);
    return () => {
      console.log("finish");
    };
  }, [data]);
  
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
          {ProductsDummy.map((Product, Id) => (
            <ProductCardCmp
              Id={Product.Id}
              Pname={Product.Pname}
              Price={Product.Price}
              Discount={Product.Discount}
              imgone={Product.imgone}
              imgtwo={Product.imgtwo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
