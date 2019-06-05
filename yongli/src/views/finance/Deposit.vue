<template>
	<section class="member-info-wrapper">
		<TabScomponent :tabList="tabList" @changeTab="changeTab">
			<keep-alive>
				<component :is="currentContent.component" :viewType="currentContent.type" :key="currentContent.key"></component>
			</keep-alive>
		</TabScomponent>
	</section>
</template>

<script>
	import TabScomponent from "@/components/Tabs";
	import NoAuditList from "@/views/finance/NoAuditList";
	export default {
		name: 'finance-deposit',
		data(){
			return {
				currentContent: {
					name: "会员填单存款未审核列表",
					component: "NoAuditList",
					type: 'NoAuditType',
					key: 'NoAuditType'
				},
				tabList: [
					{
						name: "会员填单存款未审核列表",
						component: "NoAuditList",
						type: 'NoAuditType',
						key: 'NoAuditType'
					},
					{
						name: "会员填单存款列表",
						component: "NoAuditList",
						type: 'DepositType',
						key: 'DepositType'
					}
				],
				type: 'NoAuditType'
			};
		},
		methods:{
			changeTab: function (tab) {
				// this.$logger.log(index)
      			this.$logger.log(2552)
				this.currentIndex = tab.index;
				this.currentContent = tab;
				this.type = tab.type;
			}
		},
		watch: {
			
		},
		async created(){
		},
		components: {
			TabScomponent,
			NoAuditList
		}
	}
</script>


<style lang="scss">

</style>
