var HtmlFilter = require('../index.js');

var html =
`
<h1><br /><h1>user info</h1></h1>
<div id="myid" style="border: 1px solid red">
    <div style="font-weight: bold">Hello</div>
    <br />
    <div id="user" onclick="alert(1)">
        <p>zhangsan</p>
        <p>male</p>
        <p>20</p>
    </div>
</div>
`;

var obj = new HtmlFilter();
obj.allowedTags = {
    p: null,  // not support attr
    div: {id: 1, style: 1},  // support id and style attr
    br: null
};
obj.parse(html);

console.log(obj.getHtml())