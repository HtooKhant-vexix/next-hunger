import AddMenuCate from "@/components/AddMenuCate";
import Layout from "@/components/BackofficeLayout";
import React from "react";

const MenuCategory = () => {
  return (
    <Layout>
      <div>
        <AddMenuCate label="Add Menu Category" />
      </div>
    </Layout>
  );
};

export default MenuCategory;
