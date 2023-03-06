import { CmcElement } from "./CmcElement.js";
export class CmcInputElement extends CmcElement {
  _inputElement;
  static watchedAttributes = [
    "autofocus",
    "autocomplete",
    "name",
    "disabled",
    "checked",
    "required",
    "value",
    "placeholder",
    "form",
    "min",
    "max",
    "maxlength",
    "minlength",
    "multiple",
    "pattern",
    "readonly",
    "size",
    "type",
    "rows",
    "cols",
    "errormessage",
  ];
  constructor() {
    super();
    this._inputElement = null;
  }
  attributeChangedCallback(name, _, newValue) {
    super.attributeChangedCallback(name, _, newValue);
    if (!this._inputElement) return;
    switch (name) {
      case "accept":
        this._inputElement.setAttribute("accept", newValue);
        break;
      case "autofocus":
        this._inputElement.setAttribute("autofocus", "");
        this.focus();
        break;
      case "autocomplete":
        this._inputElement.setAttribute("autocomplete", newValue);
        break;
      case "placeholder":
        this._inputElement.setAttribute("placeholder", newValue);
        break;
      case "name":
        this._inputElement.name = newValue;
        break;
      case "value":
        this._inputElement.value = newValue;
        break;
      case "disabled":
        this._inputElement.disabled = true;
        break;
      case "checked":
        this._inputElement.checked = true;
        break;
      case "required":
        this._inputElement.required = true;
        break;
      case "form":
        this._inputElement.setAttribute("form", newValue);
        break;
      case "max":
        this._inputElement.max = newValue;
        break;
      case "min":
        this._inputElement.min = newValue;
        break;
      case "maxlength":
        this._inputElement.setAttribute("maxlength", newValue);
        break;
      case "minlength":
        this._inputElement.setAttribute("minlength", newValue);
        break;
      case "multiple":
        this._inputElement.setAttribute("multiple", "");
        break;
      case "pattern":
        this._inputElement.setAttribute("pattern", newValue);
        break;
      case "readonly":
        this._inputElement.setAttribute("readonly", "");
        break;
      case "size":
        this._inputElement.setAttribute("size", newValue);
        break;
      case "step":
        this._inputElement.setAttribute("step", newValue);
        break;
      case "type":
        this._inputElement.setAttribute("type", newValue);
        break;
      case "rows":
        this._inputElement.setAttribute("rows", newValue);
        break;
      case "cols":
        this._inputElement.setAttribute("cols", newValue);
        break;
      case "errormessage":
        this.setCustomValidity(newValue);
        break;
    }
  }
  focus(options) {
    this._inputElement?.focus(options);
  }
  blur() {
    this._inputElement?.blur();
  }
  get name() {
    if (!this._inputElement) return "";
    return this._inputElement.name;
  }
  set name(value) {
    this._setAttr("name", value);
  }
  get type() {
    if (!this._inputElement) return "";
    return this._inputElement.type;
  }
  set type(value) {
    this._setAttr("type", value);
  }
  get value() {
    if (!this._inputElement) return "";
    return this._inputElement?.value;
  }
  set value(value) {
    this._setAttr("value", value);
  }
  get disabled() {
    return this._inputElement?.hasAttribute("disabled");
  }
  set disabled(value) {
    this._setAttr("disabled", value);
  }
  get checked() {
    if (!this._inputElement) return false;
    return this._inputElement?.hasAttribute("checked");
  }
  set checked(value) {
    this._setAttr("checked", value);
  }
  get required() {
    if (!this._inputElement) return false;
    return this._inputElement?.hasAttribute("required");
  }
  set required(value) {
    this._setAttr("required", value);
  }
  get cols() {
    return this._inputElement?.getAttribute("cols") || "";
  }
  set cols(value) {
    this._setAttr("cols", value);
  }
  get rows() {
    return this._inputElement?.getAttribute("rows") || "";
  }
  set rows(value) {
    this._setAttr("rows", value);
  }
  get validity() {
    return this._inputElement?.validity;
  }
  checkValidity() {
    return this._inputElement?.checkValidity();
  }
  setCustomValidity(message) {
    this._inputElement?.setCustomValidity(message);
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.hasAttribute("autofocus")) {
      this._inputElement?.focus();
    }
  }
  /**
   * If something is being set as a property, make sure to add the attribute as well!
   * @param attr
   * @param val
   */
  _setAttr(attr, val) {
    if (!this._initialised) {
      this.attributeChangedCallback(attr, "", val);
      if (!this.hasAttribute(attr)) this.setAttribute(attr, val);
    } else {
      if (!this.hasAttribute(attr)) this.setAttribute(attr, val);
      if (!this._inputElement?.hasAttribute(attr))
        this._inputElement?.setAttribute("type", val);
    }
  }
}
