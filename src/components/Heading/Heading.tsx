import React from "react";

type prop = {
  txt: string;
};

function Heading({ txt }: prop) {
  return (
    <h1 className="text-center text-primary font-black text-4xl lg:text-5xl mb-12 font-sans">
      {txt}
    </h1>
  );
}

export default Heading;
