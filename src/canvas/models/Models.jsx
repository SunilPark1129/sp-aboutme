import React from "react";
import Desktop from "./Desktop";
import Art from "./Art";
import WorldMap from "./WorldMap";
import Animal from "./Animal";

function Models(props) {
  return (
    <>
      <Desktop topic={"Skill"} {...props} />
      <Art topic={"Hobby"} {...props} />
      <WorldMap topic={"Country"} {...props} />
      <Animal topic={"Me"} {...props} />
    </>
  );
}

export default Models;
