<template>
  <div class="text-gray-400 text-sm px-6 md:px-10 w-screen absolute -translate-y-12">
    <div>
      Copyright © {{ year }} Muzhui Inc. All rights reserved.
    </div>
    <div>
      Developed by <a href="https://www.snoword.online">Snoword</a> with <span class="hover:text-red-700 hover:animate-pulse">❤</span>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    const year = new Date().getFullYear();
    return {
      year
    };
  },
}
</script>