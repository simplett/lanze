new Promise((resolve, reject) => {
	setTimeout(function() {
		console.log("异步操作");
		resolve("success")
	}, 10);
})
var row=[];
row.push(new Promise((reslove,reject)=>{
	console.log("123");
	resolve();
}));
row.push(new Promise((reslove,reject)=>{
	console.log("456");
	resolve();
}));
row.push(new Promise((reslove,reject)=>{
	console.log("789");
	resolve();
}))
