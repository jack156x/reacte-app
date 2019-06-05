/*会员返水信息
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-21 11:10:24 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-21 14:52:28
 */
<template>
	<section class="rakeback-info-wrapper">
		<Tabs :tabList="tabOptions" @changeTab="changeTabHandler">
			<keep-alive>
				<component :is="currentView.component" :key="currentView.key" :props="currentView"></component>
			</keep-alive>
		</Tabs>
	</section>
</template>

<script>
	import Tabs from '@/components/Tabs'
	import InfoTable from '@/views/rakeback/InfoTable'
	import _ from 'lodash/util'

	const tabOptions = [{
			name: '六合彩返水日志',
			type: 'lottery',
		}, {
			name: '彩票返水日志',
			type: 'lottery'
		}, {
			name: '真人返水日志',
			type: 'game',
		}, {
			name: '电子返水日志',
			type: 'game',
		}, {
			name: '体育返水日志',
			type: 'game_sports',
		}, {
			name: '电竞返水日志',
			type: 'game',
		}, {
			name: '棋牌返水日志',
			type: 'game',
		}, {
			name: '返水核验',
			type: 'verification',
		}].map(v=>({...v, ...{ key: _.uniqueId(v.component), component: 'InfoTable' }}));

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
			InfoTable,
		},
	}

</script>

<style lang="scss">
	.rakeback-info-wrapper{
	}
</style>
