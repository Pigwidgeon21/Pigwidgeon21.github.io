function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",









    buttonName => {
      let currentNumber = this.state.currentNumber;
      let operatorFlag = this.state.operatorFlag;
      const endsWithNegativeSign = /[x/+]‑$/;

      switch (true) {
        case buttonName === "0" ||
        buttonName === "1" ||
        buttonName === "2" ||
        buttonName === "3" ||
        buttonName === "4" ||
        buttonName === "5" ||
        buttonName === "6" ||
        buttonName === "7" ||
        buttonName === "8" ||
        buttonName === "9":

          if (this.state.currentNumber !== "0") {//adds num to screen, removing zero if it is the first num

            currentNumber += buttonName;
            operatorFlag = false; //sets operator flag to false so you can continue to add numbers and operators

          } else {
            currentNumber = buttonName;
          }


          break;
        case buttonName === "+" ||
        buttonName === "-" ||
        buttonName === "*" ||
        buttonName === "/":
          if (!this.state.operatorFlag) {//allows you to append operator
            currentNumber += buttonName;
            operatorFlag = true;
            this.setState({ decimalFlag: false });

          } else



          {//allows you to switch operator
            const newNumber = currentNumber.slice(0, currentNumber.length - 1);
            currentNumber = newNumber;
            currentNumber += buttonName;
          }
          break;
        case buttonName === "C":
          currentNumber = "0";
          operatorFlag = false;
          this.setState({ decimalFlag: false });
          break;
        case buttonName === "=":
          currentNumber = eval(currentNumber);
          operatorFlag = false;
          this.setState({ decimalFlag: true });
          break;
        case buttonName === ".":
          if (!this.state.decimalFlag) {
            currentNumber += ".";
            this.setState({ decimalFlag: true });
          }}



      this.setState({ currentNumber });
      this.setState({ operatorFlag });
    });this.state = { currentNumber: "0", operatorFlag: false, decimalFlag: false // end state
    };} //end constructor
  render() {
    return (
      React.createElement("div", { id: "container" },
      React.createElement("div", { id: "calcGrid" },
      React.createElement(Screen, { id: "display", currentNumber: this.state.currentNumber }),
      React.createElement(Button, { id: "zero", name: "0", handleClick: this.handleClick }),
      React.createElement(Button, { id: "one", name: "1", handleClick: this.handleClick }),
      React.createElement(Button, { id: "two", name: "2", handleClick: this.handleClick }),
      React.createElement(Button, { id: "three", name: "3", handleClick: this.handleClick }),
      React.createElement(Button, { id: "four", name: "4", handleClick: this.handleClick }),
      React.createElement(Button, { id: "five", name: "5", handleClick: this.handleClick }),
      React.createElement(Button, { id: "six", name: "6", handleClick: this.handleClick }),
      React.createElement(Button, { id: "seven", name: "7", handleClick: this.handleClick }),
      React.createElement(Button, { id: "eight", name: "8", handleClick: this.handleClick }),
      React.createElement(Button, { id: "nine", name: "9", handleClick: this.handleClick }),
      React.createElement(Button, { id: "clear", name: "C", handleClick: this.handleClick }),
      React.createElement(Button, { id: "equals", name: "=", handleClick: this.handleClick }),
      React.createElement(Button, { id: "decimal", name: ".", handleClick: this.handleClick }),
      React.createElement(Button, { id: "add", name: "+", handleClick: this.handleClick }),
      React.createElement(Button, { id: "subtract", name: "-", handleClick: this.handleClick }),
      React.createElement(Button, { id: "multiply", name: "*", handleClick: this.handleClick }),
      React.createElement(Button, { id: "divide", name: "/", handleClick: this.handleClick }))));


    //end return
  } //end render
} //end App



class Screen extends React.Component {
  render() {
    return (
      React.createElement("div", { id: this.props.id },
      this.props.currentNumber));

    //return end
  } //render end
} //Screen End

class Button extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "runParentHandleClick",
    () => {
      this.props.handleClick(this.props.name);
    });}

  render() {
    return (
      React.createElement("button", { id: this.props.id, onClick: this.runParentHandleClick, classNmae: "button" }, this.props.name, " "));


  }}





ReactDOM.render(React.createElement(App, null), document.getElementById('root'));