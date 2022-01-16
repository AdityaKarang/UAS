<template>
  <NavbarAdm />
  <!-- <AddMobil /> -->
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
          <h1 class="h2">Tambah Data Mobil</h1>
        </div>
        <form @submit.prevent="addMobil" class="mt-5">
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

        <!-- <h2>Section title</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>text</td>
                <td>random</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>placeholder</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>placeholder</td>
                <td>tabular</td>
                <td>information</td>
                <td>irrelevant</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>text</td>
                <td>placeholder</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>visual</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>random</td>
                <td>tabular</td>
                <td>information</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
        </div> -->
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import AddMobil from "@/components/Admin/AddMobil.vue";
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import NavbarAdm from "@/components/NavbarAdm.vue";

export default {
  name: "AddDataMobil",
  data() {
    return{
      mobil: {
        id: null,
        idmobil: "",
        merek: "",
        harga: "",
      }
    };
  },
  components: {
    NavbarAdm,
    Sidebar,
  },
  methods: {
    addMobil() {
      const mobil= {
        id: this.mobil.id,
        idmobil: this.mobil.idmobil,
        merek: this.mobil.merek,
        harga: this.mobil.harga
      };
      axios
        .post("http://localhost:8080/api/mobils", mobil)
        .then((response) => this.$router.push ("/datamobil") (response))
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>