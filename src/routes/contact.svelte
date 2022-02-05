<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="content">
	<h2>Médecine Libre</h2>
	<p>SIRET: 529 455 719 00045</p>
	<address>
		<i class="bi bi-envelope me-1"></i><a href="mailto:info@medecinelibre.com">info@medecinelibre.com</a><br />
		<i class="bi bi-telephone me-1"></i><a href="tel:+33970444541">+33 970 444 541</a><br />
		134, rue de Valenciennes<br />
		59500 Douai<br />
		France
	</address>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
