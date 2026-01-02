"use client";

import { useEffect } from "react";
import { daltechutility } from "@/utility";
import GyldanHeader from "./GyldanHeader";
import GyldanFooter from "./GyldanFooter";

const GyldanLayout = ({ children, brandName = "GYLDAN", brandLogo = null }) => {
  useEffect(() => {
    daltechutility.scrollAnimation();
  }, []);

  return (
    <div style={{ overflowX: 'clip', width: '100%', maxWidth: '100%' }}>
      <GyldanHeader brandName={brandName} brandLogo={brandLogo} />
      <main>{children}</main>
      <GyldanFooter />
    </div>
  );
};

export default GyldanLayout;
