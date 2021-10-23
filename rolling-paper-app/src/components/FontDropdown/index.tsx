import * as React from "react";

const FontDropdown = ({ setFontValue }: any) => {
  return (
    <div>
      <button onClick={() => setFontValue(1)}>HS유지체</button>
      <button onClick={() => setFontValue(0)}>왼손잡이도예뻐체</button>
    </div>
  );
};

export default FontDropdown;
