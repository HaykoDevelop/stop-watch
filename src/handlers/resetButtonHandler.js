import { int } from "../data";
import { timeRef } from "../data";
import { milliseconds } from "../data";
import { seconds } from "../data";
import { minutes } from "../data";
import { hours } from "../data";

export const resetTimerHandler = () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
};
