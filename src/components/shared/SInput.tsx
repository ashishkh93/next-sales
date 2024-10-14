import { Badge, BadgeProps } from "../ui/badge";
import { Input, InputProps } from "../ui/input";

interface SInputProps extends InputProps {
  hasBadge?: any;
  badgeProps?: BadgeProps;
}

const SInput = ({ hasBadge, badgeProps, ...props }: SInputProps) => {
  return (
    <div className="relative">
      <Input {...props} />
      {hasBadge && (
        hasBadge
      )}
    </div>
  );
};

export default SInput;
