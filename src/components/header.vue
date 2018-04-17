<template>
	<div class="header">
		<div class="logo"></div>
		<div class="title">{{title}}</div>
	</div>
</template>

<script>
export default {

  name: 'header',

  data () {
    return {

    };
  },
  props:['title']

};
</script>

<style lang="scss" scoped>
.header{
	display: flex;
	height: 40px;
}
.logo{
	flex-shrink:0;
	width:40px;
	height: 100%;
	background:transparent url(../assets/logo.png) center center no-repeat;
	background-size: 40px;
}
.title{
	flex-grow:1;
	font-size: 20px;
	line-height: 40px;
	height: 100%;
}
</style>