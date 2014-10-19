/**
 * Created by hp5 on 10/18/2014.
 */
var tools=function (){
    var validateErrorMessage={
        require:"Value can not be null!",
        minLength:"Value min length is {0}!",
        maxLength:"Value max length is {0}!",
        equal:"Value not equals with above! "
    };
    return {
        showSuccessMessage:function(message){
            alert(message||"Success");
        },
        showErrorMessage:function(message){
            alert(message||"Error");
        },
        formValidate:function(ele){
            var $errorTip=$('<div class="alert alert-danger" style="margin-top: 10px" role="alert"></div>')
            var $form=$(ele).parents("[data-form]");
            $form.find(".alert-danger").remove();
            $form.find('input[require]').each(function(){
                if($(this).val()==""){
                    $(this).after($errorTip.clone().append(validateErrorMessage.require))
                }
            });
            $form.find('input[minLength]').each(function(){
                if($(this).val().length<6){
                    $(this).after($errorTip.clone().append(validateErrorMessage.minLength))
                }
            });
            $form.find('input[equal]').each(function(){
                var confirmValue= $("[name='"+$(this).attr("equal")+"']").val();
                if(confirmValue!=$(this).val()){
                    $(this).after($errorTip.clone().append(validateErrorMessage.equal))
                }
            });
            return $form.find(".alert-danger").length==0;
        }
    }
}();