import { int } from "../data";
import { displayTimer } from "../logic/logic";

export const startTimerHandler = () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
};
