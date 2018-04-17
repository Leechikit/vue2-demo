import Vue from 'vue'
import App from './App.vue'
import './register.js';
import store from '../vuex/store';

var app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// var app = new Vue({
//   el: '#app',
//   template: '<p>{{ message }}</p>',
//   data: {
//     message: "xuxiao is boy"
//   },
//   beforeCreate: function () {
//     console.group('beforeCreate 创建前状态===============》');
//     console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
//     console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
//     console.log("%c%s", "color:red", "message: " + this.message)
//   },
//   created: function () {
//     console.group('created 创建完毕状态===============》');
//     console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
//     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
//     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
//   },
//   beforeMount: function () {
//     console.group('beforeMount 挂载前状态===============》');
//     console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
//     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化  
//   },
//   mounted: function () {
//     console.group('mounted 挂载结束状态===============》');
//     console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
//     console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
//   },
//   beforeUpdate: function () {
//     console.group('beforeUpdate 更新前状态===============》');
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message);
//   },
//   updated: function () {
//     console.group('updated 更新完成状态===============》');
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message);
//   },
//   beforeDestroy: function () {
//     console.group('beforeDestroy 销毁前状态===============》');
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message);
//   },
//   destroyed: function () {
//     console.group('destroyed 销毁完成状态===============》');
//     console.log("%c%s", "color:red", "el     : " + this.$el);
//     console.log(this.$el);
//     console.log("%c%s", "color:red", "data   : " + this.$data);
//     console.log("%c%s", "color:red", "message: " + this.message)
//   }
// })

// setTimeout(()=>{
//   app.message= 'yes !! I do';
// },3000)