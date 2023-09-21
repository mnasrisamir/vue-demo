<template>
  <div class="card-box" :style="getCardBoxStyle" >
    <div class="card-box-tag" v-if="tag">
      {{ tag }}
    </div>
    <div v-if="audio">
      <audio-player
          ref="audioPlayer"
          :audio-list="audio"
          theme-color="#ff2929"
      />
    </div>
    <div class="card-box-title" :class="titleClass" v-if="title">
      {{ title }}
    </div>
    <div class="card-box-author" :style="{'flex-direction': authorDisplay}" v-if="author">
      <div class="card-box-author-image" :style="getAuthorImageStyle"></div>
      <div class="card-box-author-info">
        <span>
          {{ author }}
        </span>
        <span>
          {{ date }}
        </span>
      </div>
    </div>
    <div v-if="seeMore === true">
      <em class="fa-solid fa-arrow-right" style="color: white !important;"></em>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
  props: {
    background: String,
    tag: String,
    audio: String,
    title: String,
    titleClass: String,
    author: String,
    authorImage: URL,
    authorDisplay: String,
    date: String,
    seeMore: Boolean,
    height: String,
    padding: String,
  },
  computed: {
    getCardBoxStyle() {
      return {
        'padding': this.padding ? this.padding : "44px 40px",
        'height': this.height ? this.height : '500px',
        'background': this.background
      }
    },
    getAuthorImageStyle() {
      return {
        'background-image': 'url('+this.authorImage+')'
      }
    },
  }
}
</script>

<style scoped>
.card-box {
  display: flex;
  padding: 44px 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  resize: both;
  border-bottom: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  height: calc(0.664 * 100vw);
  align-self: stretch;

  .card-box-tag {
    display: flex;
    height: 20px;
    padding: 4px 12px;
    align-items: flex-start;
    gap: 4px;
    border-radius: 4px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: -2px 2px 0 0 #000;
    font-family: Raleway, serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  .card-box-title {
    color: var(--primary-bianco, #fff);
    font-style: normal;
    font-weight: 700;
    max-width: 700px;
    &.title-xl {
      font-size: 40px;
      line-height: 54px;
    }
    &.title-l {
      font-size: 32px;
      line-height: 46px;
    }
    &.title-m {
      font-size: 24px;
      line-height: 32px
    }
  }

  .card-box-author {
    display: flex;
    flex-direction: row;
    gap: 16px;
    color: white;
    .card-box-author-image {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      background-size: cover !important;
    }
    .card-box-author-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

  }
}
</style>
