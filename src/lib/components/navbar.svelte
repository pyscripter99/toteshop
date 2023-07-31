<script lang="ts">
	import {
		AppBar,
		LightSwitch,
		popup,
		type PopupSettings,
		storePopup
	} from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import Divider from '$lib/components/divider.svelte';

	const popupCart: PopupSettings = {
		event: 'click',
		target: 'popupCart',
		placement: 'bottom-end'
	};
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
		<a href="/" class="text-xl font-bold btn sm:text-3xl">Uncomfortable Shoes</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<button class="btn-icon variant-soft"
			><i class="fa-solid fa-bag-shopping fa-lg" use:popup={popupCart} /></button
		>
		<div class="card p-4 w-72 shadow-xl" data-popup="popupCart">
			<div>
				<div class="flex flex-row justify-between items-center">
					<h3 class="font-bold text-2xl">Cart</h3>
					<p class="opacity-75">2 Items</p>
				</div>
				<Divider />
				<div class="flex flex-col gap-2">
					{#each [1, 2] as i}
						<a
							href="#0"
							class="flex flex-row gap-2 items-center hover:bg-surface-700 p-2 rounded-xl"
						>
							<img src="/shoes.jpg" alt="Shoes" class="w-16 h-16 object-cover rounded-lg" />
							<div class="flex flex-col">
								<h3 class="text-lg font-bold">Maxius Uncomfort</h3>
								<div class="flex flex-row justify-between">
									<p>The latest i...</p>
									<p class="opacity-75">$26.75</p>
								</div>
							</div>
						</a>
					{/each}
				</div>
				<Divider />
				<button class="btn variant-filled-secondary w-full rounded-xl"
					><span>Checkout</span><i class="fa-solid fa-arrow-right" /></button
				>
			</div>
			<div class="arrow bg-surface-100-800-token" />
		</div>
		<button class="btn-icon variant-soft"><i class="fa-solid fa-user fa-lg" /></button>
	</svelte:fragment>
</AppBar>
