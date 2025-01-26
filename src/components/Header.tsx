import { Button } from "./Button";

type HeaderProps = {
  buttonOnClick?: () => void;
};

export function Header({ buttonOnClick }: HeaderProps) {
  return (
    <header className="w-full bg-pink-400 h-20 flex items-center justify-between pl-10 pr-14 fixed">
      <img src="img/logo.svg" />
      <Button variant="secondary" onClick={buttonOnClick}>
        Entre na sala
      </Button>
    </header>
  );
}
