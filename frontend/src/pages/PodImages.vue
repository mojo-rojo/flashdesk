<template>
  <div class="h-screen flex overflow-hidden">
    <SideNavbar />
    <div id="test" class="flex-grow p-8 bg-emrald-300 overflow-auto">
      <h1 class="text-3xl font-semibold mb-6 text-gray-800">Pod Images</h1>
      <hr class="border-t-2 border-blue-400 my-6" />
      <div class="grid grid-cols-1">
        <div
          v-for="(image, index) in podImages"
          :key="index"
          class="border-2 border-blue-400 bg-white shadow-lg p-6 m-6"
        >
        <h3
            class="text-xl font-bold text-gray-800"
            style="display: grid; grid-template-columns: 1fr auto"
          >
            {{ image.image_name }}
            <button
              class="bg-blue-400 text-white p-2 pl-4 pr-4 hover:bg-blue-600 focus:outline focus:ring focus:border-blue-400"
            >
              Extract
            </button>
          </h3>
          <hr class="border-t-2 border-blue-400 my-6" />
          <div class="mt-4">
            <div class="pb-2 mt-2">
              <p class="text-gray-700">
                <strong>Image ID:</strong> {{ image.image_id }}
              </p>
            </div>
            <div class="pb-2 mt-2">
              <p class="text-gray-700">
                <strong>Created On:</strong>
                {{ new Date(image.created_on).toDateString() }}
              </p>
            </div>
            <div class="pb-2 mt-2">
              <p class="text-gray-700">
                <strong>Created By:</strong> {{ image.created_by }}
              </p>
            </div>
            <div class="mt-2">
              <p class="text-gray-700">
                <strong>Description:</strong> {{ image.image_description }}
              </p>
            </div>
            <!-- Add more fields here if needed -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from '@/components/SideNavbar.vue'
export default {
  name: 'PodImages',
  data() {
    return {
      podImages: [],
    }
  },
  mounted() {
    this.fetchPodImages()
  },
  methods: {
    async fetchPodImages() {
      try {
        const response = await fetch(
          '/api/method/flashdesk.api.pod_image.get_all_published_pod_images'
        )
        const data = await response.json()
        this.podImages = data.message
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    },
  },
  components: { SideNavbar },
}
</script>
