import { ReactNode } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AboutDataProps {
  children: ReactNode;
  end: number;
}

const AboutData = ({ children, end }:AboutDataProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={ref}>
      <div className="text-[40px] font-tertiary text-gradient mb-2">
        {inView ? <CountUp start={0} end={end} duration={7} /> : null}+
      </div>
      <div className="font-primary text-sm tracking-[2px]">
        <p>{children}</p>
      </div>
    </section>
  );
};

export default AboutData;
