function Greeting({ loggedIn = false, name = "Risshab" }) {
  return (
    <div className="flex ml-4 pb-4 font-bold text-4xl pl-3 mx-3 text-slate-100">
      <div>
        Welcome to ListenUp
        <span className="sm:visible">{loggedIn ? `, ${name}` : ""}</span>
      </div>
    </div>
  );
}

export default Greeting;
