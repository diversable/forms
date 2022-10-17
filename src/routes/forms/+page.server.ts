import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { invalid } from "@sveltejs/kit";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// Task = thing you can do in 1 sitting
const activities = [
  {
    id: crypto.randomUUID(),
    activityName: "read email",
    onDays: ["Monday", "Wednesday", "Friday"],
    underHeading: "Morning",
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    activityName: "brush teeth",
    onDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    underHeading: "bedtime routine",
    completed: false,
  },
];

const disabilityBookId = crypto.randomUUID();
const projects = [
  {
    id: crypto.randomUUID(),
    projectName: "prep grad school applications",
    projectActivityIds: [
      disabilityBookId,
    ],
    onDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    underHeading: "morning productivity block",
    started: false,
    completed: false,
  },
];

const allProjectActivities = [
  {
    id: disabilityBookId,
    activityName: "read disability theory book",
    associatedWithProject: projects[0].id,
    onDays: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    underHeading: "bedtime routine",
    completed: false,
  },
];

export const load: PageServerLoad = ({ data }) => {
  // console.log(data);

  return { activities, projects, allProjectActivities };
};

export const actions: Actions = {
  createActivity: async ({ request }) => {
    const formData = await request.formData();
    // console.log(formData);

    // grab the name atributes off the various form inputs
    const activityName = formData.get("activityName");
    const onDays = formData.getAll("onDays");
    const underHeading = formData.get("underHeading");
    const completed = formData.get("completed");

    const newActivity = {
      id: crypto.randomUUID(),
      activityName: activityName,
      onDays: onDays,
      underHeading: underHeading || "none",
      completed: completed || false,
    };

    // console.log(newActivity);
    activities.push(newActivity);

    // console.log(activities);
    return { success: true };
  },
  createProject: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);

    // grab the name atributes off the various form inputs
    const projectName = formData.get("projectName");
    // use .getAll to grab an array of form values (form values all must use the same name)
    const projectActivities = formData.getAll("projectActivities");
    const onDays = formData.getAll("onDays");
    const underHeading = formData.get("underHeading");
    const started = formData.get("started");

    if (projectName.length < 2) {
      return invalid(400, {
        error: true,
        message: "Project name must be at least 2 characters long.",
        projectName,
        projectActivities,
        onDays,
        underHeading,
        started,
      });
    }

    // create Project ID
    const projectId = crypto.randomUUID();

    // create array for possible project activity id's
    const activityIds = [];

    console.log(projectName, projectActivities, onDays, underHeading, started);

    for (const projectActivity of projectActivities) {
      if (projectActivity.length == 0) break;

      const newProjectActivity = {
        id: crypto.randomUUID(),
        activityName: projectActivity,
        associatedWithProject: projectId,
        onDays: [""],
        underHeading: "",
        completed: false,
      };
      allProjectActivities.push(newProjectActivity);
      activityIds.push(newProjectActivity.id);
    }

    const newProject = {
      id: projectId,
      projectName: projectName,

      projectActivityIds: activityIds,

      onDays: onDays,
      underHeading: underHeading || "none",
      started: started || false,
      completed: false,
    };
    // console.log(newActivity);
    projects.push(newProject);

    // console.log(activities);
    return { success: true };
  },
};
