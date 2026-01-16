export const inventory = [
	{
		id: 'FLO-001',
		name: 'Pneumatic_Cylinder_Calc',
		type: 'WEB UTILITY',
		status: 'LIVE_BETA',
		size: '14KB',
		desc: 'Idempotent sizing tool. Inputs load & pressure; outputs bore size + air consumption with safety factors.',
		// 📄 Manifest Details
		version: 'v1.0.4',
		releaseDate: '2026-01-16',
		specs: [
			'ISO 1219 Compliant Logic',
			'Dynamic Safety Factor (1.4x - 2.0x)',
			'L/min Air Consumption Rate',
			'Reverse Stroke Calculation'
		],
		install: 'Run in Browser / Clone Repo',
		codeSnippet: `const getForce = (pressure, bore) => {\n  // F = P * A * Efficiency\n  const area = Math.PI * Math.pow(bore / 2, 2);\n  return (pressure * area * 0.9).toFixed(2);\n}`
	},
	{
		id: 'FLO-002',
		name: 'Email_To_GTasks_Flow',
		type: 'n8n WORKFLOW',
		status: 'READY_TO_SHIP',
		size: '8KB',
		downloadUrl: '/downloads/FLO-002_Workflow.json',
		desc: 'The exact n8n blueprint I use to parse client emails into structured Google Tasks using Gemini AI.',
		// 📄 Manifest Details
		version: 'v2.1.0',
		releaseDate: '2025-12-20',
		specs: [
			'Gmail Trigger (Label Filtered)',
			'Gemini 1.5 parsing node',
			'JSON to Task Mapping',
			'Auto-labelling Logic'
		],
		install: 'Import .json to n8n',
		codeSnippet: `{\n  "nodes": [\n    {\n      "parameters": {\n        "modelId": "gemini-1.5-flash",\n        "prompt": "Extract action items..."\n      },\n      "type": "n8n-nodes-base.googleGemini"\n    }\n  ]\n}`
	},
	{
		id: 'FLO-003',
		name: 'Jules_Script_Bin',
		type: 'PYTHON CLI TOOL',
		status: 'READY_TO_SHIP',
		size: '4KB',
		desc: 'Single-file Python CLI for common engineering tasks. Includes CSV Scrubber and PDF Extractor.',
		downloadUrl: '/downloads/jules.py',
		version: 'v1.0.0',
		releaseDate: '2026-01-15',
		specs: [
			'Command Line Interface (Argparse)',
			'CSV Header Normalizer',
			'Mock PDF/Image Modules',
			'Zero Dependencies (Base)'
		],
		install: 'python jules.py --help',
		// 👇 New Snippet shows how to use it
		codeSnippet: `$ python jules.py --help\n\nusage: jules.py [-h] {clean,resize,extract} ...\n\nJules: The Senior Engineer's Swiss Army Knife\n\npositional arguments:\n  {clean,resize,extract}\n    clean             Normalize a messy CSV file\n    resize            Batch resize images in a folder\n    extract           Scrape tables from a PDF`
	}
];