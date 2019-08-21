<template>
	<div>
		<div class="container" id="container">
			<div class="form-container sign-up-container">
				<form action="#">
					<h1>注册</h1>
					<!-- <div class="social-container">
						<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
						<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
						<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
					</div> -->
					<span>第三方账号注册</span>
					<input type="text" v-model="uname" placeholder="用户名" />
					<input type="email" v-model="email" placeholder="邮箱" />
					<span @click="check">获取验证码</span>
					<input type="text" v-model="checking" placeholder="邮箱验证码" />
					<input type="password" v-model="upwd" placeholder="密码" />
					<button @click="reg">注册</button>
				</form>
			</div>
			<div class="form-container sign-in-container">
				<form action="#">
					<h1>登录</h1>
					<div class="social-container">
						<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
						<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
						<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
					</div>
					<span>第三方账号登录</span>
					<input type="text" v-model="uname" placeholder="邮箱" />
					<input type="password" v-model="upwd" placeholder="密码" />
					<a href="#">忘记密码？</a>
					<button @click="login">登录</button>
				</form>
			</div>
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-left">
						<h1>欢迎回来！</h1>
						<p>请您先登录的个人信息，进行操作。</p>
						<button class="ghost" id="signIn">登录</button>
					</div>
					<div class="overlay-panel overlay-right">
						<h1>你好朋友！</h1>
						<p>输入您的个人信息注册成为会员。</p>
						<button class="ghost" id="signUp">注册</button>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<p>
				版权声明
			</p>
		</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				uname: "", //自动添加了kwords()来监视kwords的变化
				upwd: "",
				upwd1: "",
				email: "",
				placeholder: "输入搜索关键词",
				code: 0, //注册正则验证时候的状态码
				Status1: "", //注册时服务器返回的状态
				Status2: "", //登录时服务器返回的状态
				checking: "", //邮箱验证时服务器返回的验证码

			}
		},
		methods: {
			check() {
				console.log(this.email);
				var regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				var email = this.email
				var url = "https://service-2r9rcbcb-1253377804.ap-beijing.apigateway.myqcloud.com/release/smtp";
				if (regemail.test(email)) {
					console.log(email);
					this.axios.post(url, {
						'SMTP': {
							'mailHost': "smtp.ym.163.com",
							'mailUser': "no-reply@xixilog.com",
							'mailPass': "6LuC3iLwKj",
							'mailPort': 994
						},
						'fromAddr': 'no-reply@xixilog.com',
						'toAddr': email,
						'subject': '欢迎注册我们的闲鱼网站',
						'content': '这是我们的验证码'
					})
				} else {
					this.code = 2;
				}
				this.code = 0;

			},
			//登录的方法
			login() {
				var uname = this.uname;
				var upwd = this.upwd;
				var url = "https://service-32p1vts2-1253377804.gz.apigw.tencentcs.com/release/login";
				var params = {
					uname,
					upwd
				};
				this.axios.post(url,
					params
				).then(result => {
					this.Status2 = result.data.state;
					if (this.Status2 === 1) {
						console.log(111);
						alert("状态1");
					}
					if (this.Status2 === 4) {
						console.log(444);
						alert("状态4");
					}
					if (this.Status2 === 5) {
						console.log(555);
						alert("状态5");
					}
				})
			},
			//登录与注册切换时的动画
			change() {
				const signUpButton = document.getElementById('signUp');
				const signInButton = document.getElementById('signIn');
				const container = document.getElementById('container');
				signUpButton.addEventListener('click', () => {
					container.classList.add("right-panel-active");
				});
				signInButton.addEventListener('click', () => {
					container.classList.remove("right-panel-active");
				});
			},
			reg() {
				//正则表达式 
				var uname = this.uname,
					upwd = this.upwd,
					email = this.email,
					checking = this.checking,
					reguname = /^[a-z1-9]{8,12}$/,
					regemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
					regchecking = /^\d{6}$/,
					regupwd = /^\d{8,10}$/;
				//用户名是否输入合法
				console.log(uname);
				if (!reguname.test(uname)) {
					this.code = 1; //根据code的状态，使用watch来动态监视在哪一步验证出错，动态的做出调整
					return;
				}
				//邮箱号是否输入合法
				if (!regemail.test(email)) {
					this.code = 2;
					return;
				}
				//密码格式是否合法
				if (!regupwd.test(upwd)) {
					this.code = 3;
					return;
				}
				if (!regchecking.test(checking)) {
					this.code = 4;
					return;
				}
				//验证用户输入的第二次密码是否和第一次一样，第一次已经验证了格式，
				//所以第二次就不用验证了，通过就是格式和内容与第一次密码一致
				//如果不需要输入第二次密码，则不启用
				// if (upwd === this.upwd1) {
				// 	this.code = 4;
				// 	return;
				// }
				var url = "https://service-32p1vts2-1253377804.gz.apigw.tencentcs.com/release/register";
				var params = {
					uname,
					upwd,
					email,
					checking
				} //ES6标准，可以简写
				this.axios.post(url, params).then(result => {
					//当status改变的时候，自动触发对应的函数
					this.Status1 = result.data.state;
					console.log(result);
				})
			}
		}, //ES6标准，可以简写
		watch: {
			code() {
				if (this.code == 1) {
					alert("用户名格式有误");
					// this.$router.push("list")
				}
				if (this.code == 2) {
					alert("邮箱格式有误")
				}
				if (this.code == 3) {
					alert("用户密码格式有误")
				};
				if (this.code == 4) {
					alert("验证码有误");
				};
				this.code = 0;

			},
			Status1() {
				// (this.Status1 == 1) ? this.$router.push("list"): alert("失败");T
				if (this.Status1 == 1) {
					console.log("成功");
					this.$router.push("list")
				}
				if (this.Status1 == 2) {
					console.log("用户名占用")
				}
				if (this.Status1 == 3) {
					console.log("邮箱占用")
				}
			},
			Status2() {
				(this.Status2 == 1) ? alert("成功"): alert("失败");
			}
		},
		mounted() {
			this.change();
		}
	}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

	/* 	@import url("../assets/login.css"); */
	* {
		box-sizing: border-box;
	}

	body {
		background: #f6f5f7;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-family: 'Montserrat', sans-serif;
		height: 100vh;
		margin: -20px 0 50px;
	}

	h1 {
		font-weight: bold;
		margin: 0;
	}

	h2 {
		text-align: center;
	}

	p {
		font-size: 14px;
		font-weight: 100;
		line-height: 20px;
		letter-spacing: 0.5px;
		margin: 20px 0 30px;
	}

	span {
		font-size: 12px;
		cursor: pointer;
	}

	a {
		color: #333;
		font-size: 14px;
		/* 	text-decoration: none; */
		margin: 15px 0;
	}

	button {
		border-radius: 20px;
		border: 1px solid #FF4B2B;
		background-color: #FF4B2B;
		color: #FFFFFF;
		font-size: 12px;
		font-weight: bold;
		padding: 12px 45px;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: transform 80ms ease-in;
	}

	button:active {
		transform: scale(0.95);
	}

	button:focus {
		outline: none;
	}

	button.ghost {
		background-color: transparent;
		border-color: #FFFFFF;
	}

	form {
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 50px;
		height: 100%;
		text-align: center;
	}

	input {
		background-color: #eee;
		border: none;
		padding: 12px 15px;
		margin: 8px 0;
		width: 100%;
	}

	.container {
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
			0 10px 10px rgba(0, 0, 0, 0.22);
		position: relative;
		overflow: hidden;
		margin-top: 5%;
		width: 768px;
		max-width: 100%;
		min-height: 480px;
	}

	.form-container {
		position: absolute;
		top: 0;
		height: 100%;
		transition: all 0.6s ease-in-out;
	}

	.sign-in-container {
		left: 0;
		width: 50%;
		z-index: 2;
	}

	.container.right-panel-active .sign-in-container {
		transform: translateX(100%);
	}

	.sign-up-container {
		left: 0;
		width: 50%;
		opacity: 0;
		z-index: 1;
	}

	.container.right-panel-active .sign-up-container {
		transform: translateX(100%);
		opacity: 1;
		z-index: 5;
		animation: show 0.6s;
	}

	@keyframes show {

		0%,
		49.99% {
			opacity: 0;
			z-index: 1;
		}

		50%,
		100% {
			opacity: 1;
			z-index: 5;
		}
	}

	.overlay-container {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50%;
		height: 100%;
		overflow: hidden;
		transition: transform 0.6s ease-in-out;
		z-index: 100;
	}

	.container.right-panel-active .overlay-container {
		transform: translateX(-100%);
	}

	.overlay {
		background: #FF416C;
		background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
		background: linear-gradient(to right, #FF4B2B, #FF416C);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 0;
		color: #FFFFFF;
		position: relative;
		left: -100%;
		height: 100%;
		width: 200%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.container.right-panel-active .overlay {
		transform: translateX(50%);
	}

	.overlay-panel {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 0 40px;
		text-align: center;
		top: 0;
		height: 100%;
		width: 50%;
		transform: translateX(0);
		transition: transform 0.6s ease-in-out;
	}

	.overlay-left {
		transform: translateX(-20%);
	}

	.container.right-panel-active .overlay-left {
		transform: translateX(0);
	}

	.overlay-right {
		right: 0;
		transform: translateX(0);
	}

	.container.right-panel-active .overlay-right {
		transform: translateX(20%);
	}

	.social-container {
		margin: 20px 0;
	}

	.social-container a {
		border: 1px solid #DDDDDD;
		border-radius: 50%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin: 0 5px;
		height: 40px;
		width: 40px;
	}

	footer {
		background-color: #222;
		color: #fff;
		font-size: 14px;
		bottom: 0;
		position: fixed;
		left: 0;
		right: 0;
		text-align: center;
		z-index: 999;
	}

	footer p {
		margin: 10px 0;
	}

	footer i {
		color: red;
	}

	footer a {
		color: #3c97bf;
		text-decoration: none;
	}
</style>
