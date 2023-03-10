import { CmcElement } from "./CmcElement.js";
export declare class CmcInputElement extends CmcElement {
    protected _inputElement: any;
    static watchedAttributes: string[];
    constructor();
    attributeChangedCallback(name: string, _: string, newValue: string): void;
    focus(options?: FocusOptions | undefined): void;
    blur(): void;
    get name(): string;
    set name(value: string);
    get type(): string;
    set type(value: string);
    get value(): string;
    set value(value: string);
    get disabled(): boolean | undefined;
    set disabled(value: boolean | undefined);
    get checked(): boolean;
    set checked(value: boolean);
    get required(): boolean;
    set required(value: boolean);
    get cols(): string;
    set cols(value: string);
    get rows(): string;
    set rows(value: string);
    get validity(): any;
    checkValidity(): any;
    setCustomValidity(message: string): void;
    connectedCallback(): void;
    /**
     * If something is being set as a property, make sure to add the attribute as well!
     * @param attr
     * @param val
     */
    _setAttr(attr: string, val: any): void;
}
