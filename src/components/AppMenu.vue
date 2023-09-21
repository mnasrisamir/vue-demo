<template>
<div class="right-menu">
  <div class="row">
    <div class="col-4 big-item">
        <h1>Articoli</h1>
        <div>Trend, dati e novità del Terzo Settore.</div>
    </div>
    <div class="col-4 big-item">
      <h1>Storie</h1>
      <div>Letture ed approfondimenti dei fenomeni complessi.</div>
    </div>
    <div class="col-4 big-item">
      <h1>Interviste</h1>
      <div>Racconti reali di persone ed organizzazioni.</div>
    </div>
    <div class="col-4 big-item">
      <h1>Opinioni</h1>
      <div>Riflessioni e confronti dei nostri opinionisti.</div>
    </div>
    <div class="col-4 big-item">
      <h1>Podcast</h1>
      <div>Un luogo per dare voce ai protagonisti della sostenibilità.</div>
    </div>
    <div class="col-4 big-item">
      <h1>Bookazine</h1>
      <div>Una rivista da leggere e un libro da conservare.</div>
    </div>

    <div class="col-2 small-item">
      <span>Chi siamo</span>
    </div>
    <div class="col-2 small-item">
      <span>Comitato editoriale</span>
    </div>
    <div class="col-2 small-item">
      <span>Servizi</span>
    </div>
    <div class="col-2 small-item">
      <span>Agenda / Eventi</span>
    </div>
    <div class="col-2 small-item">
      <span>Mappa dell’attivismo</span>
    </div>
    <div class="col-2 small-item">
      <span>Inchieste crowdfunding</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AppMenu",
}
</script>

<style scoped>
.right-menu {
  position: absolute;
  top: 123px;
  left: 0;
  width: 100vmax;
  z-index: 2;
  background: #ffffff;
  padding: 0;

  .big-item {
    display: flex;
    justify-content: flex-end;
    align-items: start;
    flex-direction: column;
    border: 1px solid gainsboro;
    height: 30vh;
    padding: 40px
  }

  .small-item {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    border: 1px solid gainsboro;
    padding: 40px
  }
}
</style>
