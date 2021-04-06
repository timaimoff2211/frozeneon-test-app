<template>
  <div id="app">
    <Header />

    <div class="container pt-5 pb-5">
      <PackagesTable :packages="packagesForPage" v-if="packages" />
      <div class="text-center" v-else>
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      
      <TablePagination 
        v-if="packages"
        :total="totalPages"
        :current="page"
        @setPrevPage="setPrevPage"
        @setNextPage="setNextPage"
        @onPageSelect="setPage"
      />
    </div>

    <div class="container">
      <Footer />
    </div>

    <PackageModal
      v-if="selectedPackage !== null"
      :item="selectedPackage"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from '@/components/Header'
import PackagesTable from '@/components/packages/PackagesTable'
import PackageModal from '@/components/packages/PackageModal'
import TablePagination from '@/components/packages/TablePagination'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    PackagesTable,
    Footer,
    PackageModal,
    TablePagination
  },
  data() {
    return {
      perPage: 10,
      page: 1
    }
  },
  methods: {
    setNextPage() {
      if(this.page === this.totalPages) return;
      this.page++;
    },
    setPrevPage() {
      if(this.page - 1 === 0) return;
      this.page--;
    },
    setPage(page) {
      this.page = page
    }
  },
  async created() {
    await this.$store.dispatch('fetchMostPopularPackages');
  },
  computed: {
    ...mapGetters({
      selectedPackage: 'getPackage',
      packages: 'getPackages'
    }),
    totalPages() {
      return this.packages !== null ? Math.ceil(this.packages.length / this.perPage) : 1
    },
    pageOffset() {
      return (this.page-1) * this.perPage;
    },
    packagesForPage() {
      return this.packages.filter((pack, packIdx) => {
        const index = packIdx+1;
        if(index > this.pageOffset && index <= this.pageOffset + this.perPage) return pack;
      })
    }
  }
}
</script>

<style lang="scss"></style>
