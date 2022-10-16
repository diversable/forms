<script lang="ts">
	// Loading Data
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);

	const { tasks, projects } = data;
	// END Loading Data
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mx-auto">
	<h1 class="text-3xl underline">Today</h1>
	<form method="POST">
		<input type="text" name="taskName" />
		<button type="submit">Submit</button>
	</form>

	<br /><br /><br />
	<!-- SHOW TASKS -->
	<h2 class="sub-heading">Tasks</h2>
	{#each tasks as { id, taskName, onDays, underHeading, finished } (id)}
		<p>
			ID: {id}
			<br /><br />
			Task Name: {taskName}
			<br /><br />
			On Days: {onDays},
			<br /><br />
			Under Heading: {underHeading}

			<br /><br />
			Finished: {finished}
			<br /><br /><br />
		</p>
	{/each}

	<!-- SHOW PROJECTS -->
	<h2 class="sub-heading">Projects</h2>
	{#each projects as { id, taskName, onDays, underHeading, started, finished } (id)}
		<p>
			ID: {id}
			<br /><br />
			Task Name: {taskName}
			<br /><br />
			On Days: {onDays},
			<br /><br />
			Under Heading: {underHeading}
			<br /><br />
			Started: {started}
			<br /><br />
			Finished: {finished}
			<br /><br /><br />
		</p>
	{/each}
</section>

<style lang="postcss">
	.sub-heading {
		@apply text-2xl underline underline-offset-4 text-slate-700;
	}
</style>
