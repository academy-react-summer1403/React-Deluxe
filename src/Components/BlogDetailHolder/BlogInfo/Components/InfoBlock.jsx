import React from "react";

const InfoBlock = ({
  wrapperClasses,
  titleClasses,
  title,
  statusClasses,
  status,
}) => {
  return (
    <div className={wrapperClasses}>
      <span className={titleClasses}>{title}</span> <br />
      <div className={statusClasses}>{status}</div>
    </div>
  );
};

export { InfoBlock };
