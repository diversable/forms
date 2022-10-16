import type { Actions } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const tasks = [{
  id: crypto.randomUUID(),
  taskName: "read email",
  onDays: ["Monday", "Wednesday", "Friday"],
  underHeading: "Morning",
  started: false,
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
  started: false,
  finished: false,
}];

export const load: PageLoad = ({ data }) => {
  console.log(data);
  return tasks;
};

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    console.log(formData);
  },
};
