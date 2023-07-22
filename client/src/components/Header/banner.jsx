import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="mt-3">
      <Image src="/Banner2.jpg" width={900} height={200} alt="banner" />
    </div>
  );
}

export default Banner;
