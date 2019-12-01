function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialMarkdown = `
# Favorite Animals

## Cats
### Kittens
#### All the above

~~WOOF~~
**_MEOW_**

> Cats Rule!Dogs Drool!

### Reasons why cats are awesome:
- They are playful.
- Good Hunters.
- Self sufficient.
- They Meow *and* purr.
- They come in many sizes and colors.

[Cats](https://en.wikipedia.org/wiki/Kitten Find more Cat info here!")
[Google](https://google.com "And here!")

An example of of inline code, \`<div id= "cats"></div>\`, about cats.

A code block that alerts a special message about cats:

\`\`\`
function test() {
  console.log("Adopt a cat today!");
}
\`\`\`




![Cat Photo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpaIctHIjv1tVOMrJFkxzrWdszlxI4U-5RURxtDlqW-1Eu2_sN)



`;
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    e => this.setState({ markdown: e.target.value }));this.state = { markdown: initialMarkdown // this.handleChange = //this.handleChange.bind(this)
    };}
  render() {
    return (
      React.createElement("div", null,
      React.createElement("header", null, " ", React.createElement("h1", null, "Markdown Previewer")),
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "left" },
      React.createElement("textarea", { id: "editor", value: this.state.markdown, onChange: this.handleChange })),

      React.createElement("div", { className: "right" },

      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.markdown) } })))));




  }}


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));