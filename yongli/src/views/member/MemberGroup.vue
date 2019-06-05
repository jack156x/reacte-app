<template>
	<section class="member-account-wrapper">
		<!-- 会员账户核查 -->
		<fe-tabs :tabList="tabList" @changeTab="changeTab">
			<keep-alive>
				<component :is="currentContent.component" :key="currentContent.type" :props="currentContent">
				</component>
			</keep-alive>
		</fe-tabs>
	</section>
</template>

<script>
	import MemberGroupingSettings from '@/views/member/MemberGroupingSettings'

	const tabList = [
		{
			name: '会员分组设置',
			component: 'MemberGroupingSettings',
			type: 'set',
		},
		{
			name: '会员分组管理',
			component: 'MemberGroupingSettings',
			type: 'manage',
		}
	];

	export default {
		name: 'member-group',
		data(){
			return {
				currentContent: tabList[0],
				tabList
			}
		},
		methods: {
			changeTab(tab){
				this.currentContent = tab
			}
		},
		components: {
			MemberGroupingSettings
		}
	}

</script>
