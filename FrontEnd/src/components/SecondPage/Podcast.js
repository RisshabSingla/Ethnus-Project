function Podcast({ title, category, imageSrc }) {
  return (
    <>
      <div className=" p-4 flex-shrink-0 font-bold font-serif text-lg border rounded-3xl text-left m-3">
        <img
          className="rounded-3xl border-2 m-3"
          width="150px"
          height="150px"
          src="./images/home/2.svg"
          alt=""
        />
        <div className="px-3">{title ? title : "Title"}</div>
        <div className="px-3">{category ? category : "Category"}</div>
      </div>
    </>
  );
}

export default Podcast;
