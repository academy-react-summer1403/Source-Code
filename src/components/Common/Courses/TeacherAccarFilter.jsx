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
const TeacherAccarFilter = ({ openSitu, filterObj, filterChange }) => {
  const [FilterSitu, setFilterSitu] = useState("hidden");

  const [openAcc5, setOpenAcc5] = React.useState(true);

  const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);

  useEffect(() => {
    if (openSitu === true) {
      setFilterSitu("absolute right-5");
    } else if (openSitu === false) {
      setFilterSitu("hidden");
    }
  }, [openSitu]);
  const handleTeachersCheckChange = (checked, index) => {
    const newTeachersList = filterObj?.Teachers.map((item, itemIndex) => {
      item.checked = false;
      if (itemIndex == index) item.checked = checked;
      return item;
    });
    filterChange("Teachers", newTeachersList);
  };
  return (
    <Accordion open={openAcc5}>
      <AccordionHeader
        onClick={handleOpenAcc5}
        className="font-iranSans text-base border-0 flex hover:text-none text-asBlack-100 border-b"
      >
        <span className=" flex-grow text-right">اساتید دوره</span>
        <ArrowDown />
      </AccordionHeader>
      <AccordionBody>
        <Card className="shadow-none border-b rounded-none bg-cardBg">
          <List className="p-0 shadow-none">
            {filterObj &&
              filterObj?.Teachers?.map((item, index) => (
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
                          handleTeachersCheckChange(event.target.checked, index)
                        }
                      />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
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
  );
};

export default TeacherAccarFilter;
