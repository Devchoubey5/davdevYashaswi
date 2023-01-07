function Checkvalidation()
if (isvalidate) {

    if (jquery('#Name').val() == ' ') {
        getvalidate('Name', 'text', 'candidate Name');
        return false;
    }

    if (jquery('#contactno').val() == ' ') {
        getvalidate('contactus', 'number', 'mobileno');
        return false;
    }
    if (jquery('#Email').val() == ' ') {
        getvalidate('Email', 'text', 'Email');
        return false;
    }

    if (jquery('#messaage').val() == '') {
        getvalidate('msg', 'text', 'Message');
        return false;
    }
    else{

        Insupdcareer();
    }
}

function Insupdcareer() {
 
var MasterData = {

"p_career_Id":'0',
"p_Name" :jquery("#Name").val(),
"p_contactno":jquery("#number").val(),
"p_mail":jquery("#Email").val(),
"p_Message":jquery("#Message").val(),
};

jQuery.ajax({
    url: serverpath + 'career',
    type: "POST",
    data: JSON.stringify(MasterData),
    contentType: "application/json; charset=utf-8",
    success: function (data, status, jqXHR) {
        resetMode();
        if(data[0][0].ReturnValue == "1"){
            toastr.success("Insert Successful", "", "success")
            return true;
        }
    },
      error: function (result) {
       
        toastr.success(result, "", "success")
    }
});

}

function resetMode(){

    $("#btnsubmit").html('submit');
    jquery("#Name").val("");
    jQuery("#contactno").val("");
    jQuery("#Email").val("");
    jQuery("#Message").val("");

    }