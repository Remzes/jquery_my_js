/**
 * Created by USALNVI on 13.04.2017.
 */
var person = {
    name: "Ann",
    metrics: {age: "25"}
};

var manifest = {
    data: {name: "", metrics: {age: ""}},
    init: function ($node, runtime) {
        $node.html(
            '<h4>Simplest form</h4>' +
            '<div><input id="name" type="text" placeholder="Name"/></div>' +
            '<div><input id="age" type="number" placeholder="Age"/></div>'
        );
    },
    ui: {
        "#name": {bind: "name"},
        "#age": {bind: "metrics.age"}
    }
};

$("#form").my(manifest, person);