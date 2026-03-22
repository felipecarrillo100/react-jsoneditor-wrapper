// 1. Import the class and the Props interface
import {
    ReactJSONEditor as ReactJSONEditorClass,
    ReactJSONEditorProps
} from './ReactJSONEditor';

// 2. Export the Props for TS users
export type { ReactJSONEditorProps };

// 3. Export the class for TypeScript users (named and default)
export { ReactJSONEditorClass as ReactJSONEditor };
export default ReactJSONEditorClass;

// 4. THE UNIVERSAL FIX (The "Trick")
if (typeof module !== 'undefined' && module.exports) {
    const moduleExports = ReactJSONEditorClass as any;

    moduleExports.ReactJSONEditor = ReactJSONEditorClass;
    moduleExports.default = ReactJSONEditorClass;

    module.exports = moduleExports;
}
