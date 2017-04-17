/**
 * Created by USALNVI on 13.04.2017.
 */
var manifest = {
    data : {
        len: 0
    },
    ui : {
        "#length_span": {
            bind : function(data){
                if (data.len >= 0){
                    var changes = [];
                    changes[0] = "Padding: " + data.len + "px";
                    changes[1] = $("#length_span").css("padding", data.len + "px");   
                }
              return changes;
                // return data.len;
            },
            watch: "#length"
        }, 
        "#length": {
            bind: "len"
        }
    }
};

$("#form").my(manifest);