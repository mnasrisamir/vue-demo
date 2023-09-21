<template>
<div class="top-header">
  <ul class="top-header-items">
    <li class="top-header-item">Contribuisci</li>
    <li class="top-header-item">Abbonati</li>
  </ul>
  <div class="d-none d-md-flex align-items-center justify-content-start">
    <img src="../assets/icons/user.svg" alt="accedi" class="mr-2"/> Accedi
  </div>
</div>
</template>

<script>
export default {
  name: "TopHeader"
}
</script>

<style scoped>
.top-header {
  width: 100vmax;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 40px;
  background: var(--primary-bianco, #FFF);

  .top-header-items {
    list-style: none;
    margin-bottom: 0;
    padding: 0;
    .top-header-item {
      display: inline-block;
      margin-right: 16px;
    }
  }
}
</style>
