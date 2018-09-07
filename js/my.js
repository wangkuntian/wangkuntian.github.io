window.onload = Init; //网页加载完成时，调用init
function Init() {
    //定时器,每秒钟触发ShowPicturesInOrder()函数
    window.setInterval("ShowPicturesInOrder()", 10000);

}

function ShowPicturesInOrder() {
    //获取网页中id=myImg的图片对象元素
    var imgObj = document.getElementById("cover");
    var images = new Array('covers/Championship-Ashe.jpg', 'covers/PROJECT-Ashe-2.jpg', 'covers/Lunar-Empress-Lux.jpg', 'covers/PROJECT-Jhin.jpg', 'covers/PROJECT-Ashe.jpg');
    var index = Math.round(Math.random() * (images.length - 1))
    console.log(index);
    imgObj.src = images[index];

}