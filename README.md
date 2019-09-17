# base62str
A ReactTypescript wrapper for jsoneditor by josdejong

## How to install:
npm install reactjsoneditor

## How to include
```javascript
import ReactJSONEditor from "reactjsoneditor";
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

