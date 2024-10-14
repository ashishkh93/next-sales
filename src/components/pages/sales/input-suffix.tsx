import React from "react";

interface InputSuffixProps extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  body?: React.ReactNode | string;
}

const InputSuffix = ({ className, body, ...props }: InputSuffixProps) => {
  return (
    <div
      className={`border-l-0 rounded-r-md border-[1px] border-gray-200 px-6 text-[14px] flex justify-center items-center min-w-max cursor-pointer bg-white ${className}`}
      {...props}
    >
      {body}
    </div>
  );
};

export default InputSuffix;
