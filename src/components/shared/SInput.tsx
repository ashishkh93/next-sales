import { Badge, BadgeProps } from "../ui/badge";
import { Input, InputProps } from "../ui/input";

interface SInputProps extends InputProps {
  hasBadge?: boolean;
  badgeProps?: BadgeProps;
}

const SInput = ({ hasBadge, badgeProps, ...props }: SInputProps) => {
  return (
    <div className=" relative">
      <Input {...props} />
      {hasBadge && (
        <div className="absolute top-1 right-2">
          <Badge
            variant="outline"
            className="bg-[#F1F5F9] text-black !hover:bg-current text-[10px] font-normal"
            {...badgeProps}
          >
            Alt+F4
          </Badge>
        </div>
      )}
    </div>
  );
};

export default SInput;
