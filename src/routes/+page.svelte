<div class="flex flex-wrap gap-5 m-5 justify-center">
	{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as i}
		<a href={'/item/' + i} class="card card-hover max-w-sm">
			<header class="card-header">
				<img src="/shoes.jpg" alt="" srcset="" class="rounded" />
			</header>
			<section class="p-4">
				<h2 class="text-2xl font-bold">Maxius Uncomfort</h2>
				<p>The latest in uncomfortable shoe ware</p>
			</section>
			<footer class="card-footer w-full flex flex-row flex-nowrap">
				<p>$26.75</p>
				<p class="font-bold ml-auto">Julius Caeser</p>
			</footer>
		</a>
	{/each}
</div>
