<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{'disabled': current === 1}">
        <button 
          class="page-link" 
          @click="$emit('setPrevPage')" 
        >
          Предыдущая
        </button>
      </li>
      <li 
        class="page-item"
        :class="{'active': p === current}"
        v-for="p in total"
        :key="p"
        @click="$emit('onPageSelect', p)"
      >
        <button class="page-link">{{ p }}</button>
      </li>
      <li class="page-item" :class="{'disabled': current === total}">
        <button class="page-link" @click="$emit('setNextPage')">Следующая</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true,
      default: 1
    },
    total: {
      type: Number,
      required: false,
      default: 1
    }
  }
}
</script>