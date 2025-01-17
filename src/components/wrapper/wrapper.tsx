import { ReactNode } from "react";

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto flex flex-col lg:flex-row gap-5">{children}</div>;
};

export default Wrapper;
