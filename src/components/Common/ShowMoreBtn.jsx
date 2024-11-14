import { Link } from "react-router-dom";


const ShowMoreBtn = (props) => {
  const { linkTo = "" } = props;
  
  return (
    <div className="flex justify-center items-center mx-[auto] border sm:w-20 w-12 h-6 sm:h-8 p-3 sm:text-lg text-xs leading-5 sm:leading-8 border-header text-header shadow-md text-center rounded-xl sm:rounded-2xl hover:font-bold ">
      <button>
        <Link to={`${linkTo}`}>بیشتر</Link>
      </button>
    </div>
  );
};

export default ShowMoreBtn;