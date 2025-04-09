import { Button } from "@heroui/button";
import Link from "next/link";

function LoginButton() {
  return (
    <Link href="https://khanetala.ir/Login" target="_blank">
      <Button className="bg-primary text-white">ورود</Button>
    </Link>
  );
}

export default LoginButton;
