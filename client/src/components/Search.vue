<template>
  <section class="search">
    <h1>Track Player Stats</h1>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="platform">Platform</label>
        <select name="platform" id="platform" v-model="platform">
          <option value="psn">Playstation</option>
          <option value="xbl">XBOX</option>
          <option value="origin">Origin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gamertag">GamerTag</label>
        <input
          type="text"
          name="gamertag"
          id="gamertag"
          v-model="gamertag"
          placeholder="XBOX live Id, psn gamertag, Orgin Id etc.."
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      platform: "psn",
      gamertag: null
    };
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.$toasted.show("Please enter a Gamertag", {
          duration: 3000,
          icon: "exclamation-circle"
        });
      } else {
        this.$router.push(`profile/${this.platform}/${this.gamertag}`)
      }
    }
  },
  beforeCreate() {
    document.body.classList.add("body-bg-image");
  }
};
</script>

<style>
</style>
