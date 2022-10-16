import type { Actions } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// Task = thing you can do in 1 sitting
const tasks = [{
  id: crypto.randomUUID(),
  taskName: "read email",
  onDays: ["Monday", "Wednesday", "Friday"],
  underHeading: "Morning",

  finished: false,
}, {
  id: crypto.randomUUID(),
  taskName: "brush teeth",
  onDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  underHeading: "Bedtime Routine",

  finished: false,
}];

const projects = [{
  id: crypto.randomUUID(),
  taskName: "read & do exercises in Rust Web book",
  onDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  underHeading: "Afternoon Productivity Block",
  started: true,
  finished: false,
}, {
  id: crypto.randomUUID(),
  taskName: "prep grad school applications",
  onDays: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  underHeading: "Morning Productivity Block",
  started: false,
  finished: false,
}];

export const load: PageLoad = ({ data }) => {
  console.log(data);
  return { tasks: tasks, projects: projects };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
  },
};
