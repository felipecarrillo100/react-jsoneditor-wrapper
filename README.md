# react-jsoneditor-wrapper
A ReactTypescript wrapper for jsoneditor by josdejong

## How to install:
npm install react-jsoneditor-wrapper

## How to include
```javascript
import ReactJSONEditor from "react-jsoneditor-wrapper";
```
## To use
### Create an instance
First create an instance: 
```javascript
    <ReactJSONEditor json={properties} name="properties" mode="form" ref={ref => (this.jsoneditorref = ref)} />  
```  
If you prefer you can use text instead of a json object. Text will be parsed:  
```javascript
  <ReactJSONEditor ref={ref => (this.jsonEditorRef = ref)}  text={this.state.content} name="properties" mode="code" modes={["code"]}/>
```

