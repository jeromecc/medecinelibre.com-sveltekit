<script context="module">
	import LL, { initI18n, setLocale } from '../i18n/i18n-svelte';

	export async function load({ url, params, fetch, session, context }) {
		// detect locale of user (see https://github.com/ivanhofer/typesafe-i18n#locale-detection)
		const locale = 'fr';
		await initI18n(locale);

		return {};
	}
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { Container } from 'sveltestrap';

  import { Styles } from 'sveltestrap';
</script>

<Styles />

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<!-- The page supports both dark and light color schemes,
			 and the page author prefers / default is light. -->

	<!-- Replace the Bootstrap CSS with the
			 Bootstrap-Dark Variant CSS -->
	<!--link
		href="https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-dark.min.css"
		rel="stylesheet"
	/-->

	<title>Médecine Libre</title>


	<!--link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
		crossorigin="anonymous"
	/-->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
	/>
</head>

<Header />

<main>
	<Container>
		<slot />
	</Container>
</main>

<footer class="footer mx-auto py-3">
	<div class="container-fluid">
		<div class="text-center">
			<span class="text-muted"><a href="/">medecinelibre.com</a></span>
		</div>
	</div>
</footer>
