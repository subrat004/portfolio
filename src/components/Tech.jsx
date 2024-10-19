import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import {styles} from '../styles'
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText} >Technical Skills</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
