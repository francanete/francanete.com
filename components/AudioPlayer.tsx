import React, { useState, useRef, useEffect } from "react";
// import styles from "../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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
    <div
      // className={styles.audioPlayer}
      className="flex flex-col items-center w-full my-12 shadow-md p-4 rounded-lg dark:bg-slate-200/10"
    >
      <div className="">
        <p className="">Title</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-full">
        <audio
          ref={audioPlayer}
          src="https://d3ctxlq1ktw2nl.cloudfront.net/staging/2022-3-27/262028319-44100-2-e242930f23489.m4a"
          preload="metadata"
        ></audio>

        {/* <audio
        ref={audioPlayer}
        src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
        preload="metadata"
      ></audio> */}
        <button
          // className={styles.forwardBackward}
          className="bg-none text-xs border-solid border-2 border-sky-900/10 active:animate-ping shadow-md p-2 rounded-full flex items-center cursor-pointer dark:bg-slate-200/30"
          onClick={backThirty}
        >
          -30
        </button>
        <button
          onClick={togglePlayPause}
          // className={styles.playPause}
          className="border-none rounded w-16 h-16 text-4xl flex justify-center items-center ml-2"
        >
          {isPlaying ? (
            <FaPause size={50} className="animate-pulse" />
          ) : (
            <FaPlay size={50} className="relative left-1" />
          )}
        </button>
        {/* <button
        className="bg-none border-none flex items-center cursor-pointer"
        onClick={forwardThirty}
      >
        30 <BsArrowRightShort />
      </button> */}

        {/* current time */}
        <div
          // className={styles.currentTime}
          className="text-lg ml-6"
        >
          {calculateTime(currentTime)}
        </div>

        {/* progress bar */}
        <div className="w-full px-4">
          <input
            type="range"
            // className={styles.progressBar}
            className=" appearance-none bg-slate-400 rounded-lg relative w-full h-3 outline-none"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        {/* duration */}
        <div
          // className={styles.duration}
          className="text-lg"
        >
          {duration && !isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
    </div>
  );
};
