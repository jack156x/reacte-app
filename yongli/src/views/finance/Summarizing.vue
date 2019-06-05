<template>
	<section class="finance-summarizing-wrapper">
		<Tabs :tabList="tabOptions" @changeTab="changeTabHandler">
			<keep-alive>
				<component :is="currentView.component" :key="currentView.key" :props="currentView"></component>
			</keep-alive>
		</Tabs>
	</section>
</template>

<script>
	import Tabs from '@/components/Tabs'
	import SummarizingReport from '@/views/finance/SummarizingReport'
	import _ from 'lodash/util'

	const tabOptions = [{
			name: '收支财务总汇（历史）',
			component: 'SummarizingReport',
			type: 'history',
		}, {
			name: '收支财务总汇',
			component: 'SummarizingReport',
			type: 'nowadays'
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
			SummarizingReport,
		},
	}

</script>

<style lang="scss">
	.finance-summarizing-wrapper{
		overflow: auto;
	}
</style>
