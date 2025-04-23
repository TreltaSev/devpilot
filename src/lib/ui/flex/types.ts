import type { HTMLAttributes } from 'svelte/elements';
import type { tPassMouseEventsProps } from '@lib/types';

export type tFlexProps = HTMLAttributes<HTMLDivElement> &
	tPassMouseEventsProps & {
		// Extra Props Here:
	};

export type tFlexColumnProps = HTMLAttributes<HTMLDivElement> &
	tPassMouseEventsProps & {
		// Extra Props Here:
	};
export type tFlexRowProps = HTMLAttributes<HTMLDivElement> &
	tPassMouseEventsProps & {
		// Extra Props Here:
	};
