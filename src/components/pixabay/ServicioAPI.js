import api from "./axios";

const API_KEY = process.env.VUE_APP_KEY;//the same in .env

class ServicioAPI
{
  async getImages(data, pg=1) {
    const encode = encodeURIComponent(data);
    const cadena = `?key=${API_KEY}&q=${encode}&image_type=photo&page=${pg}`;
    const r = await api.get(cadena);
    
    console.log(r);
    return r.data;
  }
}

export default new ServicioAPI();