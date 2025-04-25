<script lang="ts">
	// Import Tailwind Configuration & Styling
	import '../app.css';

	// Components
	import { Flex, WindowControl } from '@ui';
	import { Titlebar } from '@components';

	// Logic
	import { getCurrentWindow } from "@tauri-apps/api/window"
	import { onMount } from 'svelte';

	// Get children from props
	let { children } = $props();


	let maximized: boolean = $state(false);

</script>

<!-- Window Container (Holds Everything) -->
<Flex.Row class="size-full bg-component-backdrop rounded-xl overflow-hidden ">
	 
	<!-- Side Bar -->
	<Flex.Col class="h-full w-12 bg-component-sidebar border-0 border-r border-depth-2" ></Flex.Col>

	<!-- Holds Main Content -->
	<Flex.Col class="size-full">
		<!-- Plane Selector -->
		<Titlebar/>

		<!-- Plane Quick Access -->
		<Flex.Row class="w-full h-12 border-0 border-b border-depth-2"></Flex.Row>

		<!-- Plane Sections -->
		<Flex.Row class="size-full">
			<!-- Wrapper, show children -->
			{@render children?.()}
		</Flex.Row>
	</Flex.Col>

	
</Flex.Row>
