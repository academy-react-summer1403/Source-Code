export default function MainContent() {
  return (
    <div className="w-4/5 flex flex-col justify-center gap-4 p-4 m-auto">
      <div>
        <h3 className="font-bold">دوره جامع .net core صفر تا صد</h3>
      </div>
      <div className="">
        <p className="text-gray-600">
          محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
          تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
          جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
          پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
          کدنویسی پیشرفته و تمیز.
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-between gap-3">
          <div className="flex flex-row justify-between gap-1">
            <span>
              <img src="/public/star.png"></img>
            </span>
            <span>
              <img className="" src="/public/fullStar.png"></img>
            </span>
            <span>
              <img src="/public/fullStar.png"></img>
            </span>
            <span>
              <img src="/public/fullStar.png"></img>
            </span>
            <span>
              <img src="/public/fullStar.png"></img>
            </span>
          </div>
          <div>
            <p>امتیاز 20 نفر</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white py-1 px-4 rounded-3xl text-center font-serif">
              ثبت دیدگاه
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <div>
            <p>آیا از این دوره راضی بودید؟</p>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <button className="bg-gray-200 text-white py-2 px-4 rounded-3xl text-center font-serif">
              <img src="/public/like.png"></img>
              <span>22</span>
            </button>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <button className="bg-gray-200 text-white py-2 px-4 rounded-3xl text-center font-serif">
              <img src="/public/dislike.png"></img>
              <span>0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
