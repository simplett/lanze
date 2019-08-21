//点击到导航，就触发对应的下标，显示这个下标对应的codelist集合所对应的图片状态
function() {
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
