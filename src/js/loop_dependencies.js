/**
 * Created by USALNVI on 13.04.2017.
 */
var manifest = {
  data: {
      a: 20.0855, b: 3
  },
    ui: {
        "#num1" : {
            bind: function (data, val){
                if (null != val){
                    data.a = parseFloat(val);
                    data.b = Math.log(data.a);
                }
                return data.a.round(4);
            },
            watch: "#num2"
        },
        "#num2" : {
            bind: function (data, val){
                if (null != val) {
                    data.b = parseFloat(val);
                    data.a = Math.pow(Math.E, data.b);
                }
                return data.b.round(4);
            },
            watch: "#num1"
        }
    }
};

$("#form").my(manifest);