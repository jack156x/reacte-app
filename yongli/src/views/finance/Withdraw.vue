/*
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-18 13:37:05 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-23 13:53:24
 */
<template>
	<section class="finance-withdraw-wrapper">
		<Tabs :tabList="tabOptions" @changeTab="changeTabHandler">
			<keep-alive>
				<component :is="currentView.component" :key="currentView.key" :props="currentView"></component>
			</keep-alive>
		</Tabs>
	</section>
</template>

<script>
	import Tabs from '@/components/Tabs'
	import WithdrawTable from '@/views/finance/WithdrawTable'
	import _ from 'lodash/util'

	const tabOptions = [{
			name: '会员取款未审核列表',
			component: 'WithdrawTable',
			type: 'unaudited',
		}, {
			name: '会员取款列表',
			component: 'WithdrawTable',
			type: 'audited',
		}, {
			name: '会员自动出款列表',
			component: 'WithdrawTable',
			type: 'auto',
		}].map(v=>({...v, ...{ key: _.uniqueId(v.component) }}));

	export default {
		data() {
			return {
				currentView: tabOptions[0],
				tabOptions,
			};
		},
		methods: {
			changeTabHandler(tab){
				this.currentView = tab;
			},
		},
		created(){
		},
		computed: {
			
		},
		components: {
			Tabs,
			WithdrawTable,
		},
	}

</script>

<style lang="scss">
	.finance-withdraw-wrapper{
		overflow: auto;
	}
</style>
