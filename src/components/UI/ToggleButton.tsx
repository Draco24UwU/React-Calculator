interface ButtonToggleProps {
  onToggle?: () => void;
  className?: string;
  checked: boolean;
}

function ToggleButton({
  onToggle,
  className,
  checked = false,
}: ButtonToggleProps) {
  return (
    <input
      type="checkbox"
      onChange={onToggle}
      className={`toggle ${className}`}
      checked={checked}
    />
  );
}

export default ToggleButton;
