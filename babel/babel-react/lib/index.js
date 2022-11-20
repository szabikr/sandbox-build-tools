"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function getId() {
  return Math.floor(Math.random() * 100000);
}
var constantTodos = [{
  id: getId(),
  name: 'shopping',
  complete: true
}, {
  id: getId(),
  name: 'workout',
  complete: false
}, {
  id: getId(),
  name: 'coding',
  complete: false
}];
var TODO_ITEMS_KEY = 'todoItems';
function App() {
  var todoItemInputRef = React.useRef(null);
  var _React$useState = React.useState(function () {
      var savedTodos = JSON.parse(localStorage.getItem(TODO_ITEMS_KEY));
      return savedTodos || constantTodos;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    todos = _React$useState2[0],
    setTodos = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    errorMessage = _React$useState4[0],
    setErrorMessage = _React$useState4[1];
  React.useEffect(function () {
    localStorage.setItem(TODO_ITEMS_KEY, JSON.stringify(todos));
  }, [todos]);
  function handleAddTodoClick() {
    setErrorMessage('');
    var name = todoItemInputRef.current.value;
    if (name === '') {
      setErrorMessage('Write something that you want to accomplish.');
      return;
    }
    setTodos([].concat(_toConsumableArray(todos), [{
      id: getId(),
      name: name,
      complete: false
    }]));
    todoItemInputRef.current.value = '';
  }
  function handleClearClick() {
    setErrorMessage('');
    if (!todos.find(function (todo) {
      return todo.complete;
    })) {
      setErrorMessage('No completed todos to be cleared from the list.');
      return;
    }
    setTodos(todos.filter(function (todo) {
      return !todo.complete;
    }));
  }
  function handleToggleTodoChange(id) {
    setTodos(_toConsumableArray(todos.map(function (todo) {
      if (todo.id === id) {
        return _objectSpread(_objectSpread({}, todo), {}, {
          complete: !todo.complete
        });
      }
      return todo;
    })));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Todo List"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "new-todo-item"
  }, "Would like to accomplish"), /*#__PURE__*/React.createElement("input", {
    id: "new-todo-item",
    ref: todoItemInputRef,
    type: "text"
  }), /*#__PURE__*/React.createElement("button", {
    "class": "primary",
    onClick: handleAddTodoClick
  }, "Add todo"), /*#__PURE__*/React.createElement("button", {
    "class": "secondary",
    onClick: handleClearClick
  }, "Clear list")), /*#__PURE__*/React.createElement("section", {
    "class": "error-message"
  }, errorMessage), /*#__PURE__*/React.createElement("section", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("div", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      id: "todo-item-".concat(todo.id),
      type: "checkbox",
      checked: todo.complete,
      onChange: function onChange() {
        return handleToggleTodoChange(todo.id);
      }
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "todo-item-".concat(todo.id)
    }, todo.name));
  }))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("footer", null, "a", ' ', /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement("a", {
    href: "https://szabi.space/"
  }, "szabi.space")), ' ', "development"));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(App, null));
