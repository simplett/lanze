<template>
	<div class="container position-relative">
		<div class="navs">
			<nav class="nav">
				<a href="javascript:;" class="nav-item is-active" active-color="orange">服装</a>
				<a href="#" class="nav-item" active-color="green">数码</a>
				<a href="#" class="nav-item" active-color="blue">饰品</a>
				<a href="#" class="nav-item" active-color="red">百货</a>
				<a href="#" class="nav-item" active-color="rebeccapurple">运动</a>
				<a href="#" class="nav-item" active-color="lightskyblue">家电</a>
				<a href="#" class="nav-item" active-color="rgb(230, 0, 91)">游戏</a>
				<a href="#" class="nav-item" active-color="rgb(255, 196, 0)">书籍</a>
				<a href="#" class="nav-item" active-color="rgb(255, 196, 0)">美妆</a>
				<a href="#" class="nav-item" active-color="rgb(255, 196, 0)">养生</a>
				<span class="nav-indicator"></span>
			</nav>
		</div>
		<div class="shopping-list">
			<div v-for="(items,i) of code" :key="i" class="row my-active">
				<div v-for="(item,j) of codelist[i]" :key="j" class="col-2 shops">
					<div @click="classifications(i,j)" :data-code="i" :data-codelist="j" class="new-shopping"><a>{{item}}</a></div>
					<div class="new-img" @click="classifications(i,j)" :data-code="i" :data-codelist="j">
						<img :src="codelist_img[i][j]" @click="classifications(i,j)" alt="">
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row bg-secondary">
			<div v-for="(item,i) of data" :key="i" class="col-lg-3 col-md-4 col-sm-6 ">
				<div class="actives mx-2 my-3 p-r-1 bg-white">
					<div class="imgDiv">
						<img style="object-fit:cover;width: 100%;" :src="item.img_src" :alt="item.id" />
					</div>
					<div class="px-2">
						<p>{{item.name}}</p>
						<div class="shop-title">
							{{item.content}}
						</div>
						<li><span style="color: red">{{item.price}}</span></li>
						<li>
							<div class="userimage"><img width="36px" height="36px" :data-userid="item.userid" src="https://simplett-img.oss-cn-beijing.aliyuncs.com/user_image/userimage.jpg"
								 alt=""></div>
						</li>
					</div>
					<hr>
				</div>
			</div>
		</div>
		<div class="products w-100">
			
		</div>
	</div>
