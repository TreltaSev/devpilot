import type { ClassValue, HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

export type tTitlebarProps = HTMLAttributes<HTMLDivElement> & {    
    // Extra Props Here:

};
export type tTitlebarWindowControlProps = HTMLButtonAttributes & {
    // Classes:

    // --- Default Classes:
    windowControlClass?: ClassValue,
    
    // Extra Props Here:
};