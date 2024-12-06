const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[url('public/Rectangle85.png')] h-[500px] w-full max-w-4xl mx-auto flex flex-col justify-between bg-no-repeat bg-cover bg-center items-center text-white p-4 rounded-3xl">
        <div className="flex flex-row justify-start w-full">
          <div className="bg-white flex justify-center items-center gap-2 w-20 h-12 rounded-full">
            <img className="w-5 h-5" src="/public/Vector.png" alt="Vector" />
            <p className="text-orange-400 font-semibold text-center">۱۲</p>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-end items-center gap-4 bg-left-bottom">
          <div className="bg-white flex justify-center items-center gap-2 w-28 h-12 rounded-full">
            <img className="w-5 h-5" src="/public/note-2.png" alt="Notes" />
            <p className="text-black font-serif">۲۰۲ درس</p>
          </div>
          <div className="bg-white flex justify-center items-center gap-2 w-28 h-12 rounded-full">
            <img className="w-5 h-5" src="/public/clock.png" alt="Clock" />
            <p className="text-black font-serif">۱۴ ساعت</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
