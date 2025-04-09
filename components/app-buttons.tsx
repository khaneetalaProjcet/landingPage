"use client";

import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";

function AppButtons() {
  return (
    <div className="flex justify-center gap-2 my-4">
      <Button
        color="primary"
        // startContent={
        //   <Icon icon="logos:android-icon" width="256" height="150" />
        // }
      >
    ورود به اپلیکیشن
      </Button>
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
