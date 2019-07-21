<template>
	<div class="page-manage">
	<van-nav-bar
		  title="管理"
		  left-arrow
		   @click-left="onClickLeft"
		/>
		<van-dropdown-menu active-color="#fc7e21">
		  <van-dropdown-item v-model="value1" :options="option1" />
		  <van-dropdown-item v-model="value2" :options="option2" />
		  <van-dropdown-item v-model="value3" :options="option3" />
		  <van-dropdown-item v-model="value4" :options="option4" />
		  <van-dropdown-item v-model="value5" :options="option5" />
		</van-dropdown-menu>
		<div class="btn-wrap"><van-button type="warning" size="large">修改</van-button></div>
	</div>
</template>
<script>
	import { NavBar } from 'vant';
	import { Button } from 'vant';
	import { router } from '../router';
	import { DropdownMenu, DropdownItem } from 'vant';

	export default{
		data(){
			return {
				value1:0,
				value2:0,
				value3:0,
				value4:0,
				value5:0,
				option1:[
			        { text: '天', value: 0 },
			        { text: '月', value: 1 }
			    ],
			    option2:[
			        { text: '岗位', value: 0 },
			        { text: '月', value: 1 }
			    ],
			    option3:[
			        { text: '姓名', value: 0 },
			        { text: '月', value: 1 }
			    ],
			    option4:[
			        { text: '菜品', value: 0 },
			        { text: '月', value: 1 }
			    ],
			    option5:[
			        { text: '数量', value: 0 },
			        { text: '月', value: 1 }
			    ]
			};
		},
		components:{
			[NavBar.name]:NavBar,
			[DropdownMenu.name]:DropdownMenu,
			[DropdownItem.name]:DropdownItem,
			[Button.name]:Button
		},
		methods:{
			onClickLeft(){
				this.$router.push({path:"/main/statistic"})
			}
		}
	}
</script>
<style>

	.page-manage .van-button--warning{
		background-color: #fc7e21;
		width: 100%;
		line-height: 37px;
		height: 37px;
	}
	.page-manage .btn-wrap{
		padding-top: 200px;
		width: 90%;
		margin: 0 auto;
	}
	.page-manage .van-nav-bar__arrow{
		font-size: 27px;
	}
</style>