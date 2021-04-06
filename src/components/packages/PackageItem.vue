<template>
  <tr
    @click="getPackage"
  >
    <td>{{ pack.type }}</td>
    <td>{{ pack.hits }}</td>
    <td>{{ pack.name }}</td>
  </tr>
</template>

<script>
import $ from 'jquery';
import {mapGetters} from 'vuex';

export default {
  props: {
    pack: {
      type: Object,
      required: true
    }
  },
  methods: {
    async getPackage() {
      await this.$store.dispatch('fetchSomePackage', this.pack)
      if(this.selectedPackage !== null) {
        $('#packageModal').modal('show');
      }
    }
  },
  computed: {
    ...mapGetters({selectedPackage: 'getPackage'})
  }
}
</script>