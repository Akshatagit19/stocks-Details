sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("akshata.project1.controller.View1", {
        handleMessagePopoverPress: function (oEvent) {
            // create popover
            if (!this._oPopover) {
                this._oPopover = sap.ui.xmlfragment("akshata.project1.fragment.Bot", this);
                this.getView().addDependent(this._oPopover);
            }
            if (this._oPopover.isOpen()) {
                this._oPopover.close();
            } else {
                this._oPopover.openBy(oEvent.getSource());
            }
        },
        ask: function (oEvent) {
            var input = sap.ui.getCore().byId("query").getValue();
            var fBox = new sap.m.FlexBox({
                alignItems: "Start",
                justifyContent: "End"
            });
            var text = new sap.m.Text({
                text: input
            });
            text.addStyleClass("chat2");
            fBox.addItem(text);
            fBox.addStyleClass("sapUiSmallMarginTop");
            sap.ui.getCore().byId("chat").addItem(fBox);
            sap.ui.getCore().byId("query").setValue("");
            this.answer(input);
        },
        answer: function (query) {
            var greetings = ["hi", "hello", "what's up", "wassup"];
            var greetings_response = ["Hello", "Nice to meet you", "Hmm mm"];
            var job = ["what can you do for me?", "what can you do for me", "what can you do", "what can you do?"];
            if (query) {
                if (greetings.indexOf(query.toLowerCase()) != -1) {
                    var item = greetings_response[Math.floor(Math.random() * greetings_response.length)];
                    var a = this.createText(item);
                    this.reply(a);
                } else if (query.toLowerCase().match("london stock exchange")) {
                    var a = this.createText("CRODA INTERNATIONAL PLC \n Price: 4807.00");
                    var b = this.createText("GSK PLC \n Price: 1574.80");
                    var c = this.createText("ANTOFAGASTA PLC\n Price: 1746.00");
                    var d = this.createText("FLUTTER ENTERTAINMENT PLC\n Price: 1546.00");
                    var e = this.createText("BARRATT DEVELOPMENTS PLC\n Price: 542.00");
                    var vbox = new sap.m.VBox();
                    vbox.addItem(a);
                    vbox.addItem(b);
                    vbox.addItem(c);
                    vbox.addItem(d);
                    vbox.addItem(e);
                    this.reply(vbox);
                } else if (query.toLowerCase().match("new york stock exchange")) {
                    var a = this.createText("Ashford Hospitality Trust \n Price: 1.72");
                    var b = this.createText("Kuke Music Holding Ltd \n Price: 1.20");
                    var c = this.createText("Ashland Inc\n Price: 93.24");
                    var d = this.createText("Nomura Holdings Inc.\n Price: 5.84");
                    var e = this.createText("LendingClub Corp\n Price: 9.71");
                    var vbox = new sap.m.VBox();
                    vbox.addItem(a);
                    vbox.addItem(b);
                    vbox.addItem(c);
                    vbox.addItem(d);
                    vbox.addItem(e);
                    this.reply(vbox);
                } 
                else if (query.toLowerCase().match("Nasdaq")) {
                    var a = this.createText("Advanced Micro Devices, Inc. \n Price: 164.21");
                    var b = this.createText("Tesla, Inc. \n Price: 190.35");
                    var c = this.createText("SoFi Technologies, Inc.\n Price: 824");
                    var d = this.createText("Paramount Global\n Price: 14.92");
                    var e = this.createText("Alphabet Inc.\n Price: 141.91");
                    var vbox = new sap.m.VBox();
                    vbox.addItem(a);
                    vbox.addItem(b);
                    vbox.addItem(c);
                    vbox.addItem(d);
                    vbox.addItem(e);
                    this.reply(vbox);
                } 
                else {
                    this.reply();
                }
            }
        },
        reply: function (ans) {
            if (ans) {
                var fBox = new sap.m.FlexBox({
                    alignItems: "Start",
                    justifyContent: "Start"
                });
                ans.addStyleClass("chat1");
                ans.addStyleClass("sapUiSizeCompact");
                fBox.addItem(ans);
                fBox.addStyleClass("sapUiSmallMarginTop");
                sap.ui.getCore().byId("chat").addItem(fBox);
            } else {
                var fBox = new sap.m.FlexBox({
                    alignItems: "Start",
                    justifyContent: "Start"
                });
                var text = new sap.m.Text({
                    text: "Did not recognize you. Come again"
                });
                text.addStyleClass("chat1");
                fBox.addItem(text);
                fBox.addStyleClass("sapUiSmallMarginTop");
                sap.ui.getCore().byId("chat").addItem(fBox);
            }
            $("#pop-cont").scrollTop($("#pop-cont")[0].scrollHeight - $("#pop-cont").height());
        },
        onClear: function (oEvent) {
                var a = this.createText("Please select the stock exchange");
                var b= this.createText("London Stock Exchange");
                var c = this.createText("New York Stock Exchange");
                var d = this.createText("Nasdaq");
                var d = this.createText("FLUTTER ENTERTAINMENT PLC\n Price: 1546.00");
                var e = this.createText("BARRATT DEVELOPMENTS PLC\n Price: 542.00");
                var vbox = new sap.m.VBox();
                vbox.addItem(a);
                vbox.addItem(b);
                vbox.addItem(c);
                vbox.addItem(d);
                vbox.addItem(e);
                this.reply(vbox);
            
            sap.ui.getCore().byId("chat").removeAllItems();
        },
        onScroll: function () {
            $("#pop-cont").scrollTop($("#pop-cont")[0].scrollHeight - $("#pop-cont").height());
        },
        createText: function (text) {
            var text = new sap.m.Text({
                text: text
            });
            return text;
        },
        buttonPress: function (btext) {
            var that = this;
            var naughty = ["I just did.\n I was being naughty by giving you the option of being naughty :D", "You should not ask for that ;)",
                "Its rude to ask for it", "Gotcha :P ", "That was a character test, you failed"
            ];
            var btext = btext.toLowerCase();
            if (btext.match(/show.*ques/g)) {
                var Input = new sap.m.Input({
                    submit: function (oEvent) {
                        that.onTestPress(oEvent, oEvent.getParameter("value"));
                    }
                });
                var a = this.createText("Provide the SET NAME-SET ID  and hit Enter");
                var vbox = new sap.m.VBox();
                vbox.addItem(a);
                vbox.addItem(Input);
                this.reply(vbox);
            } else if (btext.match(/show.*user/g)) {
                var Input = new sap.m.Input({
                    submit: function (oEvent) {
                        that.onUserPress(oEvent, oEvent.getParameter("value"));
                    }
                });
                var a = this.createText("Provide the USER_ID  and hit Enter");
                var vbox = new sap.m.VBox();
                vbox.addItem(a);
                vbox.addItem(Input);
                this.reply(vbox);
            } else if (btext.match(/delete.*user/g)) {
                var a = this.createText("Sorry the function is not yet available");
                this.reply(a);
            } else if (btext.match(/naughty/g)) {
                var item = naughty[Math.floor(Math.random() * naughty.length)];
                var a = this.createText(item);
                this.reply(a);
            }
        },
        createButton: function (text) {
            var that = this;
            var link = new sap.m.Button({
                text: text,
                type: sap.m.ButtonType.Accept,
                press: function (oEvent) {
                    that.buttonPress(text);
                }
            });
            link.addStyleClass("sapUiSmallMarginTop");
            return link;
        },
    
    });
});