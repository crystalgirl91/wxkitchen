<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .van-nav-bar__title{
	color: #333;
	font-size: 18px;
}
#app .van-icon{
	color: #fc7e21;
	transform: translateY(2px);
}
#app .van-dropdown-menu{
	height: 44px;
}
#app .van-dropdown-menu__item{
	position: relative;
}
#app .van-dropdown-menu__item:after{
	content: "";
	position: absolute;
	height: 80%;
	top: 10%;
	right: 0px;
	border-right: 1px solid #cccccc;
	transform: scale(0.5,1);
}
#app .van-nav-bar:after{
		border-bottom: 0px;
	}
.app [class*='van-hairline']::after{
	border-color: #cccccc;
}
.text-right{
	text-align: right;
}
</style>
