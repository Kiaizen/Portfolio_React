import { ReactNode } from "react";

const Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto py-5 flex flex-col md:flex-row  gap-5">{children}</div>;
};

export default Wrapper;
