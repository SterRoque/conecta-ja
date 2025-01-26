import { InputHTMLAttributes, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { tv } from "tailwind-variants";

export function Input({
  type,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);

  function handleShowingPassword() {
    setIsShowingPassword(false);
  }
  function handleNotShowingPassword() {
    setIsShowingPassword(true);
  }

  return (
    <div className="relative">
      <input
        type={type === "password" && isShowingPassword ? "text" : type}
        className="h-10 w-full max-w-64 rounded-lg border border-gray-300 px-5 focus-visible:outline-none placeholder:text-sm"
        {...rest}
      />
      {type === "password" &&
        (isShowingPassword ? (
          <LuEye
            onClick={handleShowingPassword}
            className="cursor-pointer absolute text-gray-500 right-2 top-0 h-full"
            size={18}
          />
        ) : (
          <LuEyeOff
            onClick={handleNotShowingPassword}
            className="cursor-pointer absolute text-gray-500 right-2 top-0 h-full"
            size={18}
          />
        ))}
    </div>
  );
}
