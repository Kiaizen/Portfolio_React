import { ReactNode } from "react";

interface ProjectProps {
  imgToggle: boolean;
  setProjectState: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
  firstSpan: string;
  secondSpan: string;
  children: ReactNode;
}

const ProjectBox: React.FC<ProjectProps> = ({
  imgToggle,
  setProjectState,
  img,
  firstSpan,
  secondSpan,
  children,
}) => {
  return (
    <div className="md:w-[750px] lg:w-[1000px] ">
      {!imgToggle ? (
        <div
          onClick={() => setProjectState(true)}
          className="h-full group relative overflow-hidden border-2 border-white/50 rounded-xl"
          >
          <div className="group-hover:bg-black/70  absolute z-40 transition-all duration-300"></div>
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={img}
            alt="second project"
          />
          <div className="absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
            <span className="text-gradient">{firstSpan}</span>
          </div>
          <div className="absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
            <span className="text-3xl text-white">{secondSpan}</span>
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default ProjectBox;
