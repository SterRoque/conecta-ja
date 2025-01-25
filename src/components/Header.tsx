import { Button } from "./Button";

export function Header() {
  return (
    <header className="w-full bg-pink-400 h-20 flex items-center justify-between pl-10 pr-14">
      <img src="img/logo.svg" />
      <Button variant="secondary">Entre na sala</Button>
    </header>
  );
}
