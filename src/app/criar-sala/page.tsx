import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function CreateRoom() {
  return (
    <div className="w-screen flex justify-center items-center h-screen ">
      <div className="flex flex-col">
        <h1 className="text-pink-500 font-bold text-xl text-center mb-5">
          Crie sua sala anonima
        </h1>
        <div className="flex flex-col gap-2 mb-6">
          <Input placeholder="Nome da sala" />
          <Input placeholder="Crie uma senha" />
        </div>

        <Button rounded="sm" size="full">
          Criar sala
        </Button>
      </div>
    </div>
  );
}
