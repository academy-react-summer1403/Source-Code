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

const CategoryAccarFilter = ({ openSitu, filterObj, filterChange }) => {
  const [FilterSitu, setFilterSitu] = useState("hidden");
  const [openAcc1, setOpenAcc1] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);

  useEffect(() => {
    if (openSitu === true) {
      setFilterSitu("absolute right-5");
    } else if (openSitu === false) {
      setFilterSitu("hidden");
    }
  }, [openSitu]);

  const handleCategoryCheckChange = (checked, index) => {
    const newcategoryList = filterObj?.category.map((item, itemIndex) => {
      console.log("cat", newcategoryList);
      if (itemIndex == index) item.checked = checked;
      return item;
    });
    filterChange("category", newcategoryList);
  };

  return (
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
              filterObj.category.map((item, index) => (
                <ListItem className="p-0 hover:bg-checkboxHover">
                  <label
                    htmlFor="vertical-list-react"
                    className="flex w-full cursor-pointer items-center gap-3 pb-1"
                  >
                    <ListItemPrefix className="mr-0 ">
                      <Checkbox
                        id="vertical-list-react"
                        ripple={false}
                        checked={item?.checked}
                        onChange={(event) =>
                          handleCategoryCheckChange(event.target.checked, index)
                        }
                        value={item.index}
                        className="hover:before:opacity-0"
                        containerProps={{
                          className: "p-0",
                        }}
                        onMouseUp={handlePriceChange}
                      />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="font-iranSans text-sm font-medium text-asBlack-200"
                    >
                      {item?.techName}
                    </Typography>
                  </label>
                </ListItem>
              ))}
          </List>
        </Card>
      </AccordionBody>
    </Accordion>
  );
};

export default CategoryAccarFilter;
