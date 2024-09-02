import Location from "@/components/AddLocation";
import Layout from "@/components/BackofficeLayout";
import React from "react";

const index = () => {
  return (
    <Layout>
      <div>
        <Location label="Location" />
      </div>
    </Layout>
  );
};

export default index;
