<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Create Anime</h1>
    <form @submit.prevent="createAnime" class="max-w-md">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title"
          >Title:</label
        >
        <input
          type="text"
          v-model="title"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="genre"
          >Genre:</label
        >
        <input
          type="text"
          v-model="genre"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="image"
          >Image URL:</label
        >
        <input
          type="text"
          v-model="image"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="description"
          >Description:</label
        >
        <textarea
          v-model="description"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="views"
          >Views:</label
        >
        <input
          type="number"
          v-model="views"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Status:</label
        >
        <div class="flex items-center">
          <input
            type="checkbox"
            v-model="new"
            class="form-checkbox h-5 w-5 text-gray-600"
          /><span class="ml-2">New</span>
        </div>
        <div class="flex items-center mt-2">
          <input
            type="checkbox"
            v-model="ongoing"
            class="form-checkbox h-5 w-5 text-gray-600"
          /><span class="ml-2">Ongoing</span>
        </div>
        <div class="flex items-center mt-2">
          <input
            type="checkbox"
            v-model="finished"
            class="form-checkbox h-5 w-5 text-gray-600"
          /><span class="ml-2">Finished</span>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="url"
          >URL:</label
        >
        <input
          type="text"
          v-model="url"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: "",
      genre: "",
      image: "",
      description: "",
      views: 0,
      new: false,
      ongoing: false,
      finished: false,
      url: "",
    };
  },
  methods: {
    async createAnime() {
      try {
        const response = await axios.post("/api/watch/create", {
          title: this.title,
          genre: this.genre,
          image: this.image,
          description: this.description,
          views: this.views,
          new: this.new,
          ongoing: this.ongoing,
          finished: this.finished,
          url: this.url,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
