import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import ButtonToContent from "./ButtonToContent";

interface IAudioPlayerProps {
  src?: string;
  title?: string;
  guest?: string;
}

export const AudioPlayer = ({
  title = "Your podcast title goes here",
  src = "https://d3ctxlq1ktw2nl.cloudfront.net/staging/2022-3-27/262028319-44100-2-e242930f23489.m4a",
  guest,
}: IAudioPlayerProps) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const calculateDurationLeft = () => {
    const durationLeft = duration - currentTime;
    return calculateTime(durationLeft);
  };

  // create a function to check the breakpoint according to the window width
  const checkBreakpoint = () => {
    if (window.innerWidth < 768) {
      return "xs";
    } else if (window.innerWidth < 992) {
      return "sm";
    } else if (window.innerWidth < 1200) {
      return "md";
    } else {
      return "lg";
    }
  };

  // references
  const audioPlayer = useRef() as React.MutableRefObject<HTMLAudioElement>; // reference our audio component
  const progressBar = useRef<any>(); // reference our progress bar
  const animationRef = useRef<any>(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current?.duration);
    setDuration(seconds);
    console.log(audioPlayer.current.duration);
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 flex-col md:flex-row items-center w-full my-12 border border-solid border-slate-300/30 hover:border-slate-300/70 shadow-md p-4 rounded-lg dark:bg-slate-200/10">
        <div>
          <img
            className="w-36 rounded-md"
            src="/img/podcast-cover.jpeg"
            alt="Fran on coding"
          />
        </div>
        <div className="w-full">
          <div className="flex gap-8 items-center">
            <div className=" w-20 shadow-md p-4 rounded-full hidden md:block">
              <button
                onClick={togglePlayPause}
                className="border-none rounded flex justify-center items-center "
              >
                {isPlaying ? (
                  <FaPause size={50} className="animate-pulse" />
                ) : (
                  <FaPlay size={50} className="relative left-1" />
                )}
              </button>
            </div>
            <div className="">
              <h3 className="">{title}</h3>
              <p className=" text-base">Featuring: {guest}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-full">
            <audio ref={audioPlayer} src={src} preload="metadata"></audio>

            {/* <button
              onClick={togglePlayPause}
              className="border-none rounded w-16 h-16 text-4xl flex justify-center items-center ml-2"
            >
              <div className="shadow-md p-4 rounded-full">
              {isPlaying ? (
                <FaPause size={50} className="animate-pulse" />
              ) : (
                <FaPlay size={50} className="relative left-1" />
              )}
            </div>
            </button> */}
            {/* <button
            className="bg-none border-none flex items-center cursor-pointer"
            onClick={forwardThirty}
          >
            30 <BsArrowRightShort />
          </button> */}

            {/* <div className="text-lg ml-6">{calculateTime(currentTime)}</div> */}
            <div className="flex flex-col w-full mt-4 px-4">
              <input
                type="range"
                className=" w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
              <span className="text-sm ml-auto relative top-1">
                {duration && !isNaN(duration) && calculateDurationLeft()}
              </span>
            </div>

            <div className="flex items-center gap-3 text-lg">
              <button
                className="bg-none text-xs border-solid border-2 border-sky-900/10 active:animate-ping shadow-md p-2 rounded-full flex items-center cursor-pointer dark:bg-slate-200/30"
                onClick={backThirty}
              >
                -30
              </button>
              {/* {duration && !isNaN(duration) && calculateDurationLeft()} */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-20 shadow-md p-4 rounded-full relative bottom-20 md:hidden">
        <button
          onClick={togglePlayPause}
          className="border-none rounded flex justify-center items-center"
        >
          {isPlaying ? (
            <FaPause size={50} className="animate-pulse" />
          ) : (
            <FaPlay size={50} className="relative left-1" />
          )}
        </button>
      </div>
    </div>
  );
};
