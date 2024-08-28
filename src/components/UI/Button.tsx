interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  icon?: string | React.ElementType;
  iconClass?: string;
  swap?: boolean;
}

function Button({
  className,
  onClick,
  text,
  icon,
  iconClass = "",
  swap = false,
}: ButtonProps) {
  const typeOfIcon = () => {
    const Icon = icon;
    const IconClass = iconClass;
    const IconComponent = Icon as React.ElementType;

    switch (typeof Icon) {
      case "string":
        return (
          <img
            src={Icon}
            className={`w-auto h-auto dark:text-white ${IconClass}`}
            alt="icon"
          />
        );
      case "object":
        return <IconComponent className={`w-auto h-auto dark:text-white`} />;
      default:
        break;
    }
  };

  const ButtonContent = () => {
    return (
      <>
        {icon && swap ? (
          <>
            {icon && typeOfIcon()}
            {text}
          </>
        ) : (
          <>
            {text}
            {icon && typeOfIcon()}
          </>
        )}
      </>
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center w-full h-full mx-auto ${
        className
          ? className
          : "btn md:min-w-14 min-w-10 w-auto h-auto md:btn-md btn-sm"
      }`}
    >
      <ButtonContent />
    </button>
  );
}

export default Button;
