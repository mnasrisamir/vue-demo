<template>
  <div class="home">
    <section class="section1">
      <div class="title">
        {{ selectedItem }}
      </div>
      <div class="tags">
        <div class="tag" v-for="tag of getTags()" :key="tag">
          {{ tag }}
        </div>
      </div>
    </section>

    <section class="section2">
      <div class="row">
        <div class="col-12 p-0">
          <AppCard :background="cards[0].background"
                   :tag="cards[0].tag"
                   :audio="cards[0].audio"
                   :title="cards[0].title" :title-class="cards[0].titleClass"
                   :author="cards[0].author"
                   :authorImage="cards[0].authorImage"
                   :author-display="cards[0].authorDisplay"
                   :see-more="cards[0].seeMore"
                   :date="cards[0].date"
                   :height="cards[0].height"
          >
          </AppCard>
        </div>
        <div class="col-6 p-0">
          <AppCard :background="cards[1].background"
                   :tag="cards[1].tag"
                   :audio="cards[1].audio"
                   :title="cards[1].title" :title-class="cards[1].titleClass"
                   :author="cards[1].author"
                   :authorImage="cards[1].authorImage"
                   :author-display="cards[1].authorDisplay"
                   :see-more="cards[1].seeMore"
                   :date="cards[1].date" :height="cards[1].height"
          >
          </AppCard>
        </div>
        <div class="col-6 p-0 d-flex flex-column">
          <AppCard :background="cards[2].background"
                   :tag="cards[2].tag"
                   :audio="cards[2].audio"
                   :title="cards[2].title" :title-class="cards[2].titleClass"
                   :author="cards[2].author"
                   :authorImage="cards[2].authorImage"
                   :author-display="cards[2].authorDisplay"
                   :see-more="cards[2].seeMore"
                   :date="cards[2].date" :height="cards[2].height"
          >
          </AppCard>
          <AppCard :background="cards[3].background"
                   :tag="cards[3].tag"
                   :audio="cards[3].audio"
                   :title="cards[3].title" :title-class="cards[3].titleClass"
                   :author="cards[3].author"
                   :authorImage="cards[3].authorImage"
                   :author-display="cards[3].authorDisplay"
                   :see-more="cards[3].seeMore"
                   :date="cards[3].date" :height="cards[3].height"
          >
          </AppCard>
        </div>
      </div>

    </section>

    <section class="section3">
      <div class="support-us">
        <div class="title">
          Il tuo supporto è fondamentale
        </div>
        <div class="contact-us">
          <span>Dai il tuo contributo</span>
          <em class="fa-solid fa-arrow-right"></em>
        </div>
      </div>
    </section>

    <section class="section4">
      <div class="row">
        <div class="col-4 p-0">
          <AppCard :background="cards2[0].background"
                   :tag="cards2[0].tag"
                   :audio="cards2[0].audio"
                   :title="cards2[0].title" :title-class="cards2[0].titleClass"
                   :author="cards2[0].author"
                   :authorImage="cards2[0].authorImage"
                   :author-display="cards2[0].authorDisplay"
                   :see-more="cards2[0].seeMore"
                   :date="cards2[0].date"
                   :height="cards2[0].height"
          >
          </AppCard>
        </div>
        <div class="col-4 p-0">
          <AppCard :background="cards2[1].background"
                   :tag="cards2[1].tag"
                   :audio="cards2[1].audio"
                   :title="cards2[1].title" :title-class="cards2[1].titleClass"
                   :author="cards2[1].author"
                   :authorImage="cards2[1].authorImage"
                   :author-display="cards2[1].authorDisplay"
                   :see-more="cards2[1].seeMore"
                   :date="cards2[1].date"
                   :height="cards2[1].height"
          >
          </AppCard>
        </div>
        <div class="col-4 p-0">
          <AppCard :background="cards2[2].background"
                   :tag="cards2[2].tag"
                   :audio="cards2[2].audio"
                   :title="cards2[2].title" :title-class="cards2[2].titleClass"
                   :author="cards2[2].author"
                   :authorImage="cards2[2].authorImage"
                   :author-display="cards2[2].authorDisplay"
                   :see-more="cards2[2].seeMore"
                   :date="cards2[2].date"
                   :height="cards2[2].height"
          >
          </AppCard>
        </div>
        <div class="col-4 p-0">
          <AppCard :background="cards2[3].background"
                   :tag="cards2[3].tag"
                   :audio="cards2[3].audio"
                   :title="cards2[3].title" :title-class="cards2[3].titleClass"
                   :author="cards2[3].author"
                   :authorImage="cards2[3].authorImage"
                   :author-display="cards2[3].authorDisplay"
                   :see-more="cards2[3].seeMore"
                   :date="cards2[3].date"
                   :height="cards2[3].height"
          >
          </AppCard>
        </div>
        <div class="col-8 p-0">
          <AppCard :background="cards2[4].background"
                   :tag="cards2[4].tag"
                   :audio="cards2[4].audio"
                   :title="cards2[4].title" :title-class="cards2[4].titleClass"
                   :author="cards2[4].author"
                   :authorImage="cards2[4].authorImage"
                   :author-display="cards2[4].authorDisplay"
                   :see-more="cards2[4].seeMore"
                   :date="cards2[4].date"
                   :height="cards2[4].height"
                   :padding="cards2[4].padding"
          >
          </AppCard>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import {MENU} from "@/common/menu";
import {CARDS, CARDS_2} from "@/common/cards";
import AppCard from "@/components/AppCard";

export default {
  name: 'HomeView',
  components: {
    AppCard
  },

  data() {
    return {
      items: MENU,
      selectedItem: MENU[0],
      cards: CARDS,
      cards2: CARDS_2,
    }
  },

  methods: {
    getTags() {
      return this.items.filter(item => item !== this.selectedItem);
    },
  }

}
</script>

<style scoped>
  .home {
    padding: 0;
    width: 100vmax;
    .section1 {
      padding: 64px 40px;
      display: flex;
      justify-content: space-between;
      .title {
        color: #010101;
        font-size: 51px;
        font-style: normal;
        font-weight: 700;
        line-height: 46px;
      }
      .tags {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        .tag {
          display: flex;
          height: 40px;
          padding: 12px 16px;
          align-items: center;
          gap: 4px;
          border-radius: 4px;
          border: 1px solid #000;
          background: #E2F1E8;
          box-shadow: -2px 2px 0 0 #000;
          font-family: Raleway, serif;
          font-size: 10px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
        }
      }
    }
  }

  .section2 {
    padding: 0;
    width: 100%;
  }

  .section3 {
    padding: 0;
    width: 100%;

    .support-us {
      display: flex;
      justify-content: space-between;
      padding: 84px 40px;
      background: var(--secondary-eggshell, #000);

      .title {
        color: #010101;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 46px;
      }

      .contact-us {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #000;
        text-align: right;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }

  @media (max-width: 577px) {
    .home {
      .section1 {
        flex-direction: column;
        .tags {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          max-width: 100vw !important;
        }
      }
    }
  }

</style>
