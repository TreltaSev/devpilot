<script lang="ts">
	// --- Components ---
	import { Frame } from '@ui';

	// --- Logic ---
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	let { children, class: className, ...rest }: Props = $props();
</script>

<Frame class={cn(className)} {...rest}>
	{@render children?.()}
</Frame>

<!--@component
    Generated by SvelteForge🔥
-->
