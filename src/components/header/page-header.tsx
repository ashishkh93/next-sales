import React from "react";

interface PageHeaderProps {
  backIcon?: React.ReactNode | string;
  title?: React.ReactNode | string;
  rightSideComp?: React.ReactNode | string;
}

const PageHeader = (props: PageHeaderProps) => {
  const { backIcon, title, rightSideComp } = props;
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-2">
        <div>{backIcon}</div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="flex justify-end">{rightSideComp}</div>
    </div>
  );
};

export default PageHeader;
