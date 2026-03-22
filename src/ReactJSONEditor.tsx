import * as React from "react";
import JSONEditor, { JSONEditorOptions } from "jsoneditor";
import 'jsoneditor/dist/jsoneditor.min.css';
import "./ReactJSONEditor.css";

export interface ReactJSONEditorProps {
    json?: any;
    text?: any;
    name: string;
    mode?: any; // Changed to any to match jsoneditor's internal type string unions
    modes?: any[];
    onChange?: () => void;
    onChangeJSON?: (json: any) => void;
    onChangeText?: (text: string) => void;
}

export class ReactJSONEditor extends React.Component<ReactJSONEditorProps> {
    // Explicitly typing the editor instance
    public editor: JSONEditor | null = null;
    private container: HTMLDivElement | null = null;

    public componentDidMount() {
        this.createEditor();
    }

    public componentDidUpdate(prevProps: ReactJSONEditorProps) {
        if (!this.editor) return;

        // Update JSON if it changed
        if (this.props.json !== prevProps.json && this.props.json !== undefined) {
            this.editor.update(this.props.json);
        }
        // Update Text if it changed
        else if (this.props.text !== prevProps.text && this.props.text !== undefined) {
            this.editor.updateText(this.props.text);
        }

        // Handle mode changes dynamically if needed
        if (this.props.mode !== prevProps.mode && this.props.mode) {
            this.editor.setMode(this.props.mode);
        }
    }

    public componentWillUnmount() {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }

    private createEditor() {
        // Cleanup existing instance if this is called twice (React 18/19 Strict Mode safety)
        if (this.editor) {
            this.editor.destroy();
        }

        const {
            mode = "form",
            name = "JSON editor",
            modes = ["form", "tree", "code", "view"],
            onChange,
            onChangeJSON,
            onChangeText,
            json,
            text
        } = this.props;

        const options: JSONEditorOptions = {
            mode,
            modes,
            name,
            search: false,
            onChange,
            onChangeJSON,
            onChangeText
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

    // Modern helper to safely get JSON
    public getJSON() {
        try {
            return this.editor ? this.editor.get() : undefined;
        } catch (e) {
            return null;
        }
    }

    public render() {
        // Callback refs are the most compatible way to handle DOM nodes 16 through 19
        return (
            <div
                className="ReactJSONEditor"
                ref={el => { this.container = el; }}
            />
        );
    }
}
