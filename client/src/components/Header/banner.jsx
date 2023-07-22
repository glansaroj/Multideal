import React from "react";
import Image from "next/image";

function banner() {
  return (
    <div className="mt-3">
      <Image src="/banner1.jpg" width={700} height={200} alt="banner" />
    </div>
  );
}

export default banner;
