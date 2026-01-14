<script>
	import { page } from '$app/stores';
	import { inventory } from '$lib/inventory.js'; // 👈 Import Data
	import { error } from '@sveltejs/kit';

	// 1. Get the ID from URL
	const productId = $page.params.id;

	// 2. Find the matching product
	const productData = inventory.find((p) => p.id === productId);

	// 3. Handle 404 (Safety Check)
	if (!productData) {
		throw error(404, {
			message: 'SHIPMENT_NOT_FOUND'
		});
	}
</script>

<div class="mx-auto min-h-screen max-w-4xl px-6 py-20">
	<a
		href="/"
		class="hover:text-shipping-orange mb-12 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase transition-colors"
	>
		<span>←</span> Return to Dispatch
	</a>

	<article
		class="relative overflow-hidden border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12"
	>
		<span
			class="pointer-events-none absolute top-12 right-12 rotate-12 text-9xl font-black text-black/5 select-none"
		>
			PAID
		</span>

		<header
			class="mb-8 flex flex-col justify-between gap-6 border-b-4 border-black pb-8 md:flex-row"
		>
			<div>
				<span
					class="bg-black px-3 py-1 font-mono text-xs font-bold tracking-wide text-white uppercase"
				>
					{productData.type}
				</span>
				<h1 class="mt-4 text-4xl leading-none font-black tracking-tight uppercase md:text-5xl">
					{productData.name}
				</h1>
			</div>

			<div class="space-y-2 border-l-2 border-black/10 pl-6 text-right font-mono text-xs">
				<p><span class="text-zinc-500">REF:</span> {productData.id}</p>
				<p><span class="text-zinc-500">VER:</span> {productData.version}</p>
				<p><span class="text-zinc-500">DATE:</span> {productData.releaseDate}</p>
			</div>
		</header>

		<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
			<div class="col-span-2 space-y-8">
				<section>
					<h2
						class="mb-4 flex items-center gap-2 border-b-2 border-black pb-2 text-lg font-bold uppercase"
					>
						<span class="bg-shipping-orange h-2 w-2"></span> Specifications
					</h2>
					<ul class="space-y-3 font-mono text-sm text-zinc-600">
						{#each productData.specs as spec}
							<li class="flex items-start gap-3">
								<span class="text-black/30">>></span>
								{spec}
							</li>
						{/each}
					</ul>
				</section>

				<section>
					<h2
						class="mb-4 flex items-center gap-2 border-b-2 border-black pb-2 text-lg font-bold uppercase"
					>
						<span class="h-2 w-2 bg-blue-600"></span> Installation
					</h2>
					<div
						class="overflow-x-auto border border-black/10 bg-zinc-100 p-4 font-mono text-xs text-zinc-700"
					>
						<pre>{productData.install}</pre>
					</div>
				</section>

				{#if productData.codeSnippet}
					<section>
						<h2
							class="mb-4 flex items-center gap-2 border-b-2 border-black pb-2 text-lg font-bold uppercase"
						>
							<span class="h-2 w-2 bg-purple-600"></span> Preview
						</h2>
						<div
							class="overflow-x-auto rounded border border-black bg-zinc-900 p-4 font-mono text-xs text-green-400"
						>
							<pre>{productData.codeSnippet}</pre>
						</div>
					</section>
				{/if}
			</div>

			<div class="space-y-6">
				<div class="border border-black bg-zinc-50 p-6 text-center">
					<p class="mb-2 font-mono text-xs tracking-wide text-zinc-500 uppercase">Net Weight</p>
					<p class="text-3xl font-black">{productData.size}</p>
				</div>

				<button
					class="bg-shipping-orange w-full cursor-pointer border-2 border-black px-6 py-4 font-mono font-bold tracking-wider text-black uppercase transition-all hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
				>
					Download_PKG
				</button>

				<button
					class="w-full cursor-pointer border-2 border-dashed border-zinc-300 bg-transparent px-6 py-3 font-mono text-xs font-bold text-zinc-500 uppercase transition-colors hover:border-black hover:text-black"
				>
					View_Source
				</button>
			</div>
		</div>

		<footer
			class="mt-12 flex items-center justify-between border-t border-black/10 pt-6 font-mono text-[10px] text-zinc-400 uppercase"
		>
			<p>AUTHORIZED BY: FLOFLUX DISTRO</p>
			<div
				class="h-4 w-32 bg-current opacity-20"
				style="background-image: repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px);"
			></div>
		</footer>
	</article>
</div>
