# jQuery.scrollSpeed
Lightweight jQuery extension for modifying scrolling speed in modern web browsers. User-defined easing.

## Installation
Include the latest version of [jQuery](http://jquery.com/download) and `jQuery.scrollSpeed.js` at the and of the `<body>` of your HTML document:
```html
<script src="jQuery.min.js"></script>  
<script src="jQuery.scrollSpeed.js"></script>
```
## How to Use
Reference the `scrollSpeed()` method and modify the `step` and `speed` parameters to create the desired scrolling effect. The `step` parameter defaults to `100` units, while `speed` defaults to `800` milliseconds; custom easing is optional.

```javascript
$(function() {  

    // Default
    jQuery.scrollSpeed(100, 800);
    
    // Custom Easing
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');
    
});
```  
