<script lang="ts">
	// Import Tailwind Configuration & Styling
	import '../app.css';

	// Components
	import { Flex } from '@ui';
	import { Titlebar } from '@components';

	// Logic
	import { setDeviceCtx } from '@lib/ctx';
	import { cn } from '@lib/utils';

	// Get children from props
	let { children } = $props();

	// Reactive store for maximized state
	const { maximized$ } = setDeviceCtx();
	
</script>

<!-- Window Container (Holds Everything) -->
<Flex.Row class={cn("size-full bg-component-backdrop overflow-hidden", $maximized$ && 'rounded-none', !$maximized$ && 'rounded-none')}>
	<!-- Side Bar -->
	<Flex.Col class="h-full w-12 bg-component-sidebar border-0 border-r border-depth-2">
	</Flex.Col>

	<!-- Holds Main Content -->
	<Flex.Col class="size-full">
		<!-- Plane Selector -->
		<Titlebar />

		<!-- Plane Quick Access -->
		<Flex.Row class="w-full h-12 shrink-0 border-0 border-b border-depth-2"></Flex.Row>

		<!-- Plane Sections -->
		<Flex.Row class="size-full">
			<!-- Wrapper, show children -->
			{@render children?.()}
		</Flex.Row>
	</Flex.Col>
</Flex.Row>
