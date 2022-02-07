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
	<h2>Le numérique en santé, l'esprit libre!</h2>
</section>

<section>
	<p>
		Bienvenue! Depuis 2012, nous développons des applications santé éthiques, libres, sécurisées, au
		service des patients et des soignants!
	</p>
</section>
<div class="row row-cols-1 row-cols-md-3 g-4">
	<div class="col">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title text-center">Réseau professionnel @doctoctocbot</h5>
				<div class="text-center">
					<h2><i class="bi bi-people" /></h2>
				</div>
				<p class="card-text">
					Le gentil robot Twitter <a href="https://twitter.com/doctoctocbot">@doctoctocbot</a>
					soutient depuis 2017 la communauté médicale d'entraide
					<a href="https://doctoctoc.net">#doctoctoc</a>. Aujourd'hui, il est accompagné de 5 autres
					robots médicaux qui regroupent plus de 8000 pros de santé (médecins, sages-femmes,
					pharmaciens, infirmières, kinés, étudiants en médecine) et étudiants en santé au sein du
					réseau SantéTocToc .
				</p>
			</div>
			<div class="card-footer text-center">
				<a href="https://santetoctoc.medica.im" class="btn btn-outline-primary"
					>Rejoignez SantéTocToc!</a
				>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title text-center">Forum</h5>
				<div class="text-center">
					<h2><i class="bi bi-megaphone" /></h2>
				</div>
				<p class="card-text">
					Un forum moderne, adapté au smartphone, qui peut aussi être utilisé via email, comme une
					mailing list. Il permettra à votre communauté (cabinet, MSP, CPTS, société savante) de
					s'organiser pour atteindre ses objectifs.
				</p>
			</div>
			<div class="card-footer text-center">
				<a href="https://discussion.doctoctoc.net" class="btn btn-outline-primary"
					>Forum pros de santé</a
				>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title text-center">Messagerie sécurisée</h5>
				<div class="text-center">
					<h2><i class="bi bi-chat-left-text" /></h2>
				</div>
				<p class="card-text">
					Salons de discussions (en option) et messages privés (par défaut) sont chiffrés. Seuls les
					expéditeurs et les destinataires peuvent lire les échanges chiffrés (texte et pièces
					jointes). Nous n'y avons pas accès.
				</p>
			</div>
			<div class="card-footer text-center">
				<a href="https://doctoctoc.net/messenger/get-started/" class="btn btn-outline-primary"
					>&lbrace;Medica&rbrace; messenger</a
				>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title text-center">Vidéoconférence</h5>
				<div class="text-center">
					<h2><i class="bi bi-webcam" /></h2>
				</div>
				<p class="card-text">
					Notre messagerie chiffrée permet aussi de passer des appels audio, vidéo et d'organiser
					des visioconférences.
				</p>
			</div>
			<div class="card-footer text-center">
				<a href="https://doctoctoc.net/messenger/get-started/" class="btn btn-outline-primary"
					>&lbrace;Medica&rbrace; messenger</a
				>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title text-center">Blog</h5>
				<div class="text-center">
					<h2><i class="bi bi-journal-text" /></h2>
				</div>
				<p class="card-text">
					Les messages postés sur les réseaux sociaux ont un impact transitoire, souvent limité à 48
					heures. Osez le format long avec notre blog réservé aux professionnels de santé!
				</p>
			</div>
			<div class="card-footer text-center">
				<a href="https://blog.medica.im" class="btn btn-outline-primary">blog.medica.im</a>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card h-100">
			<div class="card-body">
				<h5 class="card-title text-center">Sécurité</h5>
				<div class="text-center">
					<h2><i class="bi bi-shield-lock" /></h2>
				</div>
				<p class="card-text">
					La sécurité, la confidentialité et la pérennité des données de santé sont des enjeux
					majeurs. Nous vous proposons un audit de vos pratiques numériques et des conseils pour
					préserver vos données et celles de vos patients.
				</p>
			</div>
			<div class="card-footer text-center">
				<a href="/contact" class="btn btn-outline-primary">Contactez-nous!</a>
			</div>
		</div>
	</div>
</div>
<section>
	<div class="card my-4">
		<h5 class="card-header text-center">Ils nous font confiance depuis 2012</h5>
		<div class="card-body">
			<!--h5 class="card-title"></h5-->
			<p class="card-text">
				Basée en France mais intervenant dans le monde entier, notre entreprise développe des
				solutions numériques libres pour:
			</p>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					Professionnels de santé libéraux (cabinet individuel & cabinet de groupe)
				</li>
				<li class="list-group-item">Maisons médicales</li>
				<li class="list-group-item">Maisons de santé pluridisciplinaires (MSP)</li>
				<li class="list-group-item">Communautés professionnelles territoriales de santé (CPTS)</li>
				<li class="list-group-item">Cliniques</li>
				<li class="list-group-item">Hôpitaux</li>
			</ul>
		</div>
		<div class="card-footer text-center">
			<a href="/contact" class="btn btn-primary">Contactez-nous!</a>
		</div>
	</div>
	<aside>
		<p>
			<a href="https://aful.org/ressources/logiciel-libre"> Qu'est-ce qu'un logiciel libre? </a>
		</p>
	</aside>
</section>

<style>
</style>
