<template>
  <div class="container-fluid header">
    <div class="row banner">
      <div class="col-1 banner-item" @click="toggleMenu()" v-if="!openMenu">
          <em class="fa fa-bars sidebar-bar icon" aria-hidden="true" ></em>
      </div>
      <div class="col-1 banner-item" @click="toggleMenu()" v-if="openMenu">
        <em class="fa fa-times icon" aria-hidden="true"></em>
      </div>
      <div class="col-10 logo"></div>
      <div class="col-1 banner-item">
        <router-link to="/">
          <em class="fa fa-bars fa-search icon" aria-hidden="true"></em>
        </router-link>
      </div>
      <AppMenu v-if="openMenu === true"></AppMenu>
    </div>

    <div class="row menu">
      <ul class="menu-items">
        <li class="menu-item" v-for="item in items" :key="item" :class="{active: selectedItem === item}">
          <router-link to="/" class="link">{{ item }}</router-link>
        </li>
      </ul>
      <div class="menu-icons">
        <img src="../assets/icons/font.svg" alt="font"/>
        <img src="../assets/icons/draw.svg" alt="draw" />
      </div>
    </div>
  </div>
</template>

<script>

import {MENU} from "@/common/menu";
import AppMenu from "@/components/AppMenu";

export default {
  name: "AppHeader",
  components: {
    AppMenu
  },
  data() {
    return {
      items: MENU,
      selectedItem: MENU[0],
      openMenu: false
    }
  },

  methods: {
    toggleMenu() {
      console.log('Menu toggled !!!', this.openMenu);
      this.openMenu = !this.openMenu;
    }
  }

}
</script>

<style scoped>
  .header {
    width: 100vmax;
    .banner {
      border-top: 1px solid #000;
      .banner-item {
        display: flex;
        padding: 20px 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .icon {
          font-size: 20px !important;
          color: var(--primary-rosso, #E63036);
        }
      }
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #000;
        border-left: 1px solid #000;
        img {
          max-height: 90px !important;
        }
      }
    }

    .menu {
      padding: 24px 40px;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      display: flex;
      align-items: center;
      gap: 10px;
      align-self: stretch;
      justify-content: space-between;
      .menu-items {
        list-style: none;
        margin-bottom: 0;
        padding: 0;
        .menu-item {
          display: inline-block;
          margin-right: 32px;
          .link {
            color: var(--primary-nero, #000000);
            font-family: Raleway, serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }
        }
        .active {
          border-bottom: 9px solid var(--primary-rosso, #E63036);
        }
      }
      .menu-icons {
        display: flex;
        justify-content: start;
        gap: 14px;
      }
    }
  }
</style>
