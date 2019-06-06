<template>
	<section class="member-report-wrapper">
		<!-- 会员账户核查 -->
		<fe-tabs :tabList="tabList" @changeTab="changeTab">
			<keep-alive>
				<component :is="currentContent.component" :key="currentContent.key" :props="currentContent" :view-type="currentContent.type"></component>
			</keep-alive>
		</fe-tabs>
	</section>
</template>

<script>
	import NewMemberStatistics from '@/views/member/NewMemberStatistics'

	const tabList = [
		{
			name: '会员新增统计',
			type: 'newly',
		},
		{
			name: '会员在线统计',
			type: 'online',
		},
		{
			name: '会员活跃度统计',
			type: 'activity',
		}
	].map(v=>({ ...v, ...{ component: 'NewMemberStatistics', key: _.uniqueId(v.component) }}));

	export default {
		name: 'member-report',
		data(){
			return {
				currentContent: tabList[0],
				tabList
			}
		},
		methods: {
			changeTab: function (tab) {
				this.currentContent = tab;
			}
		},
		async created(){},
		components: {
			NewMemberStatistics
			// MemberActivityStatistics
		}
	}

</script>