interface FontValue {
  setFontValue: Function;
}

const FontDropdown = ({ setFontValue }: FontValue) => {
  return (
    <div>
      <button onClick={() => setFontValue("HSYuji")}>HS유지체</button>
      <button onClick={() => setFontValue("nanum")}>왼손잡이도예뻐체</button>
      <button onClick={() => setFontValue("Uiyeun")}>온글잎의연체</button>
    </div>
  );
};

export default FontDropdown;
