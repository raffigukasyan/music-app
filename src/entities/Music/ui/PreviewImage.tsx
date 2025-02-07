import { FC } from "react";

import { Bars } from "react-loader-spinner";

import { Icon } from "@/shared";

interface IPreviewImage {
  src: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  isActive: boolean;
  isPlaying: boolean;
}

export const PreviewImage: FC<IPreviewImage> = ({
  src,
  onClick,
  isActive,
  isPlaying,
  className,
}): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={`relative max-w-20 max-h-20 group cursor-pointer  ${className}`}
    >
      <img
        src={src}
        className={"rounded-2xl object-cover w-full h-auto"}
        alt=""
      />
      {isActive ? (
        <>
          <div
            className={
              "absolute top-0 w-full h-full rounded-2xl bg-black opacity-40"
            }
          ></div>
          {isPlaying ? (
            <Bars
              wrapperClass={
                "absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              }
              height="25"
              color={"#2fd973"}
              width="25"
            />
          ) : (
            <div
              className={
                "absolute z-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between gap-x-0.5"
              }
            >
              {Array.from({ length: 5 }).map(() => {
                return <div className={"w-1 h-[3px] bg-myGreen"}></div>;
              })}
            </div>
          )}
          <div
            className={
              "absolute z-20 flex justify-center items-center group-hover:opacity-100 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-myGreen rounded-full"
            }
          >
            <Icon
              className={"w-6 h-6 text-myBlack transition-opacity"}
              type={isPlaying ? "pause" : "play"}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className={
              "absolute top-0 w-full h-full rounded-2xl bg-black group-hover:opacity-40 opacity-0 transition-opacity"
            }
          ></div>
          <Icon
            className={
              "absolute z-[60] group-hover:opacity-100 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 text-myGreen transition-opacity"
            }
            type={"play"}
          />
        </>
      )}
    </div>
  );
};
