export type MenuLinkProps = {
    id?: string | number;
    href: string;
    name: string;
    className: string,
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string;
    className?: string;
}

export type LoaderProps = {
  size?: string; // velikost (Tailwind class, např. 'h-8 w-8')
  color?: string; // barva (Tailwind class, např. 'border-blue-500')
}

export type SwitchButtonProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export type CookieItemType = {
  id: number,
  description: string,
  nameVis: string
  cookie: {
    id: number,
    required: boolean,
    enable: boolean,
  },
  onChange: (checked: boolean) => void;
}

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export type AccordionProps = {
  title: string;
  content: string;
}

export type SeznamItem = {
  id: number
  name: string
  content?: string
}

export type BasicContentProps = {
  id: number
  title: string
  content?: string
  img?: string
  seznam?: SeznamItem[]
}

export enum ContactTypeEnum {
  EMAIL = 'email',
  PHONE = 'phone',
  ADDRESS = 'address',
}

export type ContactTypeProps = {
  id: number;
  type: ContactTypeEnum; // toto je správně, TS to rozpozná
  value: string;
};

export type NewBoxProps = {
  id: number;
  title: string;
  content: string;
  img?: string;
  url?: string;
  children?: React.ReactNode;
  caption?: string;
  seznam?: SeznamItem[];
}

export type ModalCookieBarProps = {
  isOpen?: boolean;
}