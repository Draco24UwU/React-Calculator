import ToggleButton from "@/components/UI/ToggleButton";
import { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";
import { switchDarkMode } from "@/context/DarkModeContextReducer";

function DarkToggleButton({ className }: { className?: string }) {
  const dispatch = useDispatch();
  const DarkMode = useSelector((state: RootState) => state.DarkMode.isOpen);

  return (
    <ToggleButton
      className={className}
      checked={DarkMode}
      onToggle={() => {
        dispatch(switchDarkMode());
      }}
    />
  );
}

export default DarkToggleButton;
