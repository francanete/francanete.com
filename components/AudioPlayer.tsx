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
    >
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
        onClick={backThirty}
      >
        <BsArrowLeftShort /> 30
      </button>
      <button
        onClick={togglePlayPause}
        // className={styles.playPause}
      >
        {isPlaying ? (
          <FaPause />
        ) : (
          <FaPlay
          // className={styles.play}
          />
        )}
      </button>
      <button
        // className={styles.forwardBackward}
        onClick={forwardThirty}
      >
        30 <BsArrowRightShort />
      </button>

      {/* current time */}
      <div
      // className={styles.currentTime}
      >
        {calculateTime(currentTime)}
      </div>

      {/* progress bar */}
      <div>
        <input
          type="range"
          // className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>

      {/* duration */}
      <div
      // className={styles.duration}
      >
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};
