import { pauseTimeHandler } from "../handlers/pauseButtonHandler";

export const pauserTimeHandler = () => {
    document
        .getElementById("pause-timer")
        .addEventListener("click", pauseTimeHandler);
};
