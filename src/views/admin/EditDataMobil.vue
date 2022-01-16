<template>
  <!-- <EditMobil /> -->
  <NavbarAdm />
  <div class="container-fluid">
    <div class="row vh-100">
      <Sidebar />
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="chartjs-size-monitor">
          <div class="chartjs-size-monitor-expand"><div class=""></div></div>
          <div class="chartjs-size-monitor-shrink"><div class=""></div></div>
        </div>
        <div
          class="
            d-flex
            justify-content-between
            flex-wrap flex-md-nowrap
            align-items-center
            pt-3
            pb-2
            mb-3
            border-bottom
          "
        >
          <h1 class="h2">Edit Data Mobil</h1>
        </div>
        <form @submit.prevent="updateMobil" class="mt-5">
          <div class="mb-3">
            <label for="idmobil" class="form-label">Id Mobil</label>
            <input
              type="text"
              class="form-control"
              id="idmobil"
              name="idmobil"
              v-model="mobil.idmobil"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="merek" class="form-label">Merek</label>
            <input
              type="text"
              class="form-control"
              id="merek"
              name="merek"
              v-model="mobil.merek"
            />
          </div>
          <div class="mb-3">
            <label for="harga" class="form-label">Harga</label>
            <input
              type="text"
              class="form-control"
              id="harga"
              name="harga"
              v-model="mobil.harga"
            />
          </div>

          <button type="submit" class="btn btn-primary me-2">Save</button>
          <a href="/datamobil">
            <button type="button" class="btn btn-danger">Cancel</button></a
          >
        </form>
        <canvas
          class="my-4 w-100 chartjs-render-monitor"
          id="myChart"
          width="625"
          height="263"
          style="display: block; width: 625px; height: 263px"
        ></canvas>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import EditMobil from '@/components/Admin/EditMobil.vue'
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdm from "@/components/NavbarAdm.vue";

export default {
  name: "EditDataMobil",
  data() {
    return {
      mobil: {
        id: null,
        idmobil: "",
        merek: "",
        harga: "",
      },
    };
  },
  components: {
    // EditMobil,
    NavbarAdm,
    Sidebar,
  },
  methods: {
    setMobils(data) {
      this.mobil = data;
    },
    updateMobil() {
      const mobil= {
        id: this.mobil.id,
        idmobil: this.mobil.idmobil,
        merek: this.mobil.merek,
        harga: this.mobil.harga
      };
      axios
        .put(`http://localhost:8080/api/mobils/${this.$route.params.id}`, mobil)
        .then((response) => this.$router.push("/datamobil")(response))
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    axios
      .get(`http://localhost:8080/api/mobils/${this.$route.params.id}`)
      .then((response) => this.setMobils(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>