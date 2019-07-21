<template>
	<div class="page-statistic">
		<van-nav-bar title="统计"/>
		<div class="top-row">
			<van-row  gutter="10" type="flex" align="center" justify="space-around">
				<van-col span="7" v-if="type==1"> <van-button round v-on:click="changeType(1)" type="warning" size="small">厨师</van-button> </van-col>
				<van-col span="7" v-if="type==1"> <van-button round v-on:click="changeType(2)" type="default" size="small">配菜</van-button> </van-col>
				<van-col span="7" v-if="type==2"> <van-button round v-on:click="changeType(1)" type="default" size="small">厨师</van-button> </van-col>
				<van-col span="7" v-if="type==2"> <van-button round v-on:click="changeType(2)" type="warning" size="small">配菜</van-button> </van-col>
				<van-col span="4"></van-col>
				<van-col span="6" class="more-btn">
					<router-link class="gotoBtn" to="/manage">管理<van-icon name="arrow" /></router-link>
				</van-col>
			</van-row>
		</div>
		<div class="page-maincont">
			<van-sidebar v-model="activeKey">
				  <van-sidebar-item title="刘毅" />
				  <van-sidebar-item title="刘毅" />
				  <van-sidebar-item title="刘毅" />
				  <van-sidebar-item title="刘毅" />
				  <van-sidebar-item title="刘毅" />
				  <van-sidebar-item title="刘毅" />
				  <van-sidebar-item title="刘毅" />
			</van-sidebar>
			<div class="side-cont">
				<van-row>
					<van-col span="8">土豆丝</van-col>
					<van-col span="8"> 10份 </van-col>
					<van-col span="8"> 100元 </van-col>
				</van-row>
				<van-row>
					<van-col span="8">土豆丝</van-col>
					<van-col span="8"> 10份 </van-col>
					<van-col span="8"> 100元 </van-col>
				</van-row>
				<van-row>
					<van-col span="8">土豆丝</van-col>
					<van-col span="8"> 10份 </van-col>
					<van-col span="8"> 100元 </van-col>
				</van-row>
			</div>
		</div>
	</div>
</template>
<script>

	import { Button } from 'vant';
	import { Row, Col } from 'vant';
	import { NavBar } from 'vant';
	import { Icon } from 'vant';
	import { Sidebar, SidebarItem } from 'vant';

	export default{
		data(){
			return {
				activeKey:0,
				type:1
			};
		},
		components:{
			[Button.name]:Button,
			[Row.name]:Row,
			[Col.name]:Col,
			[NavBar.name]:NavBar,
			[Icon.name]:Icon,
			[Sidebar.name]:Sidebar,
			[SidebarItem.name]:SidebarItem
		},
		methods:{
			changeType(type){
				console.log(type,this.type)
					this.type = type;
			}
		}
	}
</script>
<style type="text/css">
	.gotoBtn{
		color: #fc7e21;
	}
	.page-statistic .van-button{
		padding: 0 25px;
		line-height: 34px;
		height: 34px;
		font-size: 15px;
	}
	.page-maincont{
		display: flex;
	}
	.page-maincont .side-cont{
		flex: 1;
		margin-left: -1px;
	}
	.top-row{
		background: #f8f8f8;
    	padding: 8px 16px;
    	box-sizing: border-box;
    	margin-right: 0px;
	}
	.more-btn{
		text-align: right;
	}
	.page-statistic .van-button--warning{
		background: #fab637;
		border-color: #fab637;
	}
	.van-hairline--bottom::after{
		border-color: #cccccc;
	}
	.van-button--default{
		background: transparent;
		border-color: #cccccc;
	}
	.van-sidebar-item--select{
		border-color: #fab637;
	}
	.side-cont{
		padding: 20px 0px;
	}
	.side-cont .van-row{
		padding: 10px;
		text-align: center;
	}
	.page-statistic .van-sidebar-item{
		padding: 16px 12px 16px 9px;
		text-align: center;
	}
	.page-statistic  .van-hairline--top-bottom::after{
		border-right: 0px;
	}
	.van-sidebar-item:not(:last-child)::after{
		border-bottom-width: 2px;
		border-color: #fff;
	}
	.van-sidebar-item:last-child:after{
		border-right: 0px;
	}
	.van-sidebar-item{
		background-color: #f7f7f7;
	}
	.van-sidebar-item--select, .van-sidebar-item--select:active{
		background-color: #fff;
	}
	.page-statistic .van-hairline--top-bottom::after{
		border-width: 0px;
	}
	.page-statistic .van-nav-bar:after{
		border-width: 1px;
	}
</style>