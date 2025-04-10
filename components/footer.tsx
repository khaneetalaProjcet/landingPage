import Image from "next/image";
import { Icon } from "@iconify/react";

import Logo from "@/assets/images/logo.png";
import { Divider } from "@heroui/divider";

function Footer() {
  const enamadCode =
    `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=573014&Code=DyaoyPn05OUCUbs4nNzeChfxBr5GE4q6'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=573014&Code=DyaoyPn05OUCUbs4nNzeChfxBr5GE4q6' alt='' style='cursor:pointer' code='DyaoyPn05OUCUbs4nNzeChfxBr5GE4q6'></a>`;

  return (
    <footer className="bg-primary text-white p-10 mt-32">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full  ">
        <div className="flex-1">
          <Image alt="Logo" height={100} src={Logo} width={100} />
        </div>
        <div className="flex-1">
          <div className="my-2 flex gap-2 text-sm font-light items-center">
            <Icon icon="solar:phone-bold" width="24" height="24" />
            <span>۰۱۳۳۲۰۰۹۰۲۳-۴</span>
          </div>
          <div className="my-2 flex gap-2 text-sm font-light items-center">
            <Icon icon="mingcute:whatsapp-fill" width="24" height="24" />
            <span>۰۱۳۳۲۰۰۹۰۲۳-۴</span>
          </div>
          <div className="my-2 flex gap-2 text-sm font-light items-center">
            <Icon icon="ri:instagram-fill" width="24" height="24" />
            <span>khane_talaa</span>
          </div>
          <div className="my-2 flex gap-2 text-sm font-light items-center">
            <Icon icon="mingcute:location-fill" width="24" height="24" />
            <span>گیلان کوچصفهان، خیابان شهید عسکری، مجموعه خانه طلا</span>
          </div>
        </div>
        <div className="flex-1">
          <div dangerouslySetInnerHTML={{ __html: enamadCode }} />
        </div>
      </div>
      <Divider className="mt-10" />
      <p className="text-xs p-4 text-center mx-auto">
        تمام حقوق مادی و معنوی متعلق به خانه طلا میباشد
      </p>
    </footer>
  );
}

export default Footer;
