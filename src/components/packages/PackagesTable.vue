<template>
  <table class="table table-striped table-bordered table-hover mb-5">
    <thead>
      <tr>
        <th>Package type</th>
        <th>Package hits</th>
        <th>Package name</th>
      </tr>
    </thead>
    <tbody v-if="packages !== null">
      <PackageItem 
        v-for="(pack, packIdx) in packages"
        :key="packIdx"
        :pack="pack"
      />
    </tbody>
  </table>
</template>

<script>
import PackageItem from '@/components/packages/PackageItem'

export default {
  props: {
    packages: {
      type: Array,
      required: true
    }
  },
  components: { PackageItem }
}
</script>