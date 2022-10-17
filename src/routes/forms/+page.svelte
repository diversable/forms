<script lang="ts">
	// Loading Data
	import type { ActionData, PageData } from './$types';
	import { applyAction, enhance } from '$app/forms';

	export let data: PageData;

	// console.log(data);

	const { activities, projects, allProjectActivities } = data;
	// END Loading Data

	// Form
	export let form: ActionData;
	console.log(form);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Activity and Project Forms" />
</svelte:head>

<section class="mx-auto">
	<h1 class="text-3xl underline">Today</h1>
	<div class="flex-col border">
		<form method="POST" action="?/createActivity">
			<br />
			<label for="activityName" class="p-4 mx-auto">New Activity</label>
			<input
				required
				type="text"
				name="activityName"
				placeholder="Your activity (< ~1hr)"
				class="input"
			/>
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

	<h2 class="text-3xl underline">Projects</h2>
	<div class="flex-col border">
		<form
			method="POST"
			action="?/createProject"
			use:enhance={({ form, data, action }) => {
				// This runs before submission to server
				console.log('form: ', form);
				console.log('data: ', data);
				console.log('action: ', action);

				return async ({ result, update }) => {
					// this part runs after submission to server
					console.log('result: ', result);

					if (result.type === 'success') {
						form.reset();
						update();
					}
					if (result.type === 'invalid') {
						await applyAction(result);
					}

					update();
				};
			}}
		>
			<br />
			<label for="projectName" class="p-4 mx-auto">New Project</label>
			<input
				required
				type="text"
				name="projectName"
				placeholder="Your project name"
				class="input"
			/>
			<br /><br />
			<label for="projectActivities" class="p-4 mx-auto">Project Tasks</label>
			<br />
			<input type="text" name="projectActivities" placeholder="project activity #1" class="input" />
			<br />
			<input type="text" name="projectActivities" placeholder="project activity #2" class="input" />
			<br />
			<input type="text" name="projectActivities" placeholder="project activity #3" class="input" />
			<br /><br />
			<p><i>Which day(s) would you like to work on your project?</i></p>
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
			<p><i>What block would you like your project to be in?</i></p>
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
			<label for="started"
				>Have you started the project already?
				<input type="checkbox" name="started" value={true} />
			</label>

			<br /><br /><br />
			<button
				type="submit"
				class="px-10 bg-blue-400 text-white py-2 border-4 border-slate-700 rounded-xl"
				>Submit</button
			>
		</form>
	</div>
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
	.input {
		@apply mx-10 my-4 px-8 py-3 border-4 rounded-xl border-spacing-4 border-blue-200 placeholder-green-600 placeholder-opacity-50;
	}
</style>
