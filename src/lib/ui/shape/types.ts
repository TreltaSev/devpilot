import type { tFrameProps } from "@ui/frame/types";
import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tShapeProps = HTMLAttributes<HTMLDivElement> & tFrameProps &{
    // Classes:
    
    // Extra Props Here:

};
export type tShapeCircleProps = HTMLAttributes<HTMLDivElement> & tFrameProps & {
    // Classes:
    
    circleClass?: ClassValue,
    // Extra Props Here:
};