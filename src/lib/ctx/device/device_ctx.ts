/* eslint-disable @typescript-eslint/no-explicit-any */
import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';
import { getCurrentWindow } from '@tauri-apps/api/window';



export function createDeviceData() {
    let maximized$: Writable<boolean> = writable(false);

    // Set the maximized value initially
    getCurrentWindow().isMaximized().then((initial) => {
        maximized$.set(initial)
    })

    // Listen for window resize events to update maximized state
	getCurrentWindow().onResized(async () => {
		maximized$.set(await getCurrentWindow().isMaximized())
	});

	return {
		maximized$
	};
}

export function getDeviceData() {
	const NAME = 'device-data' as const;

	return {
		NAME
	};
}

export function setDeviceCtx() {
	const { NAME } = getDeviceData();

	const platform = {
		...createDeviceData()
	};

	setContext(NAME, platform);

	return {
		...platform
	};
}

type GetDeviceReturn = ReturnType<typeof setDeviceCtx>;
export function getDeviceCtx() {
	const { NAME } = getDeviceData();
	return getContext<GetDeviceReturn>(NAME);
}

