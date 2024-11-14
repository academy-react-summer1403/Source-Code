import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ChangePage = ({ pageCount, currentPage, onChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageCount) {
      onChange("PageNumber", newPage);
    }
  };
  return (
    <div className="gap-2 flex flex-row-reverse items-center justify-center border-t border-gray-200 px-4 sm:px-8">
      <div className="flex w-0">
        <Button
          variant="text"
          className="inline-flex items-center border-t-2 border-transparent pt-4 px-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          <ArrowRightIcon
            strokeWidth={2}
            className="h-4 w-4 ml-3 text-gray-400"
          />
          بعدی
        </Button>
      </div>
      <div className="hidden md:flex">
        {Array.from({ length: pageCount }, (_, index) => (
          <IconButton
            key={index + 1}
            variant={currentPage === index + 1 ? "filled" : "text"}
            onClick={() => handlePageChange(index + 1)}
            className={`rounded-full ${currentPage === index + 1
                ? "bg-asBlack-900 text-asWhite"
                : "text-asBlack-300"
              } hover:bg-gray-500`}
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
      <div className="flex ">
      <Button
          variant="text"
          className="inline-flex items-center border-t-2 border-transparent pt-4 px-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          قبلی
          <ArrowLeftIcon
            strokeWidth={2}
            className="h-4 w-4 mr-3 text-gray-400"
          />
        </Button>
      </div>
    </div>
  );
};

export default ChangePage;
