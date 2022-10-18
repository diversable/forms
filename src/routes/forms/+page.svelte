<script lang="ts">
	// Loading Data
	import type { ActionData, PageData } from './$types';
	import { applyAction, enhance } from '$app/forms';
	import ActivityForm from './ActivityForm.svelte';
	import ProjectForm from './ProjectForm.svelte';

	export let data: PageData;

	// console.log(data);

	$: ({ activities, projects, allProjectActivities } = data);
	// END Loading Data

	// Form
	export let form: ActionData;
	// console.log(form);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Activity and Project Forms" />
</svelte:head>

<section class="mx-auto">
	<ActivityForm />

	<!-- SHOW TASKS -->
	<h2 class="sub-heading">Activities List</h2>
	{#each activities as { id, activityName, onDays, underHeading, completed } (id)}
		<p>
			ID: {id}
			<br /><br />
			Activity Name: {activityName}
			<br /><br />
			On Days: {onDays},
			<br /><br />
			Under Heading: {underHeading}

			<br /><br />
			Completed: {completed}
			<br /><br /><br />
		</p>
	{/each}

	<ProjectForm />

	<!-- SHOW PROJECTS -->
	<h2 class="sub-heading">Projects List</h2>
	{#each projects as { id, projectName, projectActivityIds, onDays, underHeading, started, completed } (id)}
		<p>
			ID: {id}
			<br /><br />
			Project Name: {projectName}

			<br /><br />
			Project ActivityIds:
			{#each projectActivityIds as projectActivityId}
				{projectActivityId},
			{/each}

			<br /><br />
			On Days: {onDays},
			<br /><br />
			Under Heading: {underHeading}
			<br /><br />
			Started: {started}
			<br /><br />
			Completed: {completed}
			<br /><br /><br />
		</p>
	{/each}

	<br /><br /><br />

	<h1 class="text-2xl">All Project's Activities</h1>
	{#each allProjectActivities as { id, activityName, associatedWithProject, onDays, underHeading, completed }}
		Id: {id}
		<br />
		activityName: {activityName}
		<br />
		associated with project (project's id): {associatedWithProject}
		<br />
		on days: {onDays}
		<br />
		under heading: {underHeading}
		<br />
		completed: {completed}
		<br /><br />
	{/each}
</section>

<style lang="postcss">
	.sub-heading {
		@apply text-2xl underline underline-offset-4 text-slate-700;
	}
</style>
