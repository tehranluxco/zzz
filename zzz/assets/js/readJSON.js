var items;
function readJSON(myUrl , postItem, ReadSuccess,ReadFail){
	/*	jQuery.ajax({
            type : "post",
            url : 'http://selfireport.com/biorhythm/application/test',
            data : values,
            error:function(response){
                console.log(response);
            },
            success: function(response) {
				console.log(response);
			}
		});*/
	$.ajax({
		url: myUrl,
		type:'post',
		//dataType: 'jsonp',
		data: postItem,
        //timeout: 5000,
		//crossDomain: true,
		//contentType: 'application/html; charset=utf-8',
        success: function (resp) {
			ReadSuccess(resp);
		},
		error: function () {
			ReadFail();
		}	
	});
}

function readJSONget(myUrl , ReadSuccess,ReadFail){
    $.ajax({
        url: myUrl,
        type: 'post',
        //jsonp: "callback",
        //dataType: 'jsonp',
        //timeout: 5000,
        //data: {"sdf":"hjgjh"},
        //crossDomain: true,
        //contentType: 'application/json;',
        success: function (resp) {
            ReadSuccess(resp);
        },
        error: function () {
            ReadFail();
        }
    });
}