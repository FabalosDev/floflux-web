import pkg from '../../package.json'; // 👈 Server-side import is safe

export function load() {
	return {
		version: pkg.version // 🚀 We only send the version, not the whole file
	};
}