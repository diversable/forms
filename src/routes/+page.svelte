<script lang="ts">
	// Loading Data
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;

	console.log(data);

	const { activities, projects, allProjectActivities } = data;
	// END Loading Data
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Activity and Project Forms" />
</svelte:head>

<section class="mx-auto">
	<h1 class="text-2xl">App</h1>
</section>

<style lang="postcss">
</style>
