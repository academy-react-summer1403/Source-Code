import React, { useEffect, useState } from 'react';
import GetCourseDetails from '../../core/services/api/courseid';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import favorit from '../../core/services/api/favorit';

const notifyfavorit = () => toast('به علاقه مندی افزوده شد ');

const Header = () => {

  const params = useParams();

  const [coursesId, setCoursId] = useState([])

  const GetCourseId = async () => {
    const res = await GetCourseDetails(params.id)

    setCoursId(res)
  }

  const favoritA = async () => {
    const res = await favorit();
    setCoursId(res);
}


  // console.log(params.id)

  useEffect(() => {
    GetCourseId()
  }
    , []
  )

  const favoritclick = async () => {
    notifyfavorit();
    favoritA();
}

  return (
    <a key={coursesId.courseId} >
      <div className="flex justify-center w-11/12">
        <div className="h-[500px] w-full max-w-4xl mx-auto flex flex-col justify-between items-center text-white p-4 rounded-3xl">
          <img
            src={coursesId.imageAddress ? coursesId.imageAddress : "../../../public/ang.png"}
            className='h-[500px] -mt-4 rounded-3xl w-7/12 lg:w-[850px] 2xl:w-6/12 absolute z-0'
          />
          <div className="flex flex-row justify-start w-full">
            <div className="bg-white z-20 flex px-3 py-2 rounded-full" onClick={favoritclick}>
              <img className="w-5 h-5" src="/public/Vector.png" alt="Vector" />
              {/* <img className="w-5 h-5 hidden" src="/public/Vector.png" alt="Vector" /> */}
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-end items-center gap-4 bg-left-bottom z-20">
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
    </a>
  );
};

export default Header;
