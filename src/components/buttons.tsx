import Link from 'next/link';

interface ButtonProps {
  href?: string;
  text: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const ButtonSPrimary: React.FC<ButtonProps> = ({ type, text, className }) => (
    <button type={type} className={`px-4 py-2 bg-blancoOpaco text-negroOscuro rounded-lg md:w-full w-auto h-full text-base font-bold hover:bg-grisOscuro hover:text-blancoClaro ${className}`}>
      {text}
    </button>
);

export const ButtonSSecond: React.FC<ButtonProps> = ({ type, text, className }) => (
      <button type={type} className={`px-4 py-2 bg-negroClaro text-blancoClaro rounded-lg md:w-full w-auto h-full text-base font-bold hover:bg-grisMedio ${className}`}>
        {text}
      </button>
  );

export const ButtonSOutLine: React.FC<ButtonProps> = ({ type, text, className }) => (
      <button type={type} className={`px-4 py-2 bg-blancoClaro text-negroOscuro outline outline-negroOscuro hover:outline-dashed rounded-lg md:w-full w-auto h-full text-base font-bold ${className}`}>
        {text}
      </button>
  );

export const ButtonLPrimary: React.FC<ButtonProps> = ({ href, text, className }) => (
  <Link href={href || ""} className="justify-items-center w-full">
    <button className={`px-4 py-2 bg-blancoOpaco text-negroOscuro rounded-lg w-full h-20 text-2xl font-bold hover:bg-grisOscuro hover:text-blancoClaro ${className}`}>
      {text}
    </button>
  </Link>
);

export const ButtonLSecond: React.FC<ButtonProps> = ({ href, text, className }) => (
    <Link href={href || ""} className="justify-items-center md:w-full w-auto">
      <button className={`px-4 py-2 bg-negroClaro text-blancoClaro rounded-lg md:w-full w-auto h-auto md:h-20 text-2xl font-bold hover:bg-grisMedio ${className}`}>
        {text}
      </button>
    </Link>
  );

export const ButtonLOutLine: React.FC<ButtonProps> = ({ href, text, className }) => (
    <Link href={href || ""} className="justify-items-center md:w-full w-auto">
      <button className={`px-4 py-2 bg-blancoClaro text-negroOscuro outline outline-negroOscuro hover:outline-dashed rounded-lg md:w-full w-auto h-auto md:h-20 text-2xl font-bold ${className}`}>
        {text}
      </button>
    </Link>
  );