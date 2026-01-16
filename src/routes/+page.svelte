<script>
	import { onMount } from 'svelte';
	import { inventory } from '$lib/inventory.js';
	import ProductCard from '$lib/components/ProductCard.svelte';

	// ✅ CHANGE 1: Accept data from +page.server.js
	export let data;

	// ⏱️ LIVE TELEMETRY
	let now = new Date();
	let mounted = false;

	onMount(() => {
		mounted = true;
		const timer = setInterval(() => {
			now = new Date();
		}, 1000);
		return () => clearInterval(timer);
	});

	$: localTime = now.toLocaleTimeString('en-US', { hour12: false });
	$: utcTime = now.toISOString().split('T')[1].split('.')[0] + 'Z';

  // Add inside your existing <script>
	let latency = 24;

	onMount(() => {
		mounted = true;
		// Update clock
		const timer = setInterval(() => {
			now = new Date();
		}, 1000);

		// 💓 Fake "Heartbeat" for Latency (fluctuates between 20ms and 45ms)
		const pingTimer = setInterval(() => {
			latency = Math.floor(Math.random() * (45 - 20) + 20);
		}, 2000);

		return () => {
			clearInterval(timer);
			clearInterval(pingTimer);
		};
	});
</script>

<div class="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-12 md:py-20">

	<header class="mb-16 border-b-4 border-black pb-8">
		<div class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
			<div>
				<div class="mb-3 flex items-center gap-3">
					<div class="relative flex h-3 w-3">
					  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-ready-green opacity-75"></span>
					  <span class="relative inline-flex rounded-full h-3 w-3 bg-ready-green"></span>
					</div>
					<span class="font-mono text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase">
						System_Online <span class="text-zinc-300">::</span> {mounted ? utcTime : '--:--:--Z'}
					</span>
				</div>
				<h1 class="text-6xl leading-[0.85] font-black tracking-tighter uppercase md:text-9xl">
					Floflux<span class="text-shipping-orange">.Distro</span>
				</h1>
			</div>

			<div class="text-right font-mono text-xs font-medium text-zinc-400 uppercase space-y-1">
				<p>
					<span class="text-zinc-600">OP:</span> FRANK_ABALOS
					<span class="text-zinc-600 mx-1">|</span>
					<span class="text-shipping-orange">{mounted ? localTime : '--:--:--'}</span>
				</p>
				<p>
					<span class="text-zinc-600">LOC:</span> CALABARZON_HQ
				</p>

				<div class="mt-2 inline-flex items-center gap-2 bg-zinc-100 px-2 py-1 border border-zinc-200">
					<span class="h-1.5 w-1.5 rounded-full bg-black"></span>
					<span class="text-black font-bold">v{data.version}</span>
					<span class="text-zinc-400 text-[10px]">ALPHA</span>
				</div>
			</div>
		</div>
	</header>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each inventory as item}
			<ProductCard product={item} />
		{/each}
	</div>

<footer class="mt-20 border-t border-black/10 pt-6">
		<div class="flex flex-col items-center justify-between gap-4 font-mono text-[10px] uppercase md:flex-row">

			<div class="flex items-center gap-3 text-zinc-400">
				<span>© {now.getFullYear()} FABALOS ENG.</span>
				<span class="text-zinc-600">::</span>
				<div class="flex items-center gap-2 text-ready-green">
					<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-current"></span>
					<span>ALL SYSTEMS NORMAL</span>
				</div>
			</div>

			<div class="flex items-center gap-6 text-zinc-500">

				<div class="group flex cursor-help items-center gap-1 hover:text-black">
					<span>LTCY:</span>
					<span class="font-bold tabular-nums text-black group-hover:text-shipping-orange">
						{mounted ? latency : '--'}ms
					</span>
				</div>

				<div class="hidden md:block">
					<span>MEM:</span>
					<span class="font-bold text-black">64MB</span>
				</div>

				<a href="/" class="hover:text-shipping-orange transition-colors">
					Protocol_V4
				</a>
			</div>
		</div>

		<div class="mt-6 h-2 w-full opacity-10"
			 style="background-image: repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%); background-size: 10px 10px;">
		</div>
	</footer>
</div>