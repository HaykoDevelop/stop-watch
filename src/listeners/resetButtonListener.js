import { resetTimerHandler } from "../handlers/resetButtonHandler";

export const resetTimerHandler = () => {
    document
        .getElementById("reset-timer")
        .addEventListener("click", resetTimerHandler);
};
