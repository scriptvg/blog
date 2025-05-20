// components/MenuToggle.tsx
import { Menu, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function MenuToggle({ isOpen, toggleMenu }: Props) {
  return (
    <button onClick={toggleMenu} aria-label="Abrir o cerrar menú">
      {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
    </button>
  );
}
