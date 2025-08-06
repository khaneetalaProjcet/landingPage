import Image from "next/image";

import FAQComponent from "@/components/faq";
import MockPhone from "@/components/mock-phone";
import { Button } from "@heroui/button";
import AppButtons from "@/components/app-buttons";

import LandingImg from "@/assets/images/landing-img.png";
import AboutUsImg from "@/assets/images/about-us.png";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-start justify-center gap-4 relative">
        <div className="flex flex-col px-5 gap-4 lg:w-6/12 items-start h-full lg:mt-14 order-2 lg:order-1 relative z-10">
          <h4 className="text-lg lg:text-xl font-bold lg:text-centertext-start inline">
            با
            <span className="text-3xl lg:text-4xl font-extrabold text-center lg:text-start text-secondary inline mx-2">
              اپلیکیشن خانه طلا ؛
            </span>
            <br />
            همون فروشگاه ، همون طلا ، این بار از خونه !
          </h4>
          <h6 className="lg:text-xl text-[17px] font-light lg:mt-10 text-justify w-full">
            خرید و فروش و پس انداز طلا؛ ساده، امن و 24 ساعته .
          </h6>
          <Link href="https://app.khanetalaa.ir/Login">
            <Button color="primary" className="lg:px-10 font-bold" size="lg">
              ورود | عضویت
            </Button>
          </Link>
        </div>
        <div className="relative lg:order-2 order-1 flex flex-1 lg:justify-end lg:items-end justify-center items-center ">
          <Image
            alt="gold"
            height={900}
            src={LandingImg}
            width={900}
            loading="lazy"
            className="relative top-0  w-full h-[400px]"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row mt-32 justify-start items-start rounded-md relative bg-background">
        <div className="relative z-30 px-4 p-2 lg:p-10 lg:mr-20 lg:max-w-[60%]">
          <h2 className="text-xl text-white">درباره خانه طلا</h2>
          <p className="text-white font-light mt-5 leading-8 text-justify">
            خانه طلا با بیش از <span className="font-bold"> 8 سال تجربه</span>{" "}
            در فروش حضوری طلا، همواره بر پایه ی{" "}
            <span className="font-bold">اعتماد</span>{" "}
            <span className="font-bold">کیفیت</span>، و{" "}
            <span className="font-bold">اصالت</span> فعالیت کرده است.
            <p>
              اکنون با ورود به{" "}
              <span className="font-bold">عرصه فروش آنللاین طلا</span>، گامی نو
              در مسیر خدمت‌رسانی برداشته‌ایم تا تجربه‌ای{" "}
              <span className="font-bold">امن</span> ،{" "}
              <span className="font-bold">سریع</span> و{" "}
              <span className="font-bold">حرفه‌ای</span> از خرید آنلاین طلا را
              برای مشتریان عزیزمان فراهم کنیم.
            </p>
          </p>
        </div>
        <div
          className="w-full h-full absolute z-10 bg-center bg-cover"
          style={{
            backgroundImage: `url(${AboutUsImg.src})`,
            // backgroundPositionY: "750px",
            // backgroundOrigin: "revert",
            // backgroundSize: "150%",
            // transform: "scaleX(-1)",
          }}
        />
        {/* <div
          className="absolute w-full h-full left-0 top-0 z-20 "
          style={{
            background: `linear-gradient(60deg, rgb(177 142 78) 60%, rgba(58 45 20 , 0.52) 80%)`,
          }}
        /> */}
      </section>
      <section className="flex flex-col lg:flex-row lg:mt-20 mt-32 justify-between items-center px-4 rounded-md bg-background">
        <div className="flex flex-col justify-start items-start w-full order-2 lg:order-1">
          <h2 className="font-bold text-[20px] my-2 text-black">
            خرید طلا ، ساده تر از همیشه با{" "}
            <p className="text-primary">اپلیکیشن خانه طلا</p>
          </h2>
          <h4 className="font-light text-justify text-[18px] my-1">
            در راستای راحتی و آسایش شما عزیزان تمامی خدمات مربوط به طرح صندوق
            طلا را این بار در بستر آنلاین و محیطی امن برای شما فراهم کرده ایم.
          </h4>

          <AppButtons />
        </div>
        <MockPhone />
      </section>

      <section className="flex bg-secondary2 flex-col px-4 lg:px-10 mt-32">
        <h2 className="font-bold my-4 text-xl">
          اپلیکیشن خانه طلا چه ویژگی هایی دارد؟
        </h2>
        <div className="pb-2">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-y-5 lg:gap-10">
            <div className="flex flex-col justify-start items-center ">
              <div className="lg:w-28 w-20 lg:h-28 h-20 p-4 lg:p-0 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60px"
                  height="60px"
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
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              <h2 className="font-bold mt-2 text-lg">امنیت بالا</h2>
              <span className="text-center text-sm lg:text-md">
                تراکنش در محیطی کاملا امن.
              </span>
            </div>
            <div className="flex flex-col justify-start items-center lg:h-[30vh]">
              <div className="lg:w-28 w-20 lg:h-28 h-20  p-4 lg:p-0 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="none"
                  viewBox="0 0 69 69"
                >
                  <g filter="url(#a)">
                    <circle cx="32.5" cy="34.5" r="29.5" fill="url(#b)" />
                  </g>
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M32.5 5A29.5 29.5 0 1 1 3 34.5a32.813 32.813 0 0 1 9.077-22.692"
                  />
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m3 14.076 9.077-2.27 2.27 9.078M32.5 18.615v18.154l11.8 5.9"
                  />
                  <defs>
                    <linearGradient
                      id="b"
                      x1="50.128"
                      x2="13.793"
                      y1="14.354"
                      y2="56.085"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3C884" />
                      <stop offset=".514" stopColor="#B18E4E" />
                      <stop offset="1" stopColor="#89633E" />
                    </linearGradient>
                    <filter
                      id="a"
                      width="69"
                      height="69"
                      x="0"
                      y="0"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_194_462"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_194_462"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h2 className="font-bold mt-2 text-lg">دسترسی 24 ساعته</h2>
              <span className="text-center text-sm lg:text-md">
                امکان استفاده در هر ساعت از شبانه روز.
              </span>
            </div>
            <div className="flex flex-col justify-start items-center lg:h-[30vh]">
              <div className="lg:w-28 w-20 lg:h-28 h-20  p-4 lg:p-0 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="none"
                  viewBox="0 0 77 74"
                >
                  <g filter="url(#a)">
                    <rect
                      width="63"
                      height="60"
                      x="5"
                      y="7"
                      fill="url(#b)"
                      rx="14"
                    />
                    <rect
                      width="63"
                      height="60"
                      x="5"
                      y="7"
                      stroke="#1F1B15"
                      stroke-linejoin="round"
                      stroke-width="4"
                      rx="14"
                    />
                  </g>
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M21 21v31h31"
                  />
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m28.154 35.308 5.961 5.961 9.539-14.307L52 32.923"
                  />
                  <defs>
                    <linearGradient
                      id="b"
                      x1="55.323"
                      x2="18.662"
                      y1="16.512"
                      y2="60.724"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3C884" />
                      <stop offset=".514" stopColor="#B18E4E" />
                      <stop offset="1" stopColor="#89633E" />
                    </linearGradient>
                    <filter
                      id="a"
                      width="77"
                      height="74"
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
                        result="effect1_dropShadow_292_423"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_292_423"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h2 className="font-bold mt-2 text-lg">قیمت لحظه ای طلا</h2>
              <span className="text-center text-sm lg:text-md">
                دریافت قیمت های به روز بازار.
              </span>
            </div>
            <div className="flex flex-col justify-start items-center  lg:h-[30vh]">
              <div className="lg:w-28 w-20 lg:h-28 h-20  p-4 lg:p-0 rounded-full bg-secondary flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="none"
                  viewBox="0 0 69 69"
                >
                  <g filter="url(#a)">
                    <circle cx="32.5" cy="34.5" r="29.5" fill="url(#b)" />
                    <circle cx="32.5" cy="34.5" r="29" stroke="#1F1B15" />
                  </g>
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M32.5 64C48.792 64 62 50.792 62 34.5S48.792 5 32.5 5 3 18.208 3 34.5 16.208 64 32.5 64Z"
                  />
                  <path
                    stroke="#1F1B15"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M17.523 39.038c2.27 8.17 11.346 13.162 19.515 10.893 4.993-1.816 9.078-5.9 10.439-10.892M22.515 27.238a.908.908 0 0 1 0-1.815m0 1.815a.908.908 0 0 0 0-1.815m19.969 1.815a.908.908 0 0 1 0-1.815m0 1.815a.908.908 0 0 0 0-1.815"
                  />
                  <defs>
                    <linearGradient
                      id="b"
                      x1="50.128"
                      x2="13.793"
                      y1="14.354"
                      y2="56.085"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F3C884" />
                      <stop offset=".514" stopColor="#B18E4E" />
                      <stop offset="1" stopColor="#89633E" />
                    </linearGradient>
                    <filter
                      id="a"
                      width="69"
                      height="69"
                      x="0"
                      y="0"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                        result="effect1_dropShadow_292_424"
                      />
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_292_424"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <h2 className="font-bold mt-2 text-lg">استفاده آسان</h2>
              <span className="text-center text-sm lg:text-md">
                طراحی ساده و قابل استفاده برای همه کاربران
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex justify-center flex-col items-center w-screen-lg h-auto px-2 mt-20 lg:mt-10">
        <div className="text-center flex flex-col lg:flex-row justify-center items-center lg:items-start lg:mt-20 lg:gap-10 max-w-screen-xl w-full h-max">
          <div className="flex-1 w-full mt-14 ">
            <h2 className="text-2xl font-bold text-start mb-2 px-4">
              سوالات متداول
            </h2>
            <FAQComponent />
          </div>
        </div>
      </section>
    </>
  );
}
