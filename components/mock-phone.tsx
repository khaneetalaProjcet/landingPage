import Image from "next/image";

import MockPhoneImage from "@/assets/images/mock.png";
import MockLeftImage from "@/assets/images/mock-left.png";

function MockPhone() {
  return (
    <div className="relative">
      <Image
        alt="mock phone"
        height={200}
        src={MockPhoneImage}
        width={200}
        loading="lazy"
      />
      <Image
        alt="mock phone"
        className="absolute left-20 top-20"
        height={200}
        src={MockLeftImage}
        width={200}
        loading="lazy"
      />
    </div>
  );
}

export default MockPhone;
