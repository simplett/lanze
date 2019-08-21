//商品页面的导航条颜色的改变和下表位置的移动
 function(){ //获取span标签（作为下标来显示出来）
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
}
