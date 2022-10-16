import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

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

const projects = [
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "Work through Rust Web book",
  //   projectTasks: ["read chapter 3", "do chapter 3 exercises"],
  //   onDays: [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ],
  //   underHeading: "afternoon productivity block",
  //   started: true,
  //   completed: false,
  // },
  // {
  //   id: crypto.randomUUID(),
  //   projectName: "prep grad school applications",
  //   projectTasks: [
  //     "read disability theory book",
  //     "prep UBC grad application",
  //     "prep UVic grad application",
  //   ],
  //   onDays: [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //   ],
  //   underHeading: "morning productivity block",
  //   started: false,
  //   completed: false,
  // }
];

export const load: PageServerLoad = ({ data }) => {
  // console.log(data);

  return { activities, projects };
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
    // console.log(formData);

    // grab the name atributes off the various form inputs
    const projectName = formData.get("projectName");
    const projectTasks = formData.getAll("projectTasks");
    const onDays = formData.getAll("onDays");
    const underHeading = formData.get("underHeading");
    const started = formData.get("started");

    console.log(projectName, projectTasks, onDays, underHeading, started);
    const newProject = {
      id: crypto.randomUUID(),
      projectName: projectName,
      projectTasks: projectTasks,
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
