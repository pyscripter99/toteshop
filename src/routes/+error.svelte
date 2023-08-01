<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex justify-center items-center h-full flex-col">
	<h1 class="text-8xl font-bold">{$page.status}</h1>
	<p class="text-xl">{$page.error?.message}</p>
</div>
