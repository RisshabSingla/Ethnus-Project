function Logo({ setClicked }) {
  return (
    <div>
      <div className="flex text-center m-3	 w-full  text-xl text-orange-100 cursor-pointer">
        <div>
          <img
            height="40px"
            width="40px"
            src="./images/logo/1.jpeg"
            onClick={() => {
              setClicked("1");
            }}
            alt=""
          />
        </div>
        <div className="p-3">ListenUp</div>
      </div>
    </div>
  );
}

export default Logo;
