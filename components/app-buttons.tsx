"use client";

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

function AppButtons() {
  return (
    <div className="flex justify-center gap-2 my-4">
      <Link href="https://app.khanetala.ir/Login">
        <Button
          color="primary"
          // startContent={
          //   <Icon icon="logos:android-icon" width="256" height="150" />
          // }
        >
          امکانات اپلیکیشن
        </Button>
      </Link>
      {/* <Button
        color="primary"
        startContent={<Icon icon="ic:baseline-apple" width="24" height="24" />}
      >
        دانلود نسخه آی او اس
      </Button> */}
    </div>
  );
}

export default AppButtons;
