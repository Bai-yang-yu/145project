$(function () {
    // 验证码倒计时
    var frSwitch = 1;
    var timer;
    var frTime = 60;
    $('.innerTab').find('.fr').click(function () {
        if (frSwitch == 1) {
            frSwitch = 0;
            timer = setInterval(function () {
                frTime--;
                if (frTime == -1) {
                    $('.innerTab').find('.fr').html('获取验证码')
                    clearInterval(timer);
                    frSwitch = 1;
                    frTime = 60;
                } else (
                    $('.innerTab').find('.fr').html(frTime)
                )
            }, 1000)
        }
    })
    // 验证表单
    var phone = document.getElementsByName('phone')[0];
    var password = document.getElementsByName('password')[0];
    var rep = document.getElementsByName('rePassword')[0];
    $(phone).on('input', function () {
        phoneCheck()
    });
    $(password).on('input', function () {
        passwordCheck()
    });
    $(rep).on('input', function () {
        repCheck()
    });
    $('.innerTab').find('input:last').click(function () {
        phoneCheck();
        passwordCheck();
        repCheck()
    })
    function phoneCheck() {
        var reg = /^1[3578]\d{9}$/;
        if (reg.test($(phone).val())) {
            $('.innerTab').find('li').eq(0).find('span').hide();
            $('.innerTab').find('li').eq(0).find('.checkPass').show();
        } else {
            $('.innerTab').find('li').eq(0).find('span').hide();
            $('.innerTab').find('li').eq(0).find('.checkFail').show();
        }
    }
    function passwordCheck() {
        var reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![\@]+$)(?![_]+$)[0-9A-Za-z\@_]{6,18}$/;
        if (reg.test($(password).val())) {
            $('.innerTab').find('li').eq(2).find('span').hide();
            $('.innerTab').find('li').eq(2).find('.checkPass').show();
        } else {
            $('.innerTab').find('li').eq(2).find('span').hide();
            $('.innerTab').find('li').eq(2).find('.checkFail').show();
        }
    }
    function repCheck() {
        if ($(password).val() == $(rep).val() && $(rep).val()) {
            $('.innerTab').find('li').eq(3).find('span').hide();
            $('.innerTab').find('li').eq(3).find('.checkPass').show();
        } else {
            $('.innerTab').find('li').eq(3).find('span').hide();
            $('.innerTab').find('li').eq(3).find('.checkFail').show();
        }
    }
})