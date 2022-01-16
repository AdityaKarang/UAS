import http from "../http-common";

class MobilDataService {
    getAll() {
      return http.get("/");
    }
  
    get(id) {
      return http.get(`/datamobil${id}`);
    }
  
    create(data) {
      return http.post("/datamobil", data);
    }
  
    update(id, data) {
      return http.put(`/datamobil${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/datamobil${id}`);
    }
  
    deleteAll() {
      return http.delete(`/datamobil`);
    }
  
    findByTitle(title) {
      return http.get(`/datamobil?title=${title}`);
    }
  }
  
  export default new MobilDataService();