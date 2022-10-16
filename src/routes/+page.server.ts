import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// Task = thing you can do in 1 sitting
const activities = [
  // {
  //   id: crypto.randomUUID(),
  //   activityName: "read email",
  //   onDays: ["Monday", "Wednesday", "Friday"],
  //   underHeading: "Morning",
  //   completed: false,
  // }, {
  //   id: crypto.randomUUID(),
  //   activityName: "brush teeth",
  //   onDays: [
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday",
  //     "Sunday",
  //   ],
  //   underHeading: "bedtime routine",
  //   completed: false,
  // }
];

// const projects = [{
//   id: crypto.randomUUID(),
//   projectName: "read & do exercises in Rust Web book",
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
// }, {
//   id: crypto.randomUUID(),
//   projectName: "prep grad school applications",
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
// }];

export const load: PageServerLoad = ({ data }) => {
  // console.log(data);
  return { activities };
  // return { activities, projects };
};

export const actions: Actions = {
  default: async ({ request }) => {
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
      underHeading: underHeading,
      completed: completed || false,
    };

    // console.log(newActivity);
    activities.push(newActivity);

    // console.log(activities);
    return { success: true };
    // return {
    //   success: true,
    //   activities,
    // };
  },
};
