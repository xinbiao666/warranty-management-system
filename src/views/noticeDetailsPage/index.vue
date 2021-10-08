<template>
    <div class="notice-details-page-container">
        <details-page-header></details-page-header>
        <router-view></router-view>
        <page-footer></page-footer>
    </div>
</template>
<script>
import detailsPageHeader from '../../components/detailsPageHeader/index.vue'
import pageFooter from '../../components/pageFooter/index.vue'
export default {
  name: 'noticeDetailsPage',
  components: {
    detailsPageHeader,
    pageFooter
  }
}
</script>
<style lang="less" scoped>

</style>
