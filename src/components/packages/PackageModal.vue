<template>
  <div class="modal fade" id="packageModal" tabindex="-1" aria-labelledby="packageModalTitle" aria-hidden="false">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="packageModalTitle">{{ item.name }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModalhandler">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row border-bottom pb-3 mb-3">
            <div class="col">
              <p class="m-0">Name:</p>
              <p class="h5 m-0">{{ item.name }}</p>
            </div>
            <div class="col">
              <p class="m-0">Hits:</p>
              <p class="h5 m-0">{{ item.hits }}</p>
            </div>
          </div>
          <div class="row border-bottom pb-3 mb-3">
            <div class="col">
              <p class="m-0">Type:</p>
              <p class="h5 m-0">{{ item.type }}</p>
            </div>
            <div class="col">
              <p class="m-0">Stats total:</p>
              <p class="h5 m-0">{{ item.stats.total }}</p>
            </div>
          </div>
          <div class="row border-bottom mb-3 pb-3">
            <div class="col">
              <p class="m-0">Latest version:</p>
              <p class="h5 m-0">{{ item.tags.latest }}</p>
            </div>
            <div class="col">
              <p class="m-0">Default file:</p>
              <p class="h5 m-0">{{ item.defaultFile }}</p>
            </div>
          </div>
          <div class="row mb-3 pb-3">
            <div class="col">
              <p class="m-0">Versions:</p>
              <ul class="any-list border rounded">
                <li v-for="version in item.versions" :key="version" class="any-list__item">
                  {{ version }}
                </li>
              </ul>
            </div>
            <div class="col">
              <p class="m-0">File structure:</p>
              <ul class="any-list border rounded">
                <li v-for="file in item.files" :key="file.name" class="any-list__item">
                  {{ file.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" data-dismiss="modal" @click="closeModalhandler">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    closeModalhandler() {
      this.$store.commit('dropPackage')
    }
  }
}
</script>

<style lang="scss" scoped>
.any-list {
  max-height: 150px;
  overflow-y: scroll;
  padding-left: 10px;

  &__item {
    list-style: none;
  }
}
</style>