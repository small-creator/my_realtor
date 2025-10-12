interface CTAButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({
  text,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${className} inline-block text-center`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      {text}
    </button>
  );
}
