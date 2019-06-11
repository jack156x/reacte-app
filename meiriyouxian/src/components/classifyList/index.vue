<template>
    <div>
        <productList v-for="(itemImage,index) in getData" 
                    :key="index" 
                    :itemImage="itemImage.productImage" 
                    :freshImage="itemImage.freshImage"
                    :subTitle="itemImage.subTitle"
                    :messTtitle="itemImage.messTitle"
                    :tagTxt="itemImage.tagTxt"
                    :tagIcon="itemImage.tagIcon"
                    :upPriceName="itemImage.upPriceName"
                    :upPrice="itemImage.upPrice"
                    :downPrice="itemImage.downPrice"
                    :downPriceName="itemImage.downPriceName"
                    />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import productList from "../listProduct/product";
export default {
  data() {
    return {};
  },
  components: {
    productList
  },
  computed: {
    ...mapGetters(["getData"])
  }
};
</script>

<style scoped>
</style>