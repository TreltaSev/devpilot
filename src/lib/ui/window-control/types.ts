import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tWindowControlProps = HTMLAttributes<HTMLDivElement> & {
    // Extra Props Here:
};
export type tWindowControlButtonProps = HTMLAttributes<HTMLDivElement> & {
    // Extra Props Here:
    buttonClass?: ClassValue,
};