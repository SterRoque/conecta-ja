"use client";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Modal } from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header buttonOnClick={() => setIsOpen(true)} />
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-fuchsia-600 font-bold lg:text-5xl 2xl:text-6xl 2xl:w-[800px]">
            Converse anonimamente, com segurança e privacidade:
          </h1>
          <p className="text-lg 2xl:text-xl">
            Crie sua sala, compartilhe a senha e comece a conversar.
          </p>
          <Button variant="primary">Criar sala</Button>
        </div>
        <img
          src="img/image.png"
          alt=""
          className="w-[550px] 2xl:w-[800px] h-fit mt-7"
        />
      </div>

      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </div>
  );
}
