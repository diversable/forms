<script lang="ts">
	import { identity } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);

	const { tasks } = data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mx-auto">
	<h1 class="text-2xl underline">Today</h1>
	<form method="POST">
		<input type="text" name="taskName" />
		<button type="submit">Submit</button>
	</form>

	<br /><br /><br />
	<h2 class="text-xl">Tasks</h2>
	{#each tasks as { id, taskName, onDays, underHeading, started, finished }}
		ID: {id}
		<br />
		Task Name: {taskName}
		<br />
		On Days: {onDays},
		<br />
		Under Heading: {underHeading}
		<br />
		Started: {started}
		<br />
		Finished: {finished}
		<br /><br /><br />
	{/each}
</section>
