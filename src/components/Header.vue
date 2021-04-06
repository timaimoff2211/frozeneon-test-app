<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline search-form">
          <input class="form-control mr-sm-2 search-form-field" placeholder="Поиск">
          <button class="btn btn-outline-success" type="button">Найти</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    value: String
  }
}
</script>

<style scoped lang="scss">
.search-form {
  width: 100%;
  justify-content: center;

  &-field {
    width: 320px!important;
  }
}
</style>