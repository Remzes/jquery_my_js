/**
 * Created by USALNVI on 13.04.2017.
 */
var manifest = {
    data: {
        name: "",
        list: []
    },
    ui: {
        "#name": "name",
        "#list": {
            bind: "list",
            list: '<div class="br2"></div>',
            init: function ($control) {
                $control.sortable({handle: ".fi-list"});
            },
            manifest: function (item, index, list) {
                return this.Forms[item.type];
            }
        },
        "#btn-user": function (data, val) {
            if (null != val) this.InsertItem("user");
        },
        "#btn-link": function (data, val) {
            if (null != val) this.InsertItem("link");
        }
    },
    InsertItem: function (type) {
        this.my.insert
        (
            "#list",
            $.extend(true, {stamp: Date.now()}, this.Forms[type].data)
        );
    },
    Forms : {
        "user": {
            data: {
                type: "user",
                id: "",
                pwd: ""
            },
            init: function($form){
                $form.html([
                    '<span class="fi-list green"></span> &nbsp;',
                    '<input id="id" type="text" placeholder="User login" class="w180"> ',
                    '<input id="pwd" type="password" placeholder="Password" class="w170"> ',
                    '<span class="fi-x red o50 pl5"></span>'
                ].join(""));
            },
            ui: {
                "#id": "id",
                "#pwd": "pwd",
                ".fi-x": {
                    bind: function (data, val) {
                        if (null != val) this.my.remove();
                    },
                    events: "click.my"
                }
            }
        },
        "link": {
            data: {
                type: "link",
                link: ""
            },
            init: function ($form){
                $form.html([
                    '<span class="fi-list orange"></span> &nbsp;',
                    '<input id="link" type="text" placeholder="Link" style="width:355px;"> ',
                    '<span class="fi-x red o50 pl5"></span>'
                ].join(""));
            },
            ui: {
                "#link": "link",
                ".fi-x": {
                    bind: function(data, val) {
                        if (null != val) this.my.remove();
                    },
                    events: "click.my"
                }
            }
        }
    },
    style: {
        " #list>div":"width:400px; border-bottom:1px dotted #aaa;"
        +"padding:5px 0 10px 0;margin:5px 0;"
    },
    id : "Subform non-uniform list"
};

$("#form").my(manifest);