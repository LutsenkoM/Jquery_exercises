$(document).ready(function () {
// add class
    $('#addclass').on('click', function () {
       $(this).addClass('addclass');
    });
// add class end

// remove class
    $('#removeclass').on('click', function () {
        $(this).removeClass('removeclass');
    });
// remove class end

// toggle class
    $('#toggleclass').on('click', function () {
        $(this).toggleClass('toggleclass');
    });
// toggle class end

// getAttr
    $('#getattr').on('click', function () {
        let attr = $(this).attr('type');
        alert (attr);
    });
// getAttr end

// getAttr
    $('#setattr').on('click', function () {
        let attr = $(this).attr('type', 'submit');
    });
// getAttr end

// alertOnClick
    $('#alert').on('click', function () {
        alert ('Hello,World!');
    });
// alertOnClick end


});