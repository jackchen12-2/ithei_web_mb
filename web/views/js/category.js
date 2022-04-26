// 点击跳转首页
$('.footer .left').click(function() {
    location.href = './index.html'
})
$('.logo').click(function() {
    location.href = './index.html'
})
// 导航栏切换
$('.nav').on('click','li',function() {
    console.log($(this).index())
    let index = $(this).index()
    // 增加active类名
    $(this)
    .addClass('active')
    .siblings()
    .removeClass('active')
    // 对应index的内容显示
    $('.content li')
    .eq(index)
    .show()
    .siblings()
    .hide()
})