// components/HelmetComponent.jsx
import React from "react";
import { Helmet } from "react-helmet";

const Helmet = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | My Website` : "My Website"}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default Helmet;
