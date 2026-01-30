<script>
	import { page } from '$app/stores';
	import { inventory } from '$lib/inventory.js';
	import { error } from '@sveltejs/kit';

	// 🔌 IMPORT TOOLS
	import CylinderCalc from '$lib/components/tools/CylinderCalc.svelte';
	import CodeSandBox from '$lib/components/labs/CodeSandbox.svelte';

	// 1. Get Data
	const productId = $page.params.id;

	// 2. Find the matching product
	const product = inventory.find((p) => p.id === productId);

	// 3. Safety Check
	if (!product) {
		throw error(404, 'PACKAGE_LOST_IN_TRANSIT');
	}

	// 4. Logic: Define which IDs are interactive apps vs. static files
	const isInteractive = product.id === 'FLO-001' || product.id === 'FLO-004';

	// 5. View State (The "X-Ray" Toggle)
	let showSource = false;
</script>

<div class="mx-auto min-h-screen max-w-5xl px-6 py-20">
	<a href="/" class="group mb-12 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase transition-colors hover:text-black">
		<span class="group-hover:-translate-x-1 transition-transform">←</span> Return to Dispatch
	</a>

	<article class="relative overflow-hiddenQl border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12">

		<header class="mb-12 flex flex-col justify-between gap-6 border-b-4 border-black pb-8 md:flex-row">
			<div>
				<span class="bg-black px-3 py-1 font-mono text-xs font-bold tracking-wide text-white uppercase">
					{product.type}
				</span>
				<h1 class="mt-4 text-4xl leading-none font-black tracking-tight uppercase md:text-6xl">
					{product.name.replace(/_/g, ' ')}
				</h1>
			</div>
			<div class="space-y-2 border-l-2 border-black/10 pl-6 text-right font-mono text-xs text-zinc-500">
				<p>ID: <span class="text-black">{product.id}</span></p>
				<p>VER: <span class="text-black">{product.version}</span></p>
				<p>SIZE: <span class="text-black">{product.size}</span></p>
			</div>
		</header>

		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">

			<div class="lg:col-span-1 space-y-8">
				<section>
					<h3 class="mb-4 font-bold uppercase border-b-2 border-black pb-1">Manifest</h3>
					<p class="font-mono text-sm leading-relaxed text-zinc-600">
						{product.desc}
					</p>
				</section>

				<section>
					<h3 class="mb-4 font-bold uppercase border-b-2 border-black pb-1">Specs</h3>
					<ul class="space-y-2 font-mono text-xs text-zinc-600">
						{#each product.specs as spec}
							<li class="flex items-start gap-2">
								<span class="text-shipping-orange">>></span> {spec}
							</li>
						{/each}
					</ul>
				</section>

				<div class="space-y-4 pt-4 border-t border-black/10">
{#if !isInteractive}
    {#if product.downloadUrl}
        <a
            href={product.downloadUrl}
            download
            class="block w-full text-center bg-black py-4 font-mono font-bold text-white uppercase transition-colors hover:bg-shipping-orange hover:text-black"
        >
            Download_PKG
        </a>
    {:else}
        <button disabled class="w-full cursor-not-allowed bg-zinc-200 py-4 font-mono font-bold text-zinc-400 uppercase">
            Shipment_Pending
        </button>
    {/if}
{/if}

					<button
						on:click={() => showSource = !showSource}
						class="w-full border-2 border-black py-3 font-mono text-xs font-bold uppercase transition-all hover:bg-black hover:text-white"
						class:bg-black={showSource}
						class:text-white={showSource}
					>
						{showSource ? 'Close_Source' : 'View_Source'}
					</button>
				</div>
			</div>

			<div class="lg:col-span-2">
				<div class="mb-4 flex items-center justify-between border-b-2 border-black pb-1">
					<h3 class="font-bold uppercase">
						{#if showSource}
							Source_Code
						{:else}
							{isInteractive ? 'Terminal_Access' : 'File_Preview'}
						{/if}
					</h3>

					{#if isInteractive && !showSource}
						<span class="flex items-center gap-2 font-mono text-[10px] text-ready-green animate-pulse">
							<span class="h-2 w-2 rounded-full bg-ready-green"></span> LIVE_EXECUTION
						</span>
					{/if}
				</div>

				<div class="min-h-[400px]">
  {#if showSource}
    <div class="relative h-full overflow-hidden border border-black bg-zinc-900 p-6 text-xs shadow-inner">
      <div class="absolute top-0 right-0 bg-white/20 px-2 py-1 text-[10px] text-white">EcmaScript_6</div>
      <pre class="h-full overflow-x-auto font-mono text-green-400 leading-relaxed"><code>{product.codeSnippet}</code></pre>
    </div>
  {:else}
    {#if isInteractive}
      {#if product.id === 'FLO-001'}
        <CylinderCalc />
      {:else if product.id === 'FLO-004'}
        <CodeSandBox />
      {/if}
    {:else}
      <div class="relative h-full border border-dashed border-black/30 bg-zinc-50 p-8 flex flex-col items-center justify-center text-center">
        <div class="text-6xl mb-4">📄</div>
        <h4 class="font-bold uppercase">Ready for Transfer</h4>
        <p class="font-mono text-xs text-zinc-500 mt-2 max-w-xs">
          Click "View_Source" to inspect the raw code, or "Download" to acquire the asset.
        </p>
      </div>
    {/if}
  {/if}
</div>
			</div>

		</div>
	</article>
</div>