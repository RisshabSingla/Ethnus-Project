import { useEffect, useState } from "react";

function ColumnItem({
  id,
  imageSrc,
  ItemName,
  onClickImage,
  setClicked,
  currentClicked,
}) {
  const originalClassName = "flex items-center w-full  p-3 rounded-xl";
  const originalTextColor = "text-orange-100";
  const [svgSource, setSvgSource] = useState(imageSrc);
  const [divClassName, setDivClassName] = useState(originalClassName);
  const [textColor, setTextColor] = useState(originalTextColor);

  function onClick() {
    setClicked(id);
    console.log(`${ItemName} Pressed`);
    const className = divClassName;
    setDivClassName(className);
    setSvgSource(onClickImage);
  }
  useEffect(() => {
    if (currentClicked !== id) {
      setSvgSource(imageSrc);
      setDivClassName(originalClassName);
      setTextColor("text-orange-100");
    } else {
      setSvgSource(onClickImage);
      const className = originalClassName + " bg-blue-800";
      setDivClassName(className);
      setTextColor("text-orange-500");
    }
  }, [currentClicked]);

  ItemName = ItemName.substr(0, 1).toUpperCase() + ItemName.substr(1);
  return (
    <div className={divClassName}>
      <button onClick={onClick} className="flex items-center w-full">
        <div className="flex items-center pl-3 mx-3 cursor-pointer">
          <img width="35px" src={svgSource} alt="" />
          <div className="hidden min-[940px]:flex">
            <div
              className={`hover:text-orange-500 font-bold font-serif pl-3.5 text-lg ${textColor}`}
            >
              {ItemName}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ColumnItem;
