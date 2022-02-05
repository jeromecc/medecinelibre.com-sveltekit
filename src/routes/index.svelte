<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import LL from '../i18n/i18n-svelte';
	import { Button, Col, Row } from 'sveltestrap';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Médecine Libre</h1>
	<!--h2>{$LL.HI({ name: 'SvelteKit' })}</h2-->
</section>

<section>
	<p>
		Bienvenue chez Médecine Libre, développeur d'applications santé éthiques, libres, sécurisées,
		centrées sur le patient!
	</p>
	<p>Médecine Libre: votre informatique médicale, l'esprit libre!</p>
	<p>
		Basée en France mais intervenant dans le monde entier, notre entreprise de service informatique
		en logiciel libre conseille
	</p>
	<ul>
		<li>professionnels de santé libéraux (cabinet individuel et cabinet de groupe)</li>
		<li>maisons médicales</li>
		<li>maisons de santé pluridisciplinaires (MSP)</li>
		<li>communautés professionnelles territoriales de santé (CPTS)</li>
		<li>cliniques</li>
		<li>hôpitaux</li>
	</ul>
	<p>sur les choix numériques les plus adaptés.</p>
	<p>
		Retrouvez ici les nombreux services que nous proposons. Nous intervenons sur des ordinateurs GNU
		/ Linux, Mac OS ou Windows. Nous conseillons et installons presque exclusivement des logiciels
		libres et open source.
	</p>
	<aside>
		<p>
			<a
				href="https://web.archive.org/web/20211128123841/https://aful.org/ressources/logiciel-libre"
			>
				Qu'est-ce qu'un logiciel libre?
			</a>
		</p>
	</aside>
	<p>
		Grâce à notre maîtrise des outils de travail à distance, nous installons vos logiciels médicaux
		et nous dépannons vos ordinateurs et votre réseau partout en France et dans le monde. Nous
		proposons des tarifs préférentiels aux professionnels de santé, cliniques et hôpitaux des pays
		en voie de développement.
	</p>
</section>

<style>
</style>
