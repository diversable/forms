<script>
	import './styles.css';
</script>

<div class="flex-col mx-auto px-24">
	<header><h1 class="text-3xl font-bold underline">This is the header</h1></header>
	<br /><br />
	<main>
		<slot />
	</main>

	<footer>
		<br /><br />
		<h2>Footer Content</h2>
	</footer>
</div>
