import React from "react";
import BigSaleCard from "./BigSaleCard";

type BigSaleItem = {
  productId: number;
  productName: string;
  productTitle: string;
  productPrice: number;
  productSale: number;
  productDelivery: string;
  productSeller: string;
  productPack: string;
  productCount: string;
  productWeight: string;
  productAllergy: string;
  productExpireDate: string;
  productInformation: string;
  productBuyType: string;
  productStock: number;
  productContent: string;
  supervisorId: number;
  productImg: string;
  status: number;
  count: number;
  salePrice: number;
  start: string;
  end: string;
  filterCode: number[];
  allergies: string[];
  hates: string[];
  isSpecial: boolean;
};

export default function BigSaleList(itemList: BigSaleItem[]) {
  const member_id: string = localStorage.getItem("id")!;
  return (
    <div>
      <div className="grid grid-cols-3">
        {itemList.map((item: BigSaleItem) => {
          return (
            <BigSaleCard
              key={item.productId}
              name={item.productName}
              image={item.productImg}
              id={item.productId}
              title={item.productTitle}
              price={item.productPrice}
              status={item.status}
              sale={item.salePrice}
              start={item.start}
              end={item.end}
              filterCode={!item.filterCode ? [] : item.filterCode}
              allergies={item.allergies}
              hates={item.hates}
              isSpecial={item.isSpecial}
            />
          );
        })}
      </div>
    </div>
  );
}
