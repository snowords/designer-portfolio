<template>
  <div class="page">
    <div class="container">
      <Footer />
      <div class="px-8 py-16 md:w-3/5 m-auto pt-24">
        <!-- <div>{{ caseItem.subtitle }}</div> -->
        <el-tag class="my-4">{{ caseItem.subtitle }}</el-tag>
        <!-- <el-tag class="ml-2" type="success">Tag 2</el-tag>
        <el-tag class="ml-2" type="info">Tag 3</el-tag> -->
        <div class="text-3xl">{{ caseItem.title }}</div>
        <div class="shadow-xl my-12 border-8 border-white" v-for="pic in caseItem.subpic" :key="pic.index">
          <img :src="dynamicImport(pic)" :alt="pic.index" />
        </div>
        <div class="text-center"> - END. - </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { VITE_APP_CONFIG } from '../config';
import Footer from '../components/Footer.vue';
export default {
  name: 'CaseStudies',
  components: {
    Footer,
  },
  props: {
    caseId: String
  },
  setup() {
    const route = useRoute()
    const caseId = route.params.caseId
    console.log(caseId)
    const caseItem = VITE_APP_CONFIG.projectDesc.find(item => item.id == caseId)
    console.log(caseItem)

    const dynamicImport = (name) => {
      return new URL(`../assets/cases/${name}.png`, import.meta.url).href;
    };
    return {
      caseItem,
      dynamicImport
    };
  }
};
</script>
