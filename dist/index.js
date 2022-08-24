"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var jsoneditor_1 = __importDefault(require("jsoneditor"));
require("jsoneditor/dist/jsoneditor.min.css");
require("./ReactJSONEditor.css");
;
var ReactJSONEditor = /** @class */ (function (_super) {
    __extends(ReactJSONEditor, _super);
    function ReactJSONEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editor = null;
        _this.editorref = null;
        return _this;
    }
    ReactJSONEditor.prototype.componentDidMount = function () {
        this.createEditor();
    };
    ReactJSONEditor.prototype.componentWillUnmount = function () {
        if (this.editor) {
            this.editor.destroy();
        }
    };
    ReactJSONEditor.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (nextProps.json) {
            // this.editor.set(nextProps.json);
            if (this.editor) {
                this.editor.update(nextProps.json);
            }
        }
        else if (nextProps.text) {
            if (this.editor) {
                this.editor.updateText(nextProps.text);
            }
        }
    };
    ReactJSONEditor.prototype.createEditor = function () {
        this.editor = null;
        var mode = "form";
        var name = "JSON editor";
        if (this.props.mode) {
            mode = this.props.mode;
        }
        if (this.props.name) {
            name = this.props.name;
        }
        var container = this.editorref;
        var modes = ["form", "tree", "code", "view"];
        if (this.props.modes && this.props.modes.length > 0) {
            modes = this.props.modes;
        }
        var editorOptions = {
            mode: mode,
            modes: modes,
            name: name,
            search: false,
            onChange: this.props.onChange,
            onChangeJSON: this.props.onChangeJSON,
            onChangeText: this.props.onChangeText
        };
        if (container) {
            this.editor = new jsoneditor_1.default(container, editorOptions);
            if (this.props.json) {
                this.editor.set(this.props.json);
            }
            else if (this.props.text) {
                this.editor.setText(this.props.text);
            }
        }
    };
    ReactJSONEditor.prototype.getJSON = function () {
        try {
            return this.editor ? this.editor.get() : undefined;
        }
        catch (e) {
            return null;
        }
    };
    ReactJSONEditor.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "ReactJSONEditor", ref: function (ref) { return (_this.editorref = ref); } }));
    };
    return ReactJSONEditor;
}(React.Component));
exports.default = ReactJSONEditor;
