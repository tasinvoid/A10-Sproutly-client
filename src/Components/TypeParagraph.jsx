import React from "react";

import { Typewriter } from "react-simple-typewriter";

const TypeParagraph = () => {
  const handleDone = () => {
   
  };

  return (
    <div className="p-10 mx-40 text-center text-green-400 lg:text-3xl">
      <Typewriter
        words={["Welcome", "to", "SPROUTLY"]}
        loop={1}
        // typeSpeed={40}
        cursor
        onLoopDone={handleDone}
      />

      <hr />
    </div>
  );
};

export default TypeParagraph;
