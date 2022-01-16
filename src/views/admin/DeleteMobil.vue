<template>
<h1>Sukses</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteMobil",
  mounted() {
    axios
      .delete(`http://localhost:8080/api/mobils/${this.$route.params.id}`)
      .then((response) => this.$router.push("/datamobil")(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>