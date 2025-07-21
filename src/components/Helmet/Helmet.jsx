// components/HelmetComponent.jsx
import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      {children} 
    </>
  );
};

export default HelmetComponent;
