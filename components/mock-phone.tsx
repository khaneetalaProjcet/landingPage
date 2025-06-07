import Image from "next/image";

import MockPhoneImage from "@/assets/images/mockup-1.png";
import MockLeftImage from "@/assets/images/mockup-2.png";

function MockPhone() {
  return (
    <div className="relative order-1 lg:order-2 overflow-hidden">
      <Image
        alt="mock phone"
        height={800}
        src={MockPhoneImage}
        width={800}
        loading="lazy"
        className="lg:w-[800px] lg:h-[300px] relative lg:-left-10 -left-24 "
      />
      <Image
        alt="mock phone"
        className="absolute left-12 lg:left-20 top-5 lg:w-[800px] lg:h-[300px]"
        height={800}
        src={MockLeftImage}
        width={800}
        loading="lazy"
      />
    </div>
  );
}

export default MockPhone;
