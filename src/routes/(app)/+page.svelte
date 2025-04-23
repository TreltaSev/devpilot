<script lang="ts">
	import {getCurrentWindow} from "@tauri-apps/api/window"

	getCurrentWindow().onResized(() => {
		console.log("resized")
	})
</script>


<span class="mt-20">Testing</span>