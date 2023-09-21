<template>
  <TopHeader></TopHeader>
  <AppHeader></AppHeader>
  <router-view/>
  <AppFooter></AppFooter>
</template>

<script>
  import AppHeader from "@/components/AppHeader";
  import AppFooter from "@/components/AppFooter";
  import TopHeader from "@/components/TopHeader";
  export default {
    components: {
      TopHeader,
      AppFooter,
      AppHeader
    }
  }
</script>
