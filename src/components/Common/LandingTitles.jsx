const LandingTitles = (props) => {
  const { title = "", subtitle = "", className } = props;
  const classnames = `flex flex-col justify-center lg:p-4 items-center py-3 gap-y-3 border-borderL text-header bg-buttonBg md:w-64 w-52 h-[auto] mx-auto rounded-lg shadow-md ${className}`;
  //  w-[200px] h-[auto]
  return (
    <div className={classnames}>
      <h2 className=" font-bold sm:text-xl text-nowrap text-lg lg:text-2xl text-center">{`${title}`}</h2>
      {subtitle && (
        <h3 className=" text-xs text-center lg:text-sm text-nowrap">{`${subtitle}`}</h3>
      )}
    </div>
  );
};

export default LandingTitles;