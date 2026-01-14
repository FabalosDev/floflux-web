<script>
  // 📦 INLINE INVENTORY (Safe Mode)
  const inventory = [
    {
      id: 'FLO-001',
      name: 'Fabalos_Pricing_Table',
      type: 'SVELTE COMPONENT',
      status: 'READY_TO_SHIP',
      size: '2.4KB',
      desc: 'High-conversion pricing UI with toggle states.'
    },
    {
      id: 'FLO-002',
      name: 'Supabase_Auth_Starter',
      type: 'BOILERPLATE',
      status: 'PACKING...',
      size: '14MB',
      desc: 'Pre-configured auth flow with RLS policies.'
    },
    {
      id: 'FLO-003',
      name: 'Industrial_Icons_Pack',
      type: 'ASSETS',
      status: 'BACKORDERED',
      size: '42MB',
      desc: 'Vector set for manufacturing interfaces.'
    }
  ];
</script>

<div class="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-20">

  <header class="mb-16 flex flex-col items-end justify-between gap-6 border-b-4 border-black pb-8 md:flex-row">
    <div>
      <div class="mb-2 flex items-center gap-3">
        <div class="bg-shipping-orange h-4 w-4 animate-pulse"></div>
        <span class="font-mono text-xs font-bold tracking-widest text-zinc-500">SYSTEM_OPERATIONAL</span>
      </div>
      <h1 class="text-6xl leading-none font-black tracking-tighter uppercase md:text-8xl">
        FLOFLUX<span class="text-shipping-orange">.DISTRO</span>
      </h1>
    </div>

    <div class="space-y-1 text-right font-mono text-xs opacity-60">
      <p>LOC: CALABARZON_NODE</p>
      <p>OP: FRANK_ABALOS</p>
    </div>
  </header>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each inventory as item}
      <article class="panel-shipping group relative flex h-full flex-col p-6 transition-transform duration-200 hover:-translate-y-1">
        <div class="mb-6 flex items-start justify-between border-b border-black/10 pb-4 font-mono text-[10px] tracking-wider uppercase">
          <span class="border border-black/5 bg-gray-100 px-2 py-1">{item.type}</span>
          <span class="mt-1 opacity-50">{item.size}</span>
        </div>

        <h2 class="group-hover:text-shipping-orange mb-3 text-2xl leading-tight font-bold transition-colors">
          {item.name}
        </h2>
        <p class="mb-8 text-sm leading-relaxed text-zinc-500">
          {item.desc}
        </p>

        <div class="mt-auto flex items-center justify-between border-t border-dashed border-black/20 pt-4">
          <div class="flex items-center gap-2 font-mono text-xs font-bold text-zinc-600">
            <span class="h-1.5 w-1.5 rounded-full {item.status === 'READY_TO_SHIP' ? 'bg-ready-green' : 'bg-yellow-500'}"></span>
            {item.status === 'READY_TO_SHIP' ? 'IN STOCK' : 'PENDING'}
          </div>

          <a href="/pkg/{item.id}" class="btn-factory block w-full text-center md:w-auto">
            Access_File
          </a>
        </div>
      </article>
    {/each}
  </div>
</div>