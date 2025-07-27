import { Button } from "@heroui/button";
import Link from "next/link";

function LoginButton() {
  return (
    <Link href="https://app.khanetalaa.ir/Login" className="hidden lg:flex">
      <Button className="bg-primary text-white">ورود | عضویت</Button>
    </Link>
  );
}

export default LoginButton;
