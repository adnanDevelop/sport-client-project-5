import React from "react";
import StoreHeader from "../element/StoreSection/StoreHeader";
import KitSection from "../element/StoreSection/KitSection";
import Product from "../element/StoreSection/Product";
import Navbar from "../NavFooter/Navbar";

const Store = () => {
  return (
    <>
      <Navbar />
      <StoreHeader />
      <KitSection />
      <Product />
    </>
  );
};

export default Store;
