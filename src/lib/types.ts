/* eslint-disable @typescript-eslint/no-explicit-any */

export type anyCallable = (...args: any[]) => any;

export type tPassMouseEventsProps = {
    onclick?: anyCallable,
    ondblclick?: anyCallable,
    onmousedown?: anyCallable,
    onmousemove?: anyCallable,
    onmouseout?: anyCallable,
    onmouseover?: anyCallable,
    onmouseup?: anyCallable,
    onwheel?: anyCallable,
    onmouseenter?: anyCallable,
    onmouseleave?: anyCallable,
}