define([
        'Magento_PageBuilder/js/content-type/preview',
        'Magento_PageBuilder/js/content-type-toolbar',
        'Magento_PageBuilder/js/events',
    ], function (PreviewBase, Toolbar, events) {
        'use strict';

        function Preview(parent, config, stageId) {
            PreviewBase.call(this, parent, config, stageId);
            this.toolbar = new Toolbar(this, this.getToolbarOptions());
        }

        var $super = PreviewBase.prototype;

        Preview.prototype = Object.create(PreviewBase.prototype);

        Preview.prototype.bindEvents = function bindEvents() {
            var self = this;
            // console.log(self);
            PreviewBase.prototype.bindEvents.call(this);

            // events.on(`${this.config.name}:${this.contentType.id}:updateAfter`, function (args) {
            //     console.log("UpdateAfter: " + self.contentType);
            // });

            // events.on(`${this.config.name}:${this.contentType.id}:updateAfter`, function (args) {
            //     var ct = Object.values(args)[0].config;
            //     console.log(ct);
            //     console.log(self.config);
            // });

            // events.on("column:initializeAfter", function (args) {
            //     console.log(args);
            // });

            // events.on(`${self.config.name}:moveBefore`, function (args) {
            //     self.handleEvent(args);
            // });

            // events.on(`contentType:renderAfter`, function (args) {
            //     // console.log(args.contentType.config.name);
            //     if (args.contentType.config.name === "image") {
            //         self.handleEvent(args);
            //     }
            // });

            // events.on("example_quote:mountAfter", function (args) {
            //     console.log(args);
            //     // console.log(args);
            // });

            events.on("stage:" + self.contentType.stageId + ":fullScreenModeChangeAfter", function (args) {
                console.log(args);
            });
        };

        Preview.prototype.handleEvent = function (args) {
            console.log("Binding Works");
        };

        Preview.prototype.retrieveOptions = function retrieveOptions() {
            var options = $super.retrieveOptions.call(this, arguments);
            //console.log(options);

            // Change option menu icons
            options.remove.icon = "<i class='icon-admin-pagebuilder-error'></i>";

            // Change tooltips
            options.edit.title = "Open Editor";
            // options.remove.title = "Remove";
            // options.move.title = "Move";
            // options.duplicate.title = "Duplicate";

            // Remove menu options
            // delete options.move;
            // delete options.duplicate;
            // delete options.edit;
            // delete options.remove;

            return options;
        };

        Preview.prototype.getToolbarOptions = function getToolbarOptions() {
            return [
                {
                    key: "text_align",
                    type: "select",
                    values: [{
                        value: "left",
                        label: "Left",
                        icon: "icon-pagebuilder-align-left"
                    }, {
                        value: "center",
                        label: "Center",
                        icon: "icon-pagebuilder-align-center"
                    }, {
                        value: "right",
                        label: "Right",
                        icon: "icon-pagebuilder-align-right"
                    }]
                },
                {
                    key: "quote_css",
                    type: "select",
                    values: [{
                        value: "black-quote",
                        label: "Black",
                        icon: "icon-pagebuilder-black-swatch"
                    }, {
                        value: "blue-quote",
                        label: "Blue",
                        icon: "icon-pagebuilder-blue-swatch"
                    }, {
                        value: "green-quote",
                        label: "Green",
                        icon: "icon-pagebuilder-green-swatch"
                    }, {
                        value: "red-quote",
                        label: "Red",
                        icon: "icon-pagebuilder-red-swatch"
                    }, {
                        value: "purple-quote",
                        label: "Purple",
                        icon: "icon-pagebuilder-purple-swatch"
                    }]
                }
            ];
        };
        return Preview;
    }
);
