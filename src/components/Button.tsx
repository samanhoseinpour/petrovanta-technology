import Link from 'next/link';

interface ButtonProps {
  href: string;
  type: string;
  title: string;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ href, type, title, style }) => {
  return (
    <Link className={`customBtn ${style}`} type={type} href={href}>
      {title}
    </Link>
  );
};

export default Button;
