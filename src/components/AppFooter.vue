<template>
  <div class="footer">
    <div class="footer-items">
      <div v-for="item of items" :key="item">{{ item }}</div>
    </div>
    <div class="copyright">
      © 1994-2022 Vita Società Editoriale S.p.A.
    </div>
  </div>
</template>

<script>
import {FOOTER_ITEMS} from "@/common/footer";

export default {
  name: "AppFooter",
  data() {
    return {
      items: FOOTER_ITEMS,

    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  padding: 48px 40px;
  gap: 24px;
  justify-content: space-between;
  background: var(--grey-1, #F4F4F4);
  width: 100vmax;
  .footer-items {
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}

@media (min-width: 578px) {
  .footer {
    align-items: center;
    flex-direction: row;
    .footer-items {
        align-items: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
    }
  }
}

@media (max-width: 577px) {
  .footer {
    align-items: flex-start;
    flex-direction: column;
    .footer-items {
      flex-direction: column;
      align-items: flex-start;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
    }
  }
}

</style>
