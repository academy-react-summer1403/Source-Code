// import { Button } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

function BackToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      {scroll.y > 450 && (
        <div
          className="border fixed bottom-7 right-12 cursor-pointer text-asWhite p-2 bg-asBlack-500 rounded-full"
          onClick={() => scrollTo({ y: 0 })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="animate-bounce  bi bi-arrow-up-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
            />
          </svg>
        </div>
      )}
    </>
  );
}
export default BackToTop;
