import { defineStore } from "pinia";
export const testeStore = defineStore("teste", {
  state: () => ({}),
  getters: {},
  actions: {
    async teste(page: string): Promise<any> {
      let data = await useFetchData("users?page=" + page, "GET");
      return data;
    },
  },
});
