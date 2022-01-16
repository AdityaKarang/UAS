<template>
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
          <h1 class="h2">Data Mobil</h1>
        </div>
        <div class="table-responsive mt-5">
          <router-link to="/adddatamobil" style="float: right">
            <button type="button" class="btn btn-primary">Add</button>
          </router-link>
          <table class="table text-nowrap">
            <thead class="text-center">
              <tr>
                <th class="border-top-0">No</th>
                <th class="border-top-0">Id Mobil</th>
                <th class="border-top-0">Merek</th>
                <th class="border-top-0">Harga</th>
                <th class="border-top-0">Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <router-link to="/editdatamobil">
                      <button type="button" class="btn btn-primary me-2">
                        Edit
                      </button>
                    </router-link>
                    <button
                      type="button"
                      class="btn btn-danger rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Hapus Data
                            </h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">Anda Yakin?</div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-primary me-2">
                              Save changes
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr> -->

              <tr class="text-center" v-for="(mobil, index) in mobils" :key="mobil.id">
              <td>{{ index+1 }}</td>
              <td>{{ mobil.idmobil }}</td>
              <td>{{ mobil.merek }}</td>
              <td>{{ mobil.harga }}</td>
              <td>
                <router-link class="btn btn-primary me-2"
                :to="'/editdatamobil/' + mobil.id">
                  EDIT
                </router-link>
                <router-link class="btn btn-danger me-2"
                :to="'/deletemobil/' + mobil.id">
                  Delete
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
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
import axios from "axios";
import NavbarAdm from "@/components/NavbarAdm.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Datamobil",
  data() {
    return {
      mobils: [],
      // currentMobil : null,
    };
  },
  components: {
    NavbarAdm,
    Sidebar,
  },
  methods: {
    setMobils(data) {
      this.mobils = data;
    },
  },
   mounted() {
    axios
      .get("http://localhost:8080/api/mobils")
      .then((response) => this.setMobils(response.data))
      .catch((error) => console.log(error));
  },
};
</script>


<style>
</style>