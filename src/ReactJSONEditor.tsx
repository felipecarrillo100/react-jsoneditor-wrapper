import * as React from "react";
import JSONEditor, { JSONEditorOptions, JSONEditorMode } from "jsoneditor";
import 'jsoneditor/dist/jsoneditor.min.css';
import "./ReactJSONEditor.css";

export interface ReactJSONEditorProps {
    // Legacy & Core Props (Kept for backwards compatibility)
    json?: any;
    text?: string;
    name?: string;
    mode?: JSONEditorMode;
    modes?: JSONEditorMode[];
    onChange?: () => void;
    onChangeJSON?: (json: any) => void;
    onChangeText?: (text: string) => void;

    // Modern Extensions (Inspired by felipecarrillo100/modern-react-json-editor)
    schema?: any;
    schemaRefs?: any;
    search?: boolean;
    history?: boolean;
    navigationBar?: boolean;
    statusBar?: boolean;
    readOnly?: boolean;
    indentation?: number;
    theme?: string;

    // Modern Callbacks
    onEditable?: (node: any) => boolean | { field: boolean; value: boolean };
    onError?: (error: Error) => void;
    onValidationError?: (errors: any[]) => void;
    onModeChange?: (newMode: JSONEditorMode, oldMode: JSONEditorMode) => void;
    onClassName?: (node: any) => string | undefined;
}

export class ReactJSONEditor extends React.Component<ReactJSONEditorProps> {
    public editor: JSONEditor | null = null;
    private container: HTMLDivElement | null = null;

    public componentDidMount() {
        this.createEditor();
    }

    public componentDidUpdate(prevProps: ReactJSONEditorProps) {
        if (!this.editor) return;

        // 1. Dynamic Mode & Schema updates (Modern requirement)
        if (this.props.mode !== prevProps.mode && this.props.mode) {
            this.editor.setMode(this.props.mode);
        }
        if (this.props.schema !== prevProps.schema) {
            this.editor.setSchema(this.props.schema);
        }

        // 2. Content Sync Logic
        // We prioritize JSON over Text if both are provided
        if (this.props.json !== undefined && this.props.json !== prevProps.json) {
            this.editor.update(this.props.json);
        } else if (this.props.text !== undefined && this.props.text !== prevProps.text) {
            this.editor.updateText(this.props.text);
        }
    }

    public componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }

    private createEditor() {
        if (this.editor) {
            this.editor.destroy();
        }

        // Destructure with smart defaults
        const {
            mode = "form",
            name = "JSON editor",
            modes = ["form", "tree", "code", "view"],
            search = true,
            history = true,
            navigationBar = true,
            statusBar = true,
            indentation = 2,
            schema,
            schemaRefs,
            onChange,
            onChangeJSON,
            onChangeText,
            onValidationError,
            onModeChange,
            onEditable,
            onError,
            json,
            text
        } = this.props;

        const options: JSONEditorOptions = {
            mode,
            modes,
            name,
            schema,
            schemaRefs,
            search,
            history,
            navigationBar,
            statusBar,
            indentation,
            onChange,
            onChangeJSON,
            onChangeText,
            onValidationError: onValidationError as JSONEditorOptions["onValidationError"],
            onModeChange,
            onEditable,
            onError
        };

        if (this.container) {
            this.editor = new JSONEditor(this.container, options);

            if (json !== undefined) {
                this.editor.set(json);
            } else if (text !== undefined) {
                this.editor.setText(text);
            }
        }
    }

    // Helper methods (Maintained for legacy imperative access)
    public getJSON = () => {
        try {
            return this.editor ? this.editor.get() : undefined;
        } catch (e) {
            return null;
        }
    }

    public getText = () => this.editor ? this.editor.getText() : undefined;

    public render() {
        return (
            <div
                className="ReactJSONEditor"
                ref={el => { this.container = el; }}
            />
        );
    }
}
