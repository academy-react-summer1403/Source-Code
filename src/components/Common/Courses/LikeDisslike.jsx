import * as React from "react";
import { Badge, IconButton } from "@material-tailwind/react";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import toast, { Toaster } from "react-hot-toast";
import http from "../../../core/services/interceptor";

const LikeDisslike = ({
  id,
  likeCount,
  dissLikeCount,
  onLikeChange,
  isLiked,
  isDissliked,
}) => {
  const handleLike = (id) => {
    onLikeChange(id, "like");
  };
  const handleDisLike = (id) => {
    onLikeChange(id, "dislike");
  };
  return (
    <div className="flex flex-col gap-3 items-center">
      <div>
        <Badge
          content={dissLikeCount}
          placement="bottom-start"
          className="bg-gray-700 min-w-[20px] min-h-[20px] text-center"
        >
          <IconButton
            onClick={() => handleDisLike(id)}
            className={`rounded-xl w-8 h-8 bg-LikeBg`}
          >
            <IconThumbDown
              className={` ${
                isDissliked ? "text-red-600" : "text-asBlack-100"
              } `}
            ></IconThumbDown>
          </IconButton>
        </Badge>
      </div>
      <div>
        <Badge
          content={likeCount}
          placement="bottom-start"
          className="bg-gray-700 min-w-[20px] min-h-[20px] text-center"
        >
          <IconButton
            onClick={() => handleLike(id)}
            className={`rounded-xl  w-8 h-8 bg-LikeBg`}
          >
            <IconThumbUp
              className={` ${isLiked ? "text-green-600" : "text-asBlack-100"} `}
            ></IconThumbUp>
          </IconButton>
        </Badge>
      </div>
    </div>
  );
};

export { LikeDisslike };