<script lang="ts">
	// Loading Data
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);

	const { activities, projects } = data;
	// END Loading Data
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Activity and Project Forms" />
</svelte:head>

<section class="mx-auto">
	<h1 class="text-3xl underline">Today</h1>
	<div class="flex-col border">
		<form method="POST">
			<br />
			<label for="activityName" class="p-4 mx-auto">New Activity</label>
			<input type="text" name="activityName" placeholder="Your activity (< ~1hr)" class="input" />
			<br /><br />
			<p><i>Which day(s) would you like to do your activity on?</i></p>
			<label for="Monday"
				>Monday
				<input type="checkbox" name="onDays" value="Monday" />
			</label>
			<label for="Tuesday"
				>Tuesday
				<input type="checkbox" name="onDays" value="Tuesday" />
			</label>
			<label for="Wednesday"
				>Wednesday
				<input type="checkbox" name="onDays" value="Wednesday" />
			</label>
			<label for="Thursday"
				>Thursday
				<input type="checkbox" name="onDays" value="Thursday" />
			</label>
			<label for="Friday"
				>Friday
				<input type="checkbox" name="onDays" value="Friday" />
			</label>
			<br />
			<label for="Saturday"
				>Saturday
				<input type="checkbox" name="onDays" value="Saturday" />
			</label>
			<label for="Sunday"
				>Sunday
				<input type="checkbox" name="onDays" value="Sunday" />
			</label>
			<br /><br />
			<p><i>What block would you like your activity to be in?</i></p>
			<label for="Morning"
				>Morning
				<input type="radio" name="underHeading" value="morning" />
			</label>
			<label for="Afternoon"
				>Afternoon
				<input type="radio" name="underHeading" value="afternoon" />
			</label>
			<label for="Evening"
				>Evening
				<input type="radio" name="underHeading" value="evening" />
			</label>
			<label for="Bedtime Routine"
				>Bedtime Routine
				<input type="radio" name="underHeading" value="bedtime routine" />
			</label>
			<br /><br />
			<label for="completed"
				>Have you completed the activity already?
				<input type="checkbox" name="completed" value={true} />
			</label>

			<br /><br /><br />
			<button
				type="submit"
				class="px-10 bg-blue-400 text-white py-2 border-4 border-slate-700 rounded-xl"
				>Submit</button
			>
		</form>
	</div>

	<br /><br /><br />
	<!-- SHOW TASKS -->
	<h2 class="sub-heading">Activities</h2>
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

	<!-- SHOW PROJECTS -->
	<!-- <h2 class="sub-heading">Projects</h2>
	{#each projects as { id, projectName, onDays, underHeading, started, completed } (id)}
		<p>
			ID: {id}
			<br /><br />
			Project Name: {projectName}
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
	{/each} -->
</section>

<style lang="postcss">
	.sub-heading {
		@apply text-2xl underline underline-offset-4 text-slate-700;
	}
	.input {
		@apply mx-10 px-8 py-3 border-4 rounded-xl border-spacing-4 border-blue-200 placeholder-green-600 placeholder-opacity-50;
	}
</style>
