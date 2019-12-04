<template>
	<div>
		<header>分类</header>

		<div class="navleft">

			<el-tabs :tab-position="tabPosition" style="height: 100%;">
				<el-tab-pane label="新鲜水果" class="shuiguo uls">
					<ul class="ul01">
						<li>全部</li>
						<li>水果</li>
						<li>野果</li>
						<img src="../assets/ic_arrow_down.png" />
					</ul>

					<ul class="ul02">
						<li>综合</li>
						<li>价格</li>
						<li>销量</li>
					</ul>
					<div class="liebiao">
						<div class="imgs">
							<img src="../assets/shuiguo04.png" />
						</div>
						<div class="lbright">
							<h1>香水柠檬（广西柳州）</h1>
							<h2>【 2.5kg包邮 】</h2>
							<div class="lbrP">
								<p>小农推荐</p>
								<p>时令好货</p>
								<p>包邮服务</p>
							</div>
							<h3>￥25.0</h3>
							<img src="../assets/ic_shopcart_press.png"/>
						</div>
					</div>
					<div class="liebiao">
						<div class="imgs">
							<img src="../assets/shuiguo02.png" />
						</div>
						<div class="lbright">
							<h1>香水柠檬（广西柳州）</h1>
							<h2>【 2.5kg包邮 】</h2>
							<div class="lbrP">
								<p>小农推荐</p>
								<p>时令好货</p>
								<p>包邮服务</p>
							</div>
							<h3>￥25.0</h3>
							<img src="../assets/ic_shopcart_press.png"/>
						</div>
					</div>
					<div class="liebiao">
						<div class="imgs">
							<img src="../assets/shuiguo03.png" />
						</div>
						<div class="lbright">
							<h1>香水柠檬（广西柳州）</h1>
							<h2>【 2.5kg包邮 】</h2>
							<div class="lbrP">
								<p>小农推荐</p>
								<p>时令好货</p>
								<p>包邮服务</p>
							</div>
							<h3>￥25.0</h3>
							<img src="../assets/ic_shopcart_press.png"/>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="时令蔬菜" class="shuiguo uls">配置管理</el-tab-pane>
				<el-tab-pane label="鲜蛋肉禽" class="shuiguo uls">角色管理</el-tab-pane>
				<el-tab-pane label="粮油调味" class="shuiguo uls">定时任务补偿</el-tab-pane>
				<el-tab-pane label="粮油调味" class="shuiguo uls">定时任务补偿</el-tab-pane>
			</el-tabs>

		</div>

		<div class="rigte">
			<div class="navtop">

			</div>
			<div class="bottom">

			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				tabPosition: 'left'
			};
		}
	};
</script>

<style lang="scss" scoped>
	header {
		font-size: .13rem;
		text-align: center;
		background: #ffffff;
		color: #0d0d0d;
		height: .31rem;
		line-height: .31rem;
		border-bottom: 1px solid #eeeeee;
	}
	
	.shuiguo {
		
	}
	
	.uls {
		overflow: hidden;
		margin: 0 .1rem;
		background: white;
		ul {
			border-bottom: 1px solid #eeeeee;
			float: left;
			width: 100%;
			overflow: hidden;
		}
		.ul01 {
			img {
				margin-top: .15rem;
				float: right;
				width: .15rem;
				margin-right: .1rem;
			}
		}
		.ul02 {
			li {
				width: .8rem;
				text-align: center;
			}
		}
		ul li {
			float: left;
			width: .6rem;
			height: .4rem;
			line-height: .4rem;
			/*text-align: center;*/
		}
	}
	
	.liebiao {
		.imgs {
			/*display: inline-block;*/
			margin-left: 2%;
			width: 40%;
			border-radius: 15px;
			float: left;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		width: 100%;
		display: inline-block;
		.lbright {
			width: 50%;
			position: relative;
			float: right;
			margin-left: .2rem;
			margin-top: .1rem;
			h1 {
				font-size: .13rem;
				font-weight: 400;
				width: 1.15rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			h2 {
				font-size: .11rem;
				font-weight: 400;
				color: #bababa;
				text-align: center;
				margin-top: .05rem;
				margin-bottom: .05rem;
			}
			h3{
				margin-top: .05rem;
				font-size: .12rem;
				color: #fa7b00;
			}
			img{	position: absolute;
			bottom: 0;
			right: .1rem;
					width: .19rem;
				}
			.lbrP {
					display: flex;
					flex-wrap: nowrap;
					overflow: hidden;
					/*white-space: nowrap;*/
					height: .21rem;
					width: 2rem;
				
				p {
					width: .44rem;
					height: .19rem;
					font-size: .08rem;
					border: 1px solid #d8c48a;
					line-height: .19rem;
					text-align: center;
					color: #d8c48a;
					margin: 0 .03rem;
				}
				
			}
		}
	}
</style>