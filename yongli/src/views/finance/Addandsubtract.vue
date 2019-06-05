<template>
	<section class="member-info-wrapper">
		<TabScomponent :tabList="tabList" @changeTab="changeTab">
			<keep-alive>
				<component :is="currentContent"></component>
			</keep-alive>
		</TabScomponent>
	</section>
</template>

<script>
	import TabScomponent from "@/components/Tabs";
	import additionSincere from "@/views/finance/AdditionSincere";
	import SubtractionSincere from '@/views/finance/SubtractionSincere';
	import InternalSincere from '@/views/finance/InternalSincere';
	export default {
		name: 'finance-addandsubtract',
		data(){
			return {
				currentContent: "additionSincere",
				tabList: [
					{
					// index: 0,
					name: "会员加款",
					component: "additionSincere"
					},
					{
					// index: 1,
					name: "会员减款",
					component: "SubtractionSincere"
					},
					{
					// index: 2,
					name: "内部加减款",
					component: "InternalSincere"
					}
				]
			};
		},
		methods:{
			changeTab: function (tab) {
				// this.$logger.log(44)
				// this.$logger.log(index)
      			this.$logger.log(2552)
				this.currentIndex = tab.index;
				this.currentContent = tab.component;
			}
		},
		watch: {
			
		},
		async created(){

		},
		components: {
			TabScomponent,
			additionSincere,
			SubtractionSincere,
			InternalSincere
		}
	}
</script>


<style lang="scss">
.member-info-wrapper { background-color: #fff; }
</style>
