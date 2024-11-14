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

  import { ArrowDown } from "../../../assets/image/Svg/ArrowDown";


const PriceAccarFilter = ({
    openSitu,
    setOpenSitu,
    filterObj,
    filterChange,
  }) => {
    const [FilterSitu, setFilterSitu] = useState("hidden");
    const [Cost, setCost] = useState();
    
    const [openAcc1, setOpenAcc1] = React.useState(true);
    const [openAcc2, setOpenAcc2] = React.useState(true);
    const [openAcc3, setOpenAcc3] = React.useState(true);
    const [openAcc4, setOpenAcc4] = React.useState(true);
    const [openAcc5, setOpenAcc5] = React.useState(true);
  
    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
    const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);
    const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);
  
    useEffect(() => {
      if (openSitu === true) {
        setFilterSitu("absolute right-5");
      } else if (openSitu === false) {
        setFilterSitu("hidden");
      }
    }, [openSitu]);
   
    return ( 
        <Accordion open={openAcc2}>
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
                <RangeSlider
                  minRange={0.2}
                  min={filterObj?.price.min}
                  max={filterObj?.price.max}
                  step={1}
                  defaultValue={[filterObj?.price.min, filterObj?.price.max]}
                  className="w-[87%] mx-auto"
                  onChangeEnd={handlePriceChange}
                />
                <div className="flex flex-col gap-2 text-sm text-asBlack-100">
                  <div className="flex flex-row-reverse gap-1">
                    <span>از</span>
                    <span>{filterObj.price.value[0]}</span>
                    <span>تومان</span>
                  </div>
                  <div className="flex gap-1 flex-row-reverse">
                    {" "}
                    <span>تا</span>
                    <span>{filterObj.price.value[1]}</span>
                    <span>تومان</span>
                  </div>
                </div>

              </List>
            </Card>
          )}
        </AccordionBody>
      </Accordion>
     );
}
 
export default PriceAccarFilter;