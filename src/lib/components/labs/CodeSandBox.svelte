<script lang="ts">
  let code = `<h1>Hello Lab</h1>
<p>Try editing this...</p>
<style>
  h1 { color: #ff7a18; font-family: sans-serif; }
</style>`;

  let iframe: HTMLIFrameElement;
  let containerHeight = 300;
  const SCALE_FACTOR = 0.5; // 50% Zoom out para "cutesy" miniature look

  function updateHeight() {
    if (iframe && iframe.contentWindow) {
      // Kunin ang actual height ng content
      const scrollHeight = iframe.contentWindow.document.body.scrollHeight;

      // Calculate height base sa scale (scrollHeight * scale)
      // Nagdadagdag tayo ng padding para sa labels at borders
      containerHeight = (scrollHeight * SCALE_FACTOR) + 60;
    }
  }

  // Single source of truth para sa srcDoc
  $: srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            background: white;
            color: #1a1a1a;
            padding: 2rem;
            margin: 0;
            font-family: sans-serif;
            width: 100%;
            box-sizing: border-box;
            overflow: hidden; /* Iwas scrollbars sa loob ng miniature */
          }
        </style>
      </head>
      <body>
        ${code}
      </body>
    </html>
  `;

  $: if (code) {
    setTimeout(updateHeight, 100);
  }

  // 📥 DOWNLOAD LOGIC
  function downloadCode() {
    const blob = new Blob([srcDoc], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fabalos-render-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // 🔍 VIEW COMPLETE (Open in New Tab)
  function viewComplete() {
    const newTab = window.open();
    if (newTab) {
      newTab.document.open();
      newTab.document.write(srcDoc);
      newTab.document.close();
    }
  }
</script>

<div class="sandbox-container">
  <div class="pane input-pane">
    <div class="label flex justify-between items-center">
      <span>INPUT: SNIPPET</span>
      <button on:click={downloadCode} class="btn-mini">Download_HTML</button>
    </div>
    <textarea bind:value={code} spellcheck="false"></textarea>
  </div>

  <div class="pane output-pane" style="height: {containerHeight}px;">
    <div class="label flex justify-between items-center">
      <span>OUTPUT: MINI_RENDERER</span>
      <button on:click={viewComplete} class="btn-mini">View_Complete_100%</button>
    </div>
    <div class="viewer-wrapper">
      <iframe
        bind:this={iframe}
        title="preview"
        srcdoc={srcDoc}
        on:load={updateHeight}
        sandbox="allow-scripts"
      ></iframe>
    </div>
  </div>
</div>

<style>
  .sandbox-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .pane {
    display: flex;
    flex-direction: column;
    background: #0f0f0f;
    border: 2px solid #000;
    border-radius: 8px;
    overflow: hidden;
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .label {
    background: #1a1a1a;
    padding: 6px 12px;
    font-size: 10px;
    font-family: var(--font-mono);
    color: #666;
    border-bottom: 1px solid #333;
    text-transform: uppercase;
  }

  textarea {
    height: 150px;
    background: transparent;
    border: none;
    color: #e6e6e6;
    font-family: var(--font-mono);
    font-size: 12px;
    padding: 16px;
    resize: vertical;
    outline: none;
  }

  .viewer-wrapper {
    flex: 1;
    background: white;
    position: relative;
    overflow: hidden; /* Kinukulong ang scaled iframe */
  }

  iframe {
    /* Ang width ay kailangang i-compensate ang scale (1 / 0.5 = 200%) */
    width: 200%;
    height: 200%;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.5); /* Eto yung miniature effect */
    transform-origin: top left;
    pointer-events: none; /* Para hindi ma-scroll sa loob */
  }

  .output-pane:hover iframe {
    pointer-events: auto;
  }

  .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1a1a1a;
    padding: 4px 12px;
    font-size: 10px;
    font-family: var(--font-mono);
    color: #666;
    border-bottom: 1px solid #333;
  }

  .btn-mini {
    background: #333;
    color: #e6e6e6;
    border: none;
    padding: 2px 8px;
    font-size: 9px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 2px;
  }

  .btn-mini:hover {
    background: #ff7a18;
    color: #000;
  }
</style>