<script lang="ts">
	// --- Components ---
	import { Flex } from '@ui';
	import { TitlebarWindowControl } from '@components';

	// --- Icons ---
	import IconMinimize from '~icons/mdi/minimize';
	import IconMaximize from '~icons/mdi/maximize';
	import IconRestore from '~icons/uil/window-restore';
	import IconClose from '~icons/material-symbols/close-rounded';

	// --- Logic ---
	import { cn } from '@lib/utils';
	import type { Props } from '..';
	import { setContext } from 'svelte';
	import { getDeviceCtx } from '@lib/ctx';
	import { getCurrentWindow } from '@tauri-apps/api/window';

	const { maximized$ } = getDeviceCtx();

	let { children, class: className }: Props = $props();

	// Class Contexts
	setContext(
		'class-titlebar-window-control',
		'text-white/60 hover:text-white/80 hover:bg-white/10 active:bg-white/20'
	);

	// Minimize the current window
	async function minimize() {
		await getCurrentWindow().minimize();
	}

	// Maximize the current window
	async function maximize() {
		await getCurrentWindow().maximize();
	}

	// Restore the current window to its previous size if maximized
	async function restore() {
		await getCurrentWindow().unmaximize();
	}

	// Close the current window
	async function close() {
		await getCurrentWindow().close();
	}
</script>

<Flex.Row
	class={cn('w-full h-12 border-0 border-b border-depth-2 shrink-0', className)}
	data-tauri-drag-region
>
	<!-- Render children if provided -->
	{@render children?.()}

	<!-- Window Controls -->
	<Flex.Row class="ml-auto shrink-0 [&_svg]:size-5 [&_svg]:shrink-0">
		<!-- Minimize Button -->
		<TitlebarWindowControl onclick={minimize}>
			<IconMinimize />
		</TitlebarWindowControl>

		<!-- Maximize/Restore Button -->
		<TitlebarWindowControl onclick={$maximized$ ? restore : maximize}>
			{#if $maximized$}
				<IconRestore class="size-4!" />
			{:else}
				<IconMaximize class="size-4!" />
			{/if}
		</TitlebarWindowControl>

		<!-- Close Button -->
		<TitlebarWindowControl class="hover:bg-red-400 active:bg-red-400" onclick={close}>
			<IconClose />
		</TitlebarWindowControl>
	</Flex.Row>
</Flex.Row>
