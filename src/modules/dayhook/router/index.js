export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "dayBook" */ "@/modules/dayhook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "noEntry" */ "@/modules/dayhook/views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "noEntry" */ "../views/EntryView.vue"
        ),
        props:(route)=>{
          return {
            id: route.params.id
          }
        }
    },
  ],
};

