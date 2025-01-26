import { IoClose } from "react-icons/io5";
import { Button } from "./Button";
import { Input } from "./Input";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-80 py-11 relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose
          size={24}
          className="text-pink-400 cursor-pointer absolute top-4 right-5"
          onClick={onClose}
        />

        <h1 className="font-bold text-pink-500 text-xl text-center mb-4">
          Entrar na Sala
        </h1>
        <Input placeholder="Digite a senha para entrar" type="password" />
        <div className="w-full max-w-64 mt-6">
          <Button rounded="sm" size="full">
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
