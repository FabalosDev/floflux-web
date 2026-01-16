<script>
	export let product;

	// 🎨 Internal Logic: Status Colors
	const getStatusColor = (status) => {
		if (status === 'READY_TO_SHIP') return 'bg-ready-green';
		if (status === 'LIVE_BETA') return 'bg-shipping-orange';
		return 'bg-zinc-300';
	};

	// Helper for text formatting
	const cleanName = (text) => text.replace(/_/g, ' ');
</script>

<article
	class="panel-shipping group relative flex h-full flex-col justify-between p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(249,115,22,1)]"
>
	<div class="mb-6 flex items-start justify-between border-b-2 border-dashed border-black/10 pb-4">
		<span
			class="bg-black px-2 py-1 font-mono text-[10px] font-bold text-white uppercase tracking-wider group-hover:bg-shipping-orange transition-colors"
		>
			{product.type}
		</span>
		<span class="font-mono text-xs font-bold text-zinc-400">{product.size}</span>
	</div>

	<div class="mb-8">
		<h2 class="mb-3 text-3xl leading-none font-black uppercase break-words">
			{cleanName(product.name)}
		</h2>
		<p class="font-mono text-sm leading-relaxed text-zinc-600">
			{product.desc}
		</p>
	</div>

	<div class="mt-auto pt-4 border-t border-black/5">
		<div
			class="mb-4 flex items-center gap-2 font-mono text-[10px] font-bold tracking-wider text-zinc-500 uppercase"
		>
			<span class={`h-2 w-2 rounded-full ${getStatusColor(product.status)}`}></span>
			{cleanName(product.status)}
		</div>

		<a href="/pkg/{product.id}" class="btn-factory block w-full text-center">
			Open_Package
		</a>
	</div>
</article>