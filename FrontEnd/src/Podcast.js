function Podcast({ title, category }) {
  return (
    <>
      <div className="flex-item p-5 flex-shrink-0 font-bold	font-serif text-lg  text-slate-50 border rounded-3xl text-left">
        <img
          className="rounded-3xl border-2 m-3"
          width="200px"
          height="200px"
          src="./images/home/1.svg"
          alt=""
        />
        <div className="px-3">{title ? title : "Title"}</div>
        <div className="px-3">{category ? category : "Category"}</div>
      </div>
    </>
  );
}

export default Podcast;
