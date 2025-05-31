import Image from "next/image";

import FAQComponent from "@/components/faq";
import MockPhone from "@/components/mock-phone";
import { Button } from "@heroui/button";
import AppButtons from "@/components/app-buttons";

import LandingImg from "@/assets/images/landing-img.png";
import AboutUsImg from "@/assets/images/about-us.png";
export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-start justify-center gap-4 relative">
        <div className="flex flex-col px-5 gap-4 lg:w-6/12 items-start h-full mt-14 order-2 lg:order-1 relative z-10">
          <h4 className="text-lg lg:text-xl font-bold lg:text-centertext-start inline">
            با
            <span className="text-2xl lg:text-4xl font-extrabold text-center lg:text-start text-secondary inline mx-2">
              اپلیکیشن خانه طلا
            </span>
            همون فروشگاه ، همون طلا ، این بار از خونه !
          </h4>
          <h6 className="lg:text-xl font-light lg:mt-10">
            خرید و فروش و پس انداز طلا؛ ساده، امن و 24 ساعته .
          </h6>
          <Button color="primary" className="lg:px-10">
            ورود به اپلیکیشن
          </Button>
        </div>
        <div className="relative lg:order-2 order-1 flex flex-1 justify-center items-center ">
          <Image
            alt="gold"
            height={900}
            src={LandingImg}
            width={900}
            loading="lazy"
            className="relative top-0  w-[400px] h-[400px]"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-32 justify-start items-start rounded-md h-[40vh] max-h-[40vh] relative bg-background">
        <div className="relative z-30 p-2 lg:p-10 lg:mr-20 lg:max-w-[60%]">
          <h2 className="text-xl text-white">درباره خانه طلا</h2>
          <p className="text-white font-light mt-5 leading-8">
            خانه طلا با بیش از <span className="font-bold"> n سال تجربه</span>{" "}
            در فروش حضوری طلا، همواره بر پایه ی{" "}
            <span className="font-bold">اعتماد</span>{" "}
            <span className="font-bold">کیفیت</span>، و{" "}
            <span className="font-bold">اصالت</span> فعالیت کرده است. اکنون با
            توسعه <span className="font-bold">اپلیکیشن اختصاصی</span>، گامی نو
            در مسیر خدمت‌رسانی برداشته‌ایم تا تجربه‌ای{" "}
            <span className="font-bold">امن</span> ،{" "}
            <span className="font-bold">سریع</span> و{" "}
            <span className="font-bold">حرفه‌ای</span> از خرید آنلاین طلا را
            برای مشتریان فراهم کنیم.
          </p>
        </div>
        <div
          className="w-full h-full absolute z-10 bg-center lg:bg-left bg-postion-[500px] lg:bg-position-[750px]"
          style={{
            backgroundImage: `url(${AboutUsImg.src})`,
            // backgroundPositionY: "750px",
            // backgroundOrigin: "revert",
            // backgroundSize: "150%",
            transform: "scaleX(-1)",
          }}
        />
        <div
          className="absolute w-full h-full left-0 top-0 z-20 "
          style={{
            background: `linear-gradient(60deg, rgba(177, 142, 78, 0.8) 80%, rgba(58, 45, 20, 0.1) 100%)`,
          }}
        />
      </section>
      <section className="flex flex-col lg:flex-row lg:mt-40 justify-between items-start p-10 rounded-md bg-background">
        <div className="flex flex-col justify-start items-start w-full order-2 lg:order-1">
          <h2 className="font-bold text-xl my-2 text-black">
            خرید طلا ، ساده تر از همیشه با{" "}
            <span className="text-primary">اپلیکیشن خانه طلا</span>
          </h2>
          <h4 className="font-light">
            با پشتیبانی ۲۴ ساعته، امکان خرید و فروش بی‌واسطه و پس‌انداز طلا را
            در محیطی امن، بدون کارمزد و به‌سادگی تجربه کنید.
          </h4>
          <h6 className="mt-4">
            همه‌چیز درباره نحوه استفاده از اپلیکیشن خانه طلا را اینجا ببینید:
          </h6>
          <AppButtons />
        </div>
        <MockPhone />
      </section>

      <section className="flex bg-secondary2 flex-col p-10 mt-20">
        <h2 className="font-bold my-4">
          اپلیکیشن خانه طلا چه ویژگی هایی دارد؟
        </h2>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5 lg:gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="lg:w-28 w-20 lg:h-28 h-20 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  fill="none"
                  viewBox="0 0 70 70"
                >
                  <g filter="url(#a)">
                    <path
                      fill="url(#b)"
                      stroke="#1F1B15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M34.4 62.114a4.286 4.286 0 0 1-3.086 0A41.1 41.1 0 0 1 5 23.8V11.286A4.286 4.286 0 0 1 9.286 7h47.143a4.286 4.286 0 0 1 4.285 4.286V23.8A41.1 41.1 0 0 1 34.4 62.114Z"
                    />
                    <path
                      fill="url(#c)"
                      stroke="#1F1B15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M32.857 32.714a6.428 6.428 0 1 0 0-12.857 6.428 6.428 0 0 0 0 12.857Z"
                    />
                    <path
                      stroke="#1F1B15"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M32.857 43.429V32.714"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="b"
                      x1="49.504"
                      x2="15.411"
                      y1="15.783"
                      y2="55.16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3C884" />
                      <stop offset=".514" stopColor="#B18E4E" />
                      <stop offset="1" stopColor="#89633E" />
                    </linearGradient>
                    <linearGradient
                      id="c"
                      x1="36.699"
                      x2="28.78"
                      y1="21.895"
                      y2="30.99"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3C884" />
                      <stop offset=".514" stopColor="#B18E4E" />
                      <stop offset="1" stopColor="#89633E" />
                    </linearGradient>
                    <filter
                      id="a"
                      width="69.714"
                      height="69.402"
                      x="0"
                      y="0"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dx="2" />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix values="0 0 0 0 0.296154 0 0 0 0 0.222115 0 0 0 0 0.162885 0 0 0 0.8 0" />
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_194_458"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_194_458"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h2 className="font-bold">امنیت بالا</h2>
              <span className="font-light text-center text-sm lg:text-md">
                تراکنش در محیطی کاملا امن.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="lg:w-28 w-20 lg:h-28 h-20 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 63 63"
                >
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M31.5 2A29.5 29.5 0 1 1 2 31.5a32.813 32.813 0 0 1 9.077-22.692"
                  />
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m2 11.076 9.077-2.27 2.27 9.078M31.5 15.615v18.154l11.8 5.9"
                  />
                </svg>
              </div>
              <h2 className="font-bold">دسترسی 24 ساعته</h2>
              <span className="font-light text-center text-sm lg:text-md">
                امکان استفاده در هر ساعت از شبانه روز.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="lg:w-28 w-20 lg:h-28 h-20 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="none"
                  viewBox="0 0 35 35"
                >
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M2 2v31h31"
                  />
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m9.154 16.308 5.961 5.961 9.539-14.307L33 13.923"
                  />
                </svg>
              </div>
              <h2 className="font-bold">قیمت لحظه ای طلا</h2>
              <span className="font-light text-center text-sm lg:text-md">
                دریافت قیمت های به روز بازار.
              </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="lg:w-28 w-20 lg:h-28 h-20 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 63 63"
                >
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M31.5 61C47.792 61 61 47.792 61 31.5S47.792 2 31.5 2 2 15.208 2 31.5 15.208 61 31.5 61Z"
                  />
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M16.523 36.038c2.27 8.17 11.346 13.162 19.515 10.893 4.993-1.816 9.078-5.9 10.439-10.892M21.515 24.238a.908.908 0 0 1 0-1.815m0 1.815a.908.908 0 0 0 0-1.815m19.969 1.815a.908.908 0 0 1 0-1.815m0 1.815a.908.908 0 0 0 0-1.815"
                  />
                </svg>
              </div>
              <h2 className="font-bold">استفاده آسان</h2>
              <span className="font-light text-center text-sm lg:text-md">
                طراحی ساده و قابل استفاده برای همه
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20 flex justify-center flex-col items-center w-screen-lg h-auto px-2">
        <div className="text-center flex flex-col lg:flex-row justify-center items-center lg:items-start lg:mt-20 lg:gap-10 max-w-screen-xl w-full h-max">
          <div className="flex-1 w-full my-14">
            <h2 className="text-2xl font-bold text-start mb-8">
              سوالات متداول
            </h2>
            <FAQComponent />
          </div>
        </div>
      </section>
    </>
  );
}
