<!--
 * @Author: 张腾
 * @Date: 2019-11-29 15:15:20
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 19:26:36
 * @Description: 
 -->

<template>
	<div>
		<header>
			<img src="../assets/ic_back.png"   @click="back()"/> 我的收藏
		</header>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="收藏商品" name="second">
				<div class="shangpin">
					<div class="shouCs" v-for="(shangpin,index) in shangpin" :key="index">
						<div class="shouCsleft">
							<img :src= shangpin.img />
						</div>
						<div class="shouCsrigth">
							<h1>{{shangpin.name}}</h1>
							<p>{{shangpin.xiangqing}}</p>
							<span>{{shangpin.price}}</span>
							<img src="../../static/img/ic_shopcart_press.png" />
						</div>
					</div>
					<!--<div class="shouCs">
						<div class="shouCsleft">
							<img src="../../static/img/shuiguo02.png" />
						</div>
						<div class="shouCsrigth">
							<h1>黄金百香果（福建平和）</h1>
							<p>【2.5kg包邮】福建漳州产地直发自家果园不打药不崔熟健康到家好吃到家</p>
							<span>￥21.0</span>
							<img src="../../static/img/ic_shopcart_press.png" />
						</div>
					</div>-->
				</div>
			</el-tab-pane>
			<el-tab-pane label="收藏店铺" name="first">
				<div class="dianpu">
					<div class="shouCd" v-for="(dianpu,index) in dianpu" :key="index">
						<div class="shouCdleft">
							<img :src= dianpu.img />
						</div>
						<div class="shouCdrigth">
							<h1>{{dianpu.name}}</h1>
							<p>商品数: {{dianpu.count}}</p><span>综合评价  :<span> {{dianpu.pingfen}}</span></span>
							<img :src= dianpu.img01 />
							
						</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>

	</div>
</template>

<script>
	import axios from 'axios'
	
	export default {
		data() {
			return {
				activeName: 'second',
				shangpin:[],
				dianpu:[]
			};
		},
		created(){
			
			axios.get('http://localhost:3000/shoucang')
				.then(res => {
					this.shoucang = res.data[0];
					this.shangpin =this.shoucang.shangpin
					this.dianpu =this.shoucang.dianpu
					
				})

				.catch(err => {
					console.log(err);
				});
		},
		methods: {
			back(){
      this.$router.go(-1);
    },
			handleClick(tab, event) {
//				console.log(tab, event);
			}
		}
	};
</script>

<style lang="scss">
	.el-tabs__active-bar {
		position: absolute;
		bottom: 0;
		left: 50px;
	}
	
	header {
		background: white;
		margin-top: .1rem;
		text-align: center;
		font-size: .18rem;
		padding-bottom: .3rem;
		img {
			float: left;
			width: 0.11rem;
			margin-left: .1rem;
		}
	}
	
	.el-tabs__item {
		padding: 0 20px;
		height: 40px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		line-height: 40px;
		display: inline-block;
		list-style: none;
		font-size: 14px;
		font-weight: 500;
		color: #303133;
		position: relative;
		padding: 0 80px;
	}
	
	.el-tabs__nav {
		padding: 0 50px;
	}
	
	nav {
		ul {
			overflow: hidden;
			background: white;
			li {
				float: left;
				width: 50%;
				text-align: center;
				line-height: .3rem;
				color: #727272;
			}
		}
	}
	
	.shouCd {
		margin: .1rem auto;
		padding: .2rem 5%;
		width: 80%;
		height: .8rem;
		/*background: red;*/
		/*overflow: hidden;*/
		.shouCdleft {
			width: 30%;
			float: left;
			img {
				border-radius: 5px;
				height: .8rem;
				/*height: 1.05rem;*/
			}
		}
		.shouCdrigth {
			float: right;
			width: 65%;
			margin-left: .1rem;
			h1 {
				/*float: left;*/
				font-size: .14rem;
				font-weight: 400;
				margin-bottom: .1rem;
			}
			p{
				font-size: .08rem;
				float: left;
				margin-right: .1rem;
			}
			span{
				float: left;
				font-size: .08rem;
				span{
					/*词间距*/
					float: right;
					letter-spacing: -3px;
				}
				
			}
			img{
				margin-top: .1rem;
				height: .17rem;
			}
		}
	}
	
	
	
	.shouCs {
		margin: .1rem auto;
		padding: .2rem 5%;
		width: 80%;
		height: .8rem;
		/*background: red;*/
		/*overflow: hidden;*/
		.shouCsleft {
			width: 30%;
			float: left;
			img {
				border-radius: 5px;
				height: .8rem;
				/*height: 1.05rem;*/
			}
		}
		.shouCsrigth {
			float: right;
			width: 65%;
			margin-left: .1rem;
			h1 {
				float: left;
				font-size: .14rem;
				font-weight: 400;
			}
			p {
				float: left;
				font-size: .12rem;
				color: #b9b9b9;
				margin: .06rem 0;
				/*显示省略号*/
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			span {
				font-size: .13rem;
				color: #fc7900;
				float: left;
				display: block;
			}
			img {
				float: right;
				width: .18rem;
				margin-right: .05rem;
			}
		}
	}
</style>