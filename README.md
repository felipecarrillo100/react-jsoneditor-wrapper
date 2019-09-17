# react-jsoneditor-wrapper
A ReactTypescript wrapper for jsoneditor by josdejong

## How to install:
npm install react-jsoneditor-wrapper

## How to include
```javascript
import ReactJSONEditor from "react-jsoneditor-wrapper";
```
## To use
### Create elements the React way
Create an element with properties: 
```javascript
    <ReactJSONEditor json={properties} name="properties" mode="form" ref={ref => (this.jsoneditorref = ref)} />  
```  
If you prefer you can use text instead of a json object. Text will be parsed in to a JSOn object:  
```javascript
  <ReactJSONEditor ref={ref => (this.jsonEditorRef = ref)}  text={this.state.content} name="properties" mode="code" modes={["code"]}/>
```

