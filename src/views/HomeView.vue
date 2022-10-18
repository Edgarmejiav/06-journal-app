

<template>
  <main>
    <h1>home</h1>

    <button @click="geToDayBook" type="button" class="btn btn-primary" >
      primary
    </button>
    <button @click="geToDayBook" type="button" class="btn btn-secondary">
      Secondary
    </button>
    <button @click="geToDayBook" type="button" class="btn btn-success">
      Success
    </button>
  </main>
</template>

<script>
export default {
  methods: {
    geToDayBook() {
      this.$router.push({
        name: "no-entry",
      });
    },
  },
};
</script>