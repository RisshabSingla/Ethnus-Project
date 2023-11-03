function ColumnItem({ imageSrc, ItemName }) {
  function onClick() {
    console.log(`${ItemName} Pressed`);
  }

  ItemName = ItemName.substr(0, 1).toUpperCase() + ItemName.substr(1);
  return (
    <div className="flex items-center w-full  hover:bg-neutral-950 p-3">
      <button
        onClick={onClick}
        className="flex items-center w-full  hover:bg-neutral-950"
      >
        <div className="flex items-center pl-3 mx-3 cursor-pointer">
          <img width="35px" src={imageSrc} alt="" />
          <div class="font-bold	 font-serif pl-3.5 text-lg text-slate-50">
            {ItemName}
          </div>
        </div>
      </button>
    </div>
  );
}

export default ColumnItem;
