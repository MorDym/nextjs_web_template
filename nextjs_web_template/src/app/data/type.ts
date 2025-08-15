export type MenuLinkProps = {
    id?: string | number;
    href: string;
    name: string;
    className: string,
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string;
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