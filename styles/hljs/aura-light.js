"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = exports["default"] = {
  "code[class*=\"language-\"]": {
    "color": "#828292", // Changed to match editor.foreground
    "background": "none",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "maxHeight": "inherit",
    "height": "inherit",
    "padding": "0 1em",
    "display": "block",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]": {
    "color": "#828292", // Changed to match editor.foreground
    "background": "none",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "fontSize": "1em",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "position": "relative",
    "margin": ".5em 0",
    "overflow": "visible",
    "padding": "1px",
    "backgroundColor": "#efeff8", // Changed to match editor.background
    "WebkitBoxSizing": "border-box",
    "MozBoxSizing": "border-box",
    "boxSizing": "border-box",
    "marginBottom": "1em"
  },
  "pre[class*=\"language-\"] > code": {
    "position": "relative",
    "zIndex": "1",
    "borderLeft": "10px solid #B486E0", // Changed to match activityBarBadge.background
    "boxShadow": "-1px 0px 0px 0px #B486E0, 0px 0px 0px 1px #dfdfdf", // Changed to match activityBarBadge.background
    "backgroundColor": "#efeff8", // Changed to match editor.background
    "backgroundImage": "linear-gradient(transparent 50%, rgba(180, 134, 224, 0.04) 50%)", // Changed to match activityBarBadge.background
    "backgroundSize": "3em 3em",
    "backgroundOrigin": "content-box",
    "backgroundAttachment": "local"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "backgroundColor": "#efeff8", // Changed to match editor.background
    "WebkitBoxSizing": "border-box",
    "MozBoxSizing": "border-box",
    "boxSizing": "border-box",
    "marginBottom": "1em",
    "position": "relative",
    "padding": ".2em",
    "borderRadius": "0.3em",
    "color": "#D85486", // Changed to match Block Level Variables
    "border": "1px solid rgba(0, 0, 0, 0.1)",
    "display": "inline",
    "whiteSpace": "normal"
  },
  "pre[class*=\"language-\"]:before": {
    "content": "''",
    "display": "block",
    "position": "absolute",
    "bottom": "0.75em",
    "left": "0.18em",
    "width": "40%",
    "height": "20%",
    "maxHeight": "13em",
    "boxShadow": "0px 13px 8px #979797",
    "WebkitTransform": "rotate(-2deg)",
    "MozTransform": "rotate(-2deg)",
    "msTransform": "rotate(-2deg)",
    "OTransform": "rotate(-2deg)",
    "transform": "rotate(-2deg)"
  },
  "pre[class*=\"language-\"]:after": {
    "content": "''",
    "display": "block",
    "position": "absolute",
    "bottom": "0.75em",
    "left": "auto",
    "width": "40%",
    "height": "20%",
    "maxHeight": "13em",
    "boxShadow": "0px 13px 8px #979797",
    "WebkitTransform": "rotate(2deg)",
    "MozTransform": "rotate(2deg)",
    "msTransform": "rotate(2deg)",
    "OTransform": "rotate(2deg)",
    "transform": "rotate(2deg)",
    "right": "0.75em"
  },
  "comment": {
    "color": "#a666e4" // Changed to match Comment
  },
  "block-comment": {
    "color": "#a666e4" // Changed to match Comment
  },
  "prolog": {
    "color": "#a666e4" // Changed to match Comment
  },
  "doctype": {
    "color": "#a666e4" // Changed to match Comment
  },
  "cdata": {
    "color": "#a666e4" // Changed to match Comment
  },
  "punctuation": {
    "color": "#a666e4" // Changed to match Operator, Misc
  },
  "property": {
    "color": "#00769E" // Changed to match Variables
  },
  "tag": {
    "color": "#00769E" // Changed to match Tag
  },
  "boolean": {
    "color": "#00769E" // Changed to match Number, Constant, Function Argument, Tag Attribute, Embedded
  },
  "number": {
    "color": "#00769E" // Changed to match Number, Constant, Function Argument, Tag Attribute, Embedded
  },
  "function-name": {
    "color": "#a58d00" // Changed to match Function, Special Method
  },
  "constant": {
    "color": "#00769E" // Changed to match Number, Constant, Function Argument, Tag Attribute, Embedded
  },
  "symbol": {
    "color": "#00769E" // Changed to match Number, Constant, Function Argument, Tag Attribute, Embedded
  },
  "deleted": {
    "color": "#FF5370" // Changed to match Deleted
  },
  "selector": {
    "color": "#00C29B" // Changed to match Class, Support
  },
  "attr-name": {
    "color": "#A06C00" // Changed to match HTML Attributes
  },
  "string": {
    "color": "#C56E43" // Changed to match String, Symbols, Inherited Class, Markup Heading
  },
  "char": {
    "color": "#C56E43" // Changed to match String, Symbols, Inherited Class, Markup Heading
  },
  "function": {
    "color": "#a58d00" // Changed to match Function, Special Method
  },
  "builtin": {
    "color": "#a58d00" // Changed to match Function, Special Method
  },
  "inserted": {
    "color": "#8AB82F" // Changed to match Inserted
  },
  "operator": {
    "color": "#a666e4", // Changed to match Operator, Misc
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "entity": {
    "color": "#a666e4", // Changed to match Operator, Misc
    "background": "rgba(255, 255, 255, 0.5)",
    "cursor": "help"
  },
  "url": {
    "color": "#a666e4", // Changed to match Operator, Misc
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "variable": {
    "color": "#00769E", // Changed to match Variables
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "atrule": {
    "color": "#00769E" // Changed to match Keyword, Storage
  },
  "attr-value": {
    "color": "#00769E" // Changed to match Keyword, Storage
  },
  "keyword": {
    "color": "#00769E" // Changed to match Keyword, Storage
  },
  "class-name": {
    "color": "#00C29B" // Changed to match Class, Support
  },
  "regex": {
    "color": "#89DDFF" // Changed to match Regular Expressions
  },
  "important": {
    "color": "#e90",
    "fontWeight": "normal"
  },
  ".language-css .token.string": {
    "color": "#C56E43", // Changed to match String, Symbols, Inherited Class, Markup Heading
    "background": "rgba(255, 255, 255, 0.5)"
  },
  ".style .token.string": {
    "color": "#C56E43", // Changed to match String, Symbols, Inherited Class, Markup Heading
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "pre[class*=\"language-\"].line-numbers.line-numbers": {
    "paddingLeft": "0"
  },
  "pre[class*=\"language-\"].line-numbers.line-numbers code": {
    "paddingLeft": "3.8em"
  },
  "pre[class*=\"language-\"].line-numbers.line-numbers .line-numbers-rows": {
    "left": "0"
  },
  "pre[class*=\"language-\"][data-line]": {
    "paddingTop": "0",
    "paddingBottom": "0",
    "paddingLeft": "0"
  },
  "pre[data-line] code": {
    "position": "relative",
    "paddingLeft": "4em"
  },
  "pre .line-highlight": {
    "marginTop": "0"
  }
};
