/*个人信息
 * @Author: zzh0211@live.com 
 * @Date: 2019-05-24 14:17:31 
 * @Last Modified by: zzh0211@live.com
 * @Last Modified time: 2019-05-24 17:10:07
 */
<template>
	<section class="personal-wrapper">
		<Tabs :tabList="tabOptions" @changeTab="changeTabHandler">
			<keep-alive>
				<component :is="currentView.component" :key="currentView.key" :props="currentView"></component>
			</keep-alive>
		</Tabs>
	</section>
</template>

<script>
	import Tabs from '@/components/Tabs'
	import PersonalSet from '@/views/rests/PersonalSet'

	const tabOptions = [{
			name: '基本信息',
			type: 'basic',
			key: 'PersonalSet',
			component: 'PersonalSet',
		}];

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
			PersonalSet,
		},
	}

</script>

<style lang="scss">
	.personal-wrapper{
	}
</style>
