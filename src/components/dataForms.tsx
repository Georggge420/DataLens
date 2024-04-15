import Link from 'next/link';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface ButtonProps {
  href?: string;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export const CustomInput: React.FC<InputProps> = ({ value, setValue, className, ...props }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className={`text-center p-2 w-full bg-grisClaro rounded-lg text-negroOscuro text-base font-bold lg:col-span-5 xs:col-span-1 xs:row-span-1 ${className} dark:bg-purpura dark:hover:bg-morado dark:text-blanco`}
    {...props}
  />
);

export const ButtonSPrimary: React.FC<ButtonProps> = ({ type, text, className, onClick }) => (
    <button type={type} onClick={onClick} className={`font-exo px-4 py-2 bg-blancoOpaco text-negroOscuro rounded-lg md:w-full w-auto h-full text-base font-bold hover:bg-grisOscuro hover:text-blancoClaro ${className} dark:bg-aqua dark:hover:bg-aquaOscuro dark:text-Negro1A dark:hover:text-blanco`}>
      {text}
    </button>
);

export const ButtonSSecond: React.FC<ButtonProps> = ({ type, text, className, onClick }) => (
      <button type={type} onClick={onClick} className={`font-exo px-4 py-2 bg-negroClaro text-blancoClaro rounded-lg md:w-full w-auto h-full text-base font-bold hover:bg-grisMedio ${className} dark:bg-rosa dark:hover:bg-purpura dark:text-Negro1A`}>
        {text}
      </button>
  );

export const ButtonSOutLine: React.FC<ButtonProps> = ({ type, text, className, onClick }) => (
      <button type={type} onClick={onClick} className={`font-exo px-4 py-2 bg-blancoClaro text-negroOscuro outline outline-negroOscuro hover:outline-dashed rounded-lg md:w-full w-auto h-full text-base font-bold ${className}`}>
        {text}
      </button>
  );

export const ButtonLPrimary: React.FC<ButtonProps> = ({ href, text, className }) => (
  <Link href={href || ""} className="justify-items-center w-full">
    <button className={`font-exo px-4 py-2 bg-blancoOpaco text-negroOscuro rounded-lg w-full h-20 text-2xl font-bold hover:bg-grisOscuro hover:text-blancoClaro ${className}`}>
      {text}
    </button>
  </Link>
);

export const ButtonLSecond: React.FC<ButtonProps> = ({ href, text, className }) => (
    <Link href={href || ""} className="justify-items-center md:w-full w-auto">
      <button className={`font-exo px-4 py-2 bg-negroClaro text-blancoClaro rounded-lg md:w-full w-auto h-auto md:h-20 text-2xl font-bold hover:bg-grisMedio ${className}`}>
        {text}
      </button>
    </Link>
  );

export const ButtonLOutLine: React.FC<ButtonProps> = ({ href, text, className }) => (
    <Link href={href || ""} className="justify-items-center md:w-full w-auto">
      <button className={`font-exo px-4 py-2 bg-blancoClaro text-negroOscuro outline outline-negroOscuro hover:outline-dashed rounded-lg md:w-full w-auto h-auto md:h-20 text-2xl font-bold ${className}`}>
        {text}
      </button>
    </Link>
  );