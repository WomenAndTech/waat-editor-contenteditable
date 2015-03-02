WaatEditor.Serializer = function(editor){
  this.editor = editor;
}

WaatEditor.Serializer.prototype.serializeElement = function(element){
  var attributes = [],
      children = [],
      text = [];

  if(element.attributes.length > 0){
    for(var index = 0; index < element.attributes.length; index++){
      var attribute = element.attributes[index];
      attributes[index] = this.serializeAttribute(attribute);
    }
  }
  
  if(element.childNodes.length > 0){
    for(var index = 0; index < element.children.length; index++){
      var child = element.children[index];
      
      if(child.nodeType === 1){
        children[index] = this.serializeElement(child);
      }

      if(child.nodeType === 3){
        text.push(child.textContent);
      }
      
    }
  }

  return {
    tag: element.tagName.toLowerCase(),
    attributes: attributes,
    children: children,
    text: element.innerText
  };
};

WaatEditor.Serializer.prototype.serializeAttribute = function(attribute){
  var a = {};
  
  a[attribute.name] = attribute.value;

  return a;
}