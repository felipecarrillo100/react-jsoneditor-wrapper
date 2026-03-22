import { render } from '@testing-library/react';
import * as React from 'react'; // Compatibility-friendly import
import ReactJSONEditor from './index';

describe('ReactJSONEditor (React 19 Compatibility)', () => {
    const mockData = { name: "Test", version: 1 };

    test('renders successfully with JSON data', () => {
        // We extract 'container' to search specifically within the rendered output
        const { container } = render(
            <ReactJSONEditor name="test-editor" json={mockData} />
        );

        // In React 19, look for the class inside the rendered container
        const editorDiv = container.querySelector('.ReactJSONEditor');

        expect(editorDiv).toBeInTheDocument();
    });

    test('React version is 19', () => {
        // Log to console so you can see it in the npm test output
        console.log('Running tests on React version:', React.version);
        expect(React.version.startsWith('19')).toBe(true);
    });
});