</template>
<script>
	import "../../public/jquery-1.11.3.js"
	export default {
		data() {
			return {
				data: [],
				code: ["服装", "数码", "饰品", "百货", "运动", "家电", "宠物", "书籍", "美妆", "养生"],
				codelist: [
					["运动风", "休闲风", "商务风", "百搭风", "街头风", "简约风"],
					["电脑", "手机", "相机", "智能穿戴", "电脑周边", "网络设备"],
					["潮搭", "服配", "手表", "珠宝", "眼镜", "包"],
					["住宅家居", "文具教具", "餐饮用具", "厨房用品", "床上用品", "家居日用"],
					["运动器材", "户外运动", "健身塑形", "球类及包陪", "小众运动", "运动鞋"],
					["厨房小电器", "生活电器", "个人护理电器", "厨房大电器", "大家电", "温控电器"],
					["宠物玩具", "宠物牵引", "喂食器", "逗宠棒", "药品", "宠物之家"],
					["国际名著", "工具书", "教材", "科普类", "小说", "100本必读"],
					["彩妆", "护肤", "口红", "美容", "美体", "香水"],
					["计生用品", "外用理疗", "传统滋补", "保健品", "药品", "流行趋势"]
				],
				codelist_img: [
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/0_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/0_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/0_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/0_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/0_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/0_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/1_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/1_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/1_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/1_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/1_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/1_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/2_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/2_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/2_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/2_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/2_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/2_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/3_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/3_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/3_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/3_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/3_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/3_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/4_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/4_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/4_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/4_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/4_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/4_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/5_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/5_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/5_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/5_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/5_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/5_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/6_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/6_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/6_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/6_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/6_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/6_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/7_0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/7_1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/7_2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/7_3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/7_4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/7_5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/8-0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/8-1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/8-2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/8-3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/8-4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/8-5.png"
					],
					["http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/9-0.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/9-1.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/9-2.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/9-3.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/9-4.png",
						"http://simplett-img.oss-cn-beijing.aliyuncs.com/nav-list/9-5.png"
					]
				]
			}
		},
		methods: {
			//加载首页的商品信息
			load() {
				this.axios.get("https://service-32p1vts2-1253377804.gz.apigw.tencentcs.com/test/list1").then(result => {
					var datas = result.data.commodities;
					this.data = datas
				})
			},
			//商品页面的导航条颜色的改变和下表位置的移动
			navlist() { //获取span标签（作为下标来显示出来）
				const indicator = document.querySelector('nav>.nav-indicator');
				//获取导航的a标签
				const items = document.querySelectorAll('.nav>.nav-item');
				//遍历所有的a标签，然后除去is-Active然后吧style属性移除
				function handleIndicator(el) {
					items.forEach(item => {
						item.classList.remove('is-active');
						item.removeAttribute('style');
					});
					indicator.style.width = `${el.offsetWidth}px`;
					indicator.style.left = `${el.offsetLeft}px`;
					indicator.style.backgroundColor = el.getAttribute('active-color');
					el.classList.add('is-active');
					el.style.color = el.getAttribute('active-color');
				}
				items.forEach((item, index) => {
					item.addEventListener('mousemove', e => {
						handleIndicator(e.target);
					});
					item.classList.contains('is-active') && handleIndicator(item);
				});
				console.log(this.codelist, this.code);
			},
			//点击到导航，就触发对应的下标，显示这个下标对应的codelist集合所对应的图片状态
			shopnav() {
				var $nav_item = $(".nav>.nav-item");
				//事件委托
				$(".nav").on("mouseenter", "a", function() {
					//找到当前鼠标所点击的A标签的下标
					$(".shopping-list").css("height", "226px");
					var index = $(this).index();
					$(`.shopping-list>.row:eq(${index})`).addClass("show");
					$(`.shopping-list>.row:not(:eq(${index}))`).removeClass("show")
				}).mouseleave(function() {
					//找到当前鼠标所点击的A标签的下标
					$(".shopping-list").css("height", "0px");

				});
				// $(".nav").on("mouseleave",this,function()
				// {
				//     //找到当前鼠标所点击的A标签的下标
				//     $(".shopping-list").css("height","0px");

				// })
				$(".shopping-list").on("mouseenter", this, function() {
					//找到当前鼠标所点击的A标签的下标
					$(this).css("height", "226px");

				}).on("mouseleave", this, function() {
					$(this).css("height", "0px")
				})
			},
			//获取改图片所对应的code和codelist，然后发送axios请求，保存值在this.data中,
			//把第一次请求过来的值替换了，相当于刷新了一遍商品列表，刷新成了类别的商品列表
			//把这个事件绑定到对应的codelist上面，不要绑定在媒体上面，一开始的这个N就有v-for的时候自动绑定
			//循环分为两部分，第一部分使用:key="i",第二部分使用:key="j"
			classifications(i, j) {
				$(".products").css("display","none");
				var code = i;
				// e.target.getAttribute('code');
				var codelist = j;
				// e.target.getAttribute('codelist');
				console.log(code, codelist);
				var url = "https://service-32p1vts2-1253377804.gz.apigw.tencentcs.com/release/product";
				var params = {
					code,
					codelist
				}
				this.axios.post(url,
					params,

				).then(result => {
					var datas = result.data.products;
					this.data = datas
					console.log(datas);
					console.log(result);
				})
			}
		},
		created() {
			this.load();
		},
		mounted() {
			this.navlist();
			this.shopnav();
		}
	}
</script>
<style scoped>
	.products{
		height:1200px;
		background: #007BFF;
		display: block;
	}
	.actives {
		border: 2px solid red;
		border-radius: 10px;
		text-align: left;
		overflow: hidden;
	}

	.actives:hover {
		border: 2px solid blue;
		padding: 0px;
	}

	/* 	图片下面的内容需要有一段padding */
	/* .actives>div:nth-child(2)
{
	width:100%;
	padding: ;
} */
	.imgDiv {
		width: 100%;
		height: 250px;
		overflow: hidden;
		border-radius: 0px 0px 5px 5px;
	}

	.imgDiv>img {
		width: 100%;
		height: 100%;
	}

	.userimage {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		overflow: hidden;
	}

	.shop-title {
		height: 75px;
		overflow: hidden;
		font-size: 0.8em;
		color: #445566
	}

	/* 这是main.css */
	body {
		text-align: center;
	}

	.my-active {
		display: none;
	}

	.top-img {
		width: 100%;
		min-width: 980px;
	}

	.top-img>img {
		width: 100%;
	}

	.shopping-list {
		width: 100%;
		left: 0px;
		position: absolute;
		top: 60px;
		z-index: 5;
		background: #FFFFFF;
		border-radius: 5px;
		height: 0px;
		overflow: hidden;
		transition: all 1.21s;
	}

	.row>.shops>.new-shopping {
		margin: 12px 0px;
		border: 1px orange solid;
		color: orange;
		line-height: 20px;
		height: 20px;
		width: 60%;
		margin-left: 20%;
	}

	.navs {
		display: flex;
		width: 100%;
		flex-wrap: nowrap;
	}

	.row>.shops>.new-img {
		width: 100%;
	}

	.row>.shops>.new-img>img {
		width: 90%;
	}

	.row>.shops>:nth-child(3) {
		font-size: 1.2em;
		color: rgba(25, 46, 89, 1);
	}

	.row>.shops>:nth-child(4) {
		font-size: 0.98em;
		color: orange;
	}

	.shopping-list>.row.show {
		display: flex;
	}

	.shopping-list>.row>:not(:first-child)::after {
		cursor: "sfgsd";
		width: 20px;
		height: 70%;
		margin-top: 15%;
		background: #486225;
		border-left: 2px solid royalblue;
	}

	@import url("../assets/nav.css");
</style>
