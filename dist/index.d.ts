import * as React from "react";
import 'jsoneditor/dist/jsoneditor.min.css';
import "./ReactJSONEditor.css";
interface ReactJSONEditorProps {
    json?: any;
    text?: any;
    name: string;
    mode?: string;
    modes?: string[];
    onChange?(): void;
    onChangeJSON?(): void;
    onChangeText?(): void;
}
declare class ReactJSONEditor extends React.Component<ReactJSONEditorProps> {
    private editor;
    private editorref;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillUpdate(nextProps: any, nextState: any): void;
    createEditor(): void;
    getJSON(): any;
    render(): JSX.Element;
}
export default ReactJSONEditor;
