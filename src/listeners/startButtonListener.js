import { startTimerHandler } from "../handlers/startButtonHandler";

export const startTimerHandler = () => {
    document
        .getElementById("start-timer")
        .addEventListener("click", startTimerHandler);
};
