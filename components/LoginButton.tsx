import { Button } from "@heroui/button";
import Link from "next/link";

function LoginButton() {
  return (
    <Link href="https://khanetala.ir/Login">
      <Button className="bg-primary text-white">ورود</Button>
    </Link>
  );
}

export default LoginButton;
