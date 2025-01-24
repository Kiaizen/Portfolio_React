import { ReactNode } from "react";

const ProjectWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className=" md:h-[460px] lg:h-[520px] border rounded-xl">{children}</div>;
};

export default ProjectWrapper;
