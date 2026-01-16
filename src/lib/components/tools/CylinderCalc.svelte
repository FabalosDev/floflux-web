<script>
	// 🧮 SENIOR ENGINEER LOGIC: ISO 1219 PNEUMATICS
	let pressure = 6; // bar
	let bore = 32; // mm
	let stroke = 100; // mm

	// Physics Constants
	const SAFETY_FACTOR = 0.85; // Efficiency loss due to friction

	// Computed Values
	$: area_push = Math.PI * Math.pow(bore / 2, 2);
	$: force_push = (pressure * 0.1 * area_push * SAFETY_FACTOR).toFixed(1); // Newtons
	$: air_consumption = ((area_push * stroke * (pressure + 1)) / 1000 / 1000).toFixed(3); // Liters per cycle
</script>

<div class="border-2 border-black bg-zinc-50 p-6 font-mono text-xs">
	<h3 class="mb-4 border-b-2 border-dashed border-black/20 pb-2 font-bold uppercase text-zinc-500">
		// INPUT_PARAMETERS
	</h3>

	<div class="grid gap-6 md:grid-cols-3">
		<label class="block">
			<span class="mb-1 block font-bold">PRESSURE (BAR)</span>
			<input type="number" bind:value={pressure} class="w-full border border-black bg-white p-2 font-bold focus:bg-shipping-orange/10 focus:outline-none" />
		</label>

		<label class="block">
			<span class="mb-1 block font-bold">BORE Ø (MM)</span>
			<select bind:value={bore} class="w-full border border-black bg-white p-2 font-bold focus:bg-shipping-orange/10 focus:outline-none">
				<option value={16}>16mm</option>
				<option value={20}>20mm</option>
				<option value={25}>25mm</option>
				<option value={32}>32mm</option>
				<option value={40}>40mm</option>
				<option value={50}>50mm</option>
				<option value={63}>63mm</option>
			</select>
		</label>

		<label class="block">
			<span class="mb-1 block font-bold">STROKE (MM)</span>
			<input type="number" bind:value={stroke} class="w-full border border-black bg-white p-2 font-bold focus:bg-shipping-orange/10 focus:outline-none" />
		</label>
	</div>

	<h3 class="mt-6 mb-4 border-b-2 border-dashed border-black/20 pb-2 font-bold uppercase text-zinc-500">
		// CALCULATED_OUTPUT
	</h3>

	<div class="grid gap-4 md:grid-cols-2">
		<div class="bg-black p-4 text-white">
			<span class="block text-[10px] opacity-60">THEORETICAL FORCE (F)</span>
			<span class="text-3xl font-black text-shipping-orange">{force_push} N</span>
		</div>
		<div class="border border-black bg-white p-4">
			<span class="block text-[10px] text-zinc-500">AIR CONSUMPTION / CYCLE</span>
			<span class="text-3xl font-black">{air_consumption} L</span>
		</div>
	</div>
</div>