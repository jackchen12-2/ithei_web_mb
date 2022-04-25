$(function() {
    renderData()
    // 封装一个渲染函数
    function renderData() {
        $.ajax({
            method: 'GET',
            url: 'http://127.0.0.1:3001/getAllCourse',
            success: function(res) {
                if(!res){
                    return alert('获取数据失败！')
                }
                let htmlstr = template('tinyClass',res.result)
                $('#render').html(htmlstr)
            }
        })
    }
    // 点击跳转
    $('.footer .right').click(function() {
        location.href = './category.html'
    })
})