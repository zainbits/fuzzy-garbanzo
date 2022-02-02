import React from "react";
import style from "./Skills.module.scss";
import ShowCard from "../../components/ShowCard/ShowCard";
import { useSelector } from "react-redux";

const Skills = () => {
  const { programmingLanguages } = useSelector((state) => state.contentful);

  return (
    <div className={style.Skills}>
      <div className={style.container}>
        {programmingLanguages.map((item, idx) => {
          return <ShowCard key={idx} name={item} icon={`Si${item}`} />;
        })} 
      </div>
    </div>
  );
};

export default Skills;
