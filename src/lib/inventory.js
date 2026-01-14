export const inventory = [
	{
		id: 'FLO-001',
		name: 'Fabalos_Pricing_Table',
		type: 'SVELTE COMPONENT',
		status: 'READY_TO_SHIP',
		size: '2.4KB',
		desc: 'High-conversion pricing UI with toggle states and monthly/yearly logic.',
		// 📄 Manifest Details
		version: 'v2.4.0-stable',
		releaseDate: '2025-12-12',
		specs: [
			'Reactive Toggle (Monthly/Yearly)',
			'Tailwind CSS v4 Compatible',
			'Zero Dependencies',
			'Dark Mode Ready'
		],
		install: 'npm install @fabalos/ui',
		codeSnippet: `<PricingTable \n  plan="pro" \n  currency="USD" \n/>`
	},
	{
		id: 'FLO-002',
		name: 'Supabase_Auth_Starter',
		type: 'BOILERPLATE',
		status: 'PACKING...',
		size: '14MB',
		desc: 'Pre-configured auth flow with RLS policies and user profile sync.',
		// 📄 Manifest Details
		version: 'v1.0.0-beta',
		releaseDate: '2026-01-15',
		specs: [
			'Supabase SSR Configured',
			'Password Reset Flow',
			'Google/GitHub OAuth Ready',
			'Protected Routes Middleware'
		],
		install: 'npx sv create floflux-auth',
		codeSnippet: `const { data, error } = await supabase.auth.signInWithOAuth({\n  provider: 'github'\n})`
	},
	{
		id: 'FLO-003',
		name: 'Industrial_Icons_Pack',
		type: 'ASSETS',
		status: 'BACKORDERED',
		size: '42MB',
		desc: 'Vector set for manufacturing interfaces and dashboards.',
		// 📄 Manifest Details
		version: 'v0.9-alpha',
		releaseDate: 'TBD',
		specs: [
			'200+ SVG Icons',
			'Figma Components Included',
			'Stroke Width Adjustable',
			'React/Svelte Wrappers'
		],
		install: 'Download via Floflux Cloud',
		codeSnippet: `<Icon name="hazard-warning" size="24" />`
	},
	{
		id: 'FLO-004',
		name: 'Workflow_n8n_Schema',
		type: 'JSON CONFIG',
		status: 'READY_TO_SHIP',
		size: '12KB',
		desc: 'Automated client onboarding flow blueprint.',
		// 📄 Manifest Details
		version: 'v3.1.2',
		releaseDate: '2025-11-30',
		specs: [
			'Gmail Trigger Integration',
			'Stripe Payment Webhook',
			'Slack Notification Block',
			'Error Handling Sub-workflow'
		],
		install: 'Import .json into n8n',
		codeSnippet: `// No code snippet. Configuration file.`
	}
];
