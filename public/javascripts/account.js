/**
 * Created by hp5 on 10/18/2014.
 */
$(function () {
    $("#login").click(function () {
        if (!tools.formValidate($(this))) {
            return;
        }
        var user = {
            userName: $("input[name='userName']").val(),
            password: $("input[name='password']").val()};
        $.ajax({
            url: "/account/login",
            data: user,
            type: "Post",
            success: function (data) {
                if (data.success) {
                    tools.showSuccessMessage()
                    window.location.href="/account/user/all"
                } else {
                    tools.showErrorMessage(data.errorMessage)
                }
            },
            error: function (err) {
                tools.showErrorMessage(err)
            }
        });
    });
    $("#register").click(function () {
        if (!tools.formValidate($(this))) {
            return;
        }
        var user = {
            userName: $("input[name='userName']").val(),
            password: $("input[name='password']").val()};
        $.ajax({
            url: "/account/register",
            data: user,
            type: "Post",
            success: function (data) {
                tools.showSuccessMessage()
                window.location.href="/account"

            },
            error: function (err) {
                tools.showErrorMessage(err)
            }
        });
    });
    $("[show-edit-modal]").click(function () {
        $("#editUserModal").modal("show")
        $("[data-user-edit]").attr("data-id",$(this).attr("data-id"));
    })
    $("[show-delete-modal]").click(function () {
        $("#deleteUserModal").modal("show")
        $("[data-user-delete]").attr("data-id",$(this).attr("data-id"));
    })
    $("[data-user-edit]").click(function(){
        if(!tools.formValidate($(this))){
            return;
        }
        var id = $(this).attr("data-id");
        var user={
            _id:id,
            userName:$("input[name='userName']").val(),
            password:$("input[name='password']").val()
        }
        $.ajax({
            url: "/account/user/update",
            type: "Post",
            data:user,
            success: function (result) {
                if (result.success) {
                    tools.showSuccessMessage();
                    window.location.href="/account/user/all"
                } else {
                    tools.showErrorMessage(result.errorMessage)
                }
            },
            error: function () {

            }
        });
    })
    $("[data-user-delete]").click(function(){
        var id = $(this).attr("data-id");
        $.ajax({
            url: "/account/user/delete?id=" + id,
            type: "Get",
            success: function (result) {
                if (result.success) {
                    tools.showSuccessMessage();
                    window.location.href="/account/user/all"
                } else {
                    tools.showErrorMessage(result.errorMessage)
                }
            },
            error: function () {

            }
        });
    })
})