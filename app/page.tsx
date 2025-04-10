import Image from "next/image";

import GoldImage from "@/assets/images/gold.webp";
import FAQ from "@/assets/images/FAQ.png";
import FAQComponent from "@/components/faq";
import MockPhone from "@/components/mock-phone";
import { Button } from "@heroui/button";
import AppButtons from "@/components/app-buttons";

export default function Home() {
  return (
    <>
      <section
        style={{
          background:
            "linear-gradient(52deg, rgba(238,197,106,1) 9%, rgba(174,145,80,1) 50%)",
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-4 py-8 md:py-10 rounded-md h-max lg:h-auto"
      >
        <div className="flex flex-col px-5 gap-4 flex-1 order-2 lg:order-1">
          <h1 className="text-2xl font-bold text-white text-center lg:text-start">
            خانه طلا
          </h1>
          <h2 className="text-xl font-bold text-white text-center lg:text-start">
            سامانه قانونی خرید و فروش طلای آب شده
          </h2>
          <h4 className="text-lg text-white font-thin text-center lg:text-start">
            خرید، فروش و پس انداز آنلاین و 24 ساعته طلای آبشده، صندوق طلای
            اختصاصی
          </h4>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <Image alt="gold" height={350} src={GoldImage} width={350} />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-40 justify-around items-center bg-slate-100 p-10 rounded-md">
        <MockPhone />
        <div>
          <h2 className="font-bold text-xl text-center my-2">
            اپلیکیشن خانه طلا
          </h2>
          <h4 className="text-center lg:text-start">
            دسترسی ساده و آسان به تمامی خدمات سامانه را با نسخه جدید اپلیکیشن
            خانه طلا تجربه کنید
          </h4>
          <AppButtons />
        </div>
      </section>

      <section className="my-20 flex justify-center flex-col items-center w-screen-lg h-auto">
        <h2 className="text-2xl font-bold">سوالات متداول</h2>
        <div className="text-center flex flex-col lg:flex-row justify-center items-center lg:items-start lg:mt-20 lg:gap-10 max-w-screen-xl w-full h-max">
          <div>
            <Image alt="FAQ" height={350} quality={100} src={FAQ} width={350} />
          </div>
          <div className="flex-1 w-full my-14">
            <FAQComponent />
          </div>
        </div>
      </section>
    </>
  );
}
