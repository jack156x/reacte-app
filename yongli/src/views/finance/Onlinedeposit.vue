<template>
	<div class="onlineContent">
		<section class="member-info-wrapper online-info-wrapper">
			<TabScomponent :tabList="tabList" @changeTab="changeTab">
				<keep-alive>
					<component 
					:is="currentContent.component" 
					:viewType="currentContent.type" 
					:depositTypeUrl="depositTypeUrl" 
					:key="currentContent.key">
					</component>
				</keep-alive>
			</TabScomponent>
		</section>
	</div>
</template>

<script>
import TabScomponent from "@/components/Tabs";
import onlinedeposits from "@/views/finance/OnlineDepositList";
	export default {
		name: 'finance-onlinedeposit',
		data(){
			return {
				currentContent: {
						name: "在线存款订单",
						component: "onlinedeposits",
						type: 'OnlineDepositType',
						url: 'finance.onlinedeposits',
						key: 'OnlineDepositType1',
					},
				tabList: [
					{
						name: "在线存款订单",
						component: "onlinedeposits",
						type: 'OnlineDepositType',
						url: 'finance.onlinedeposits',
						key: 'OnlineDepositType1',
					},
					{
						name: "在线存款人工确定",
						component: "onlinedeposits",
						type: 'userConfirm',
						url: 'finance.onlinedeposits',
						key: 'OnlineDepositType2',
					},
				],
				depositTypeUrl: 'finance.onlinedeposits'
			};
		},
		methods:{
			changeTab: function (tab) {
				// this.$logger.log(index)
      			this.$logger.log(2552)
				this.currentIndex = tab.index;
				this.currentContent = tab;
				this.type = tab.type;
				this.depositTypeUrl = tab.url;
				this.$logger.log(this.depositTypeUrl)
			}
		},
		watch: {
			
		},
		async created(){
		},
		components: {
			TabScomponent,
			onlinedeposits
		}
	}
</script>


<style lang="scss">
.onlineContent { 
	.online-info-wrapper{ height: 100%; }
};
</style>
