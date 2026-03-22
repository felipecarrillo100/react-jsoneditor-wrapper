# React JSON Editor Wrapper

A high-performance, **universally compatible** React wrapper for [jsoneditor](https://github.com/josdejong/jsoneditor). 

Built to run everywhere—from **React 16.8** legacy systems to **React 19** modern applications—without changing a single line of code.

## 🚀 Key Features

* **Universal Core**: Supports React 16.8, 17, 18, and 19.
* **Zero-Config Compatibility**: Automatically handles the React 19 "Fiber" export trick and React 16 "Classic" JSX transform.
* **Strict Mode Ready**: Defensive cleanup logic prevents memory leaks and double-rendering bugs in React 18/19.
* **TypeScript First**: Full type definitions for props and the underlying `jsoneditor` instance.
* **Fully Controlled & Uncontrolled**: Support for both `json` and `text` modes with smart diffing to prevent cursor jumps.

## 📦 Installation

```bash
npm install react-jsoneditor-wrapper
```

## 🛠 Usage

### Basic Example (Functional Component)
```tsx
import React, { useState } from 'react';
import ReactJSONEditor from 'react-jsoneditor-wrapper';

const App = () => {
  const [data, setData] = useState({ hello: "world" });

  return (
    <div style={{ height: '500px' }}>
      <ReactJSONEditor
        json={data}
        onChangeJSON={(nextJson) => setData(nextJson)}
      />
    </div>
  );
};
```

### Advanced Usage (Modern Features)
Leverage the power of `jsoneditor` 10.1.0 with validation schemas and granular UI control.

```tsx
<ReactJSONEditor
  mode="code"
  modes={['code', 'tree', 'form']}
  schema={myValidationSchema}
  indentation={4}
  navigationBar={true}
  statusBar={true}
  search={true}
  onValidationError={(errors) => console.log('Validation failed:', errors)}
/>
```
## 🎛 Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| **Core Data** | | | |
| `json` | `any` | `undefined` | The JSON object to be displayed. |
| `text` | `string` | `undefined` | Raw string content (useful for 'code' or 'text' modes). |
| `name` | `string` | `'JSON editor'` | Field name for the root node. |
| **UI Config** | | | |
| `mode` | `JSONEditorMode` | `'form'` | Editor mode (`tree`, `view`, `form`, `code`, `text`, `preview`). |
| `modes` | `string[]` | `['form', 'tree', 'code', 'view']` | Available modes in the mode switcher. |
| `readOnly` | `boolean` | `false` | Disables editing and hides the main menu bar. |
| `indentation` | `number` | `2` | Number of spaces for indentation. |
| `theme` | `string` | `undefined` | Custom theme class name. |
| `search` | `boolean` | `true` | Enable/disable the search box. |
| `history` | `boolean` | `true` | Enable/disable undo/redo history. |
| `navigationBar` | `boolean` | `true` | Show/hide the navigation bar (breadcrumb). |
| `statusBar` | `boolean` | `true` | Show/hide the status bar at the bottom. |
| **Validation** | | | |
| `schema` | `any` | `undefined` | JSON Schema for real-time validation. |
| `schemaRefs` | `any` | `undefined` | External schemas referenced by `$ref`. |
| **Callbacks** | | | |
| `onChange` | `function` | `undefined` | Triggered on any change. |
| `onChangeJSON` | `function` | `undefined` | Returns the new JSON object. |
| `onChangeText` | `function` | `undefined` | Returns the raw string content. |
| `onValidationError`| `function` | `undefined` | Callback for validation errors (returns `errors[]`). |
| `onModeChange` | `function` | `undefined` | Triggered when the user switches modes. |
| `onEditable` | `function` | `undefined` | Determine if a specific node is editable. |
| `onError` | `function` | `undefined` | Error callback for library-level exceptions. |
| `onClassName` | `function` | `undefined` | Add custom CSS classes to specific JSON nodes. |

## 🏗 Imperative API
You can access the internal `jsoneditor` instance directly via `refs`.

```tsx
import { ReactJSONEditor } from 'react-jsoneditor-wrapper';

const editorRef = useRef<ReactJSONEditor>(null);

const handleGetRawData = () => {
  // Use built-in helper methods
  const json = editorRef.current?.getJSON();
  
  // Or access the raw jsoneditor instance
  const rawInstance = editorRef.current?.editor;
  rawInstance?.expandAll();
};

<ReactJSONEditor ref={editorRef} json={myContent} />
```

## 📝 CSS Requirements
The library includes the standard `jsoneditor` styles. Ensure your bundler supports CSS imports, or import it manually:

```tsx
import 'react-jsoneditor-wrapper/dist/index.css';
```

## ⚖️ License
MIT

