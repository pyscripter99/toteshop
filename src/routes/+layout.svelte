<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="sticky top-0 z-50">
	<Navbar />
</div>
<slot />
