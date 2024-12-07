import React, { useEffect, useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { ArrowDown } from "../../../../public/svg/ArrowDown";
// import { RangeSlider } from "@mantine/core";

const CourseAccarFilter = ({
  openSitu,
  setOpenSitu,
  filterObj,
  filterChange,
}) => {
  const [FilterSitu, setFilterSitu] = useState("hidden");
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc5, setOpenAcc5] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);

  useEffect(() => {
    if (openSitu === true) {
      setFilterSitu("absolute right-5");
    } else if (openSitu === false) {
      setFilterSitu("hidden");
    }
  }, [openSitu]);

  const handleCategoryCheckChange = (checked, index) => {
    const newcategoryList = filterObj?.category.map((item, itemIndex) => {
      // console.log("cat", newcategoryList);
      if (itemIndex == index) item.checked = checked;
      return item;
    });
    console.log(newcategoryList);
    filterChange("category", newcategoryList);
  };
  const handleTeachersCheckChange = (checked, index) => {
    const newTeachersList = filterObj?.teacher.map((item, itemIndex) => {
      item.checked = false;
      if (itemIndex == index) item.checked = checked;
      return item;
    });
    filterChange("teacher", newTeachersList);
  };
  // const handleTempChange = (priceReange) => {
  //   setValuesSitu(priceReange);
  // };
  const handlePriceChange = (value) => {
    const newPrice = { ...filterObj?.price };
    newPrice.value = value;

    filterChange("price", newPrice);
  };
  return (
    <div
      className={`${FilterSitu} z-10 w-60 lg:flex flex-col gap-2 text-base font-semibold `}
    >
      <div className="flex justify-between mb-2 border border-borderGray shadow-xl bg-cardBg h-12 px-5 items-center rounded-2xl text-sm">
        <div className="flex  gap-2 text-asBlack-100">
          <div
            onClick={() => setOpenSitu(!openSitu)}
            className="lg:hidden flex-col flex justify-center text-asBlack-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
          <span className="text-asBlack-100">فیلتر</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-funnel-fill "
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
          </svg>
        </div>
        <div className="text-asBlack-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </div>
      </div>
      <div className="px-4 bg-cardBg border border-borderGray text-asBlack-100 shadow-xl rounded-2xl">
        <Accordion open={openAcc1}>
          <div className=" items-center border-b ">
            <AccordionHeader
              className="font-iranSans text-base border-0 flex text-asBlack-100 hover:text-none"
              onClick={handleOpenAcc1}
            >
              <span className=" flex-grow text-right">دسته بندی ها</span>
              <ArrowDown />
            </AccordionHeader>
          </div>
          <AccordionBody>
            <Card className="shadow-none border-b rounded-none bg-cardBg ">
              <List className="p-0 shadow-none">
                {filterObj &&
                  filterObj.category.map((item, index) => {
                    return (
                      <ListItem
                        key={index}
                        className="p-0"
                      >
                        <ListItemPrefix className="mr-0">
                          <Checkbox
                            id={item.techName}
                            type="checkbox"
                            checked={item.checked}
                            onChange={(e) =>
                              handleCategoryCheckChange(e.target.checked, index)
                            }
                          />
                        </ListItemPrefix>
                        <label htmlFor={item.techName}>{item.techName}</label>
                      </ListItem>
                    );
                  })}
              </List>
            </Card>
          </AccordionBody>
        </Accordion>
        <Accordion>
          <AccordionHeader
            onClick={handleOpenAcc2}
            className="font-iranSans text-base border-0 flex border-b text-asBlack-100 hover:text-none"
          >
            <span className=" flex-grow text-right">قیمت</span>
            <ArrowDown />
          </AccordionHeader>
          <AccordionBody>
            {filterObj && (
              <Card className="shadow-none border-b rounded-none bg-cardBg ">
                <List dir="ltr" className="py-5 min-w-[100%]  shadow-none ">
                  {/* <RangeSlider
                    minRange={0.2}
                    min={filterObj?.price.min}
                    max={filterObj?.price.max}
                    step={1}
                    defaultValue={[filterObj?.price.min, filterObj?.price.max]}
                    className="w-[87%] mx-auto"
                    onChangeEnd={handlePriceChange}
                  /> */}


                  <div className="flex flex-col gap-2 text-sm text-asBlack-100">
                    <div className="flex flex-row-reverse gap-1">
                      <span>از</span>
                      <span>{filterObj?.price.value[0]}</span>
                      <span>تومان</span>
                    </div>
                    <div className="flex gap-1 flex-row-reverse">
                      {" "}
                      <span>تا</span>
                      <span>{filterObj?.price.value[1]}</span>
                      <span>تومان</span>
                    </div>
                  </div>
                </List>
              </Card>
            )}
          </AccordionBody>
        </Accordion>

        <Accordion open={openAcc5}>
          <AccordionHeader
            onClick={handleOpenAcc5}
            className="font-iranSans text-base border-0 flex hover:text-none text-asBlack-100 border-b"
          >
            <span className=" flex-grow text-right">اساتید دوره</span>
            <ArrowDown />
          </AccordionHeader>
          <AccordionBody>
            <Card className="shadow-none border-b md:h-96 md:overflow-y-scroll md:overflow-x-hidden text-wrap rounded-none bg-cardBg">
              <List className="p-0 shadow-none">
                {filterObj &&
                  filterObj?.teacher?.map((item, index) => (
                    <ListItem className="p-0 hover:bg-checkboxHover">
                      <label
                        htmlFor="vertical-list-react"
                        className="flex w-full cursor-pointer items-center gap-3 pb-1"
                      >
                        <ListItemPrefix className="mr-0">
                          <Checkbox
                            id="vertical-list-react"
                            ripple={false}
                            checked={item.checked}
                            onChange={(event) =>
                              handleTeachersCheckChange(
                                event.target.checked,
                                index
                              )
                            }
                          />
                        </ListItemPrefix>
                        <Typography
                          color="blue"
                          className="font-iranSans text-sm font-medium text-asBlack-200"
                        >
                          {item.fullName}
                        </Typography>
                      </label>
                    </ListItem>
                  ))}
              </List>
            </Card>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export { CourseAccarFilter };
