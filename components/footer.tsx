import { Divider } from "@heroui/divider";
import { Icon } from "@iconify/react";

function Footer() {
  const enamadCode = `<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=345500&Code=JWSE7nJHsuPxR8ZL97tZ'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=345500&Code=JWSE7nJHsuPxR8ZL97tZ' alt='' style='cursor:pointer' code='JWSE7nJHsuPxR8ZL97tZ'></a>`;

  return (
    <footer className="bg-primary text-white p-4 mt-32 ">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 w-full  ">
          <ul className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-4 ">
            <li className="flex items-center gap-2 flex-1 col-span-2">
              <div className="bg-secondary p-1 rounded-full">
                <Icon icon="mingcute:location-fill" width="24" height="24" />
              </div>
              <span className="text-[14px] lg:md">
                گیلان، کوچصفهان، خیابان شهید عسکری، مجموعه خانه طلا 
              </span>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-secondary p-1 rounded-full">
                <Icon icon="solar:phone-bold" width="24" height="24" />
              </div>
              <span className=" text-[18px] lg:md">01332009023-4</span>
            </li>
            <li className="flex items-center gap-2 col-span-2">
              <div className="bg-secondary p-1 rounded-full">
                <Icon icon="ri:instagram-fill" width="24" height="24" />
              </div>

              <span className="text-[18px] lg:md">khane_talaa</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-secondary p-1 rounded-full">
                <Icon icon="mingcute:whatsapp-fill" width="24" height="24" />
              </div>
              <span className="text-[18px] lg:md">01332009023-4</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <div
              className="bg-white p-2 rounded-md"
              style={{ cursor: "pointer", width: "100px", height: "125px" }}
              dangerouslySetInnerHTML={{ __html: enamadCode }}
            />
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxwYXRoIGQ9Im0xMjAgMjQzbDk0LTU0IDAtMTA5IC05NCA1NCAwIDEwOSAwIDB6IiBmaWxsPSIjODA4Mjg1Ii8+Cgk8cGF0aCBkPSJtMTIwIDI1NGwtMTAzLTYwIDAtMTE5IDEwMy02MCAxMDMgNjAgMCAxMTkgLTEwMyA2MHoiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo1O3N0cm9rZTojMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjE0IDgwbC05NC01NCAtOTQgNTQgOTQgNTQgOTQtNTR6IiBmaWxsPSIjMDBhZWVmIi8+Cgk8cGF0aCBkPSJtMjYgODBsMCAxMDkgOTQgNTQgMC0xMDkgLTk0LTU0IDAgMHoiIGZpbGw9IiM1ODU5NWIiLz4KCTxwYXRoIGQ9Im0xMjAgMTU3bDQ3LTI3IDAtMjMgLTQ3LTI3IC00NyAyNyAwIDU0IDQ3IDI3IDQ3LTI3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MTU7c3Ryb2tlOiNmZmYiLz4KCTx0ZXh0IHg9IjE1IiB5PSIzMDAiIGZvbnQtc2l6ZT0iMjVweCIgZm9udC1mYW1pbHk9IidCIFlla2FuJyIgc3R5bGU9ImZpbGw6IzI5Mjk1Mjtmb250LXdlaWdodDpib2xkIj7Yudi22Ygg2KfYqtit2KfYr9uM2Ycg2qnYtNmI2LHbjDwvdGV4dD4KCTx0ZXh0IHg9IjgiIHk9IjM0MyIgZm9udC1zaXplPSIyNXB4IiBmb250LWZhbWlseT0iJ0IgWWVrYW4nIiBzdHlsZT0iZmlsbDojMjkyOTUyO2ZvbnQtd2VpZ2h0OmJvbGQiPtqp2LPYqCDZiCDaqdin2LHZh9in24wg2YXYrNin2LLbjDwvdGV4dD4KPC9zdmc+ "
              alt=""
              // onClick="window.open('https://ecunion.ir/verify/khanetalaa.ir?token=448910967fa3595c3951', 'Popup','toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')"
              style={{ cursor: "pointer", width: "100px", height: "125px" }}
              className="bg-white p-2 rounded-md"
            />
          </div>
        </div>
      </div>
      <Divider className="mt-10 bg-white" />
      <p className="text-xs p-4 text-center mx-auto font-semibold text-[18px]">
        تمام حقوق مادی و معنوی متعلق به خانه طلا میباشد
      </p>
    </footer>
  );
}

export default Footer;
