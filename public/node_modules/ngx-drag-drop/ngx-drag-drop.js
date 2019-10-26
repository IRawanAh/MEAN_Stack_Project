import { ContentChild, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, NgModule, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

const DROP_EFFECTS = (["move", "copy", "link"]);
const CUSTOM_MIME_TYPE = "application/x-dnd";
const JSON_MIME_TYPE = "application/json";
const MSIE_MIME_TYPE = "Text";
/**
 * @param {?} mimeType
 * @return {?}
 */
function mimeTypeIsCustom(mimeType) {
    return mimeType.substr(0, CUSTOM_MIME_TYPE.length) === CUSTOM_MIME_TYPE;
}
/**
 * @param {?} event
 * @return {?}
 */
function getWellKnownMimeType(event) {
    const /** @type {?} */ types = event.dataTransfer.types;
    // IE 9 workaround.
    if (!types) {
        return MSIE_MIME_TYPE;
    }
    for (let /** @type {?} */ i = 0; i < types.length; i++) {
        if (types[i] === MSIE_MIME_TYPE
            || types[i] === JSON_MIME_TYPE
            || mimeTypeIsCustom(types[i])) {
            return types[i];
        }
    }
    return null;
}
/**
 * @param {?} event
 * @param {?} data
 * @param {?} effectAllowed
 * @return {?}
 */
function setDragData(event, data, effectAllowed) {
    // Internet Explorer and Microsoft Edge don't support custom mime types, see design doc:
    // https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
    const /** @type {?} */ mimeType = CUSTOM_MIME_TYPE + (data.type ? ("-" + data.type) : "");
    const /** @type {?} */ dataString = JSON.stringify(data);
    try {
        event.dataTransfer.setData(mimeType, dataString);
    }
    catch (e) {
        //   Setting a custom MIME type did not work, we are probably in IE or Edge.
        try {
            event.dataTransfer.setData(JSON_MIME_TYPE, dataString);
        }
        catch (e) {
            //   We are in Internet Explorer and can only use the Text MIME type. Also note that IE
            //   does not allow changing the cursor in the dragover event, therefore we have to choose
            //   the one we want to display now by setting effectAllowed.
            const /** @type {?} */ effectsAllowed = filterEffects(DROP_EFFECTS, effectAllowed);
            event.dataTransfer.effectAllowed = effectsAllowed[0];
            event.dataTransfer.setData(MSIE_MIME_TYPE, dataString);
        }
    }
}
/**
 * @param {?} event
 * @param {?} dragIsExternal
 * @return {?}
 */
function getDropData(event, dragIsExternal) {
    // check if the mime type is well known
    const /** @type {?} */ mimeType = getWellKnownMimeType(event);
    // drag did not originate from [dndDraggable]
    if (dragIsExternal === true) {
        if (mimeType !== null
            && mimeTypeIsCustom(mimeType)) {
            // the type of content is well known and safe to handle
            return JSON.parse(event.dataTransfer.getData(mimeType));
        }
        // the contained data is unknown, let user handle it
        return {};
    }
    // the type of content is well known and safe to handle
    return JSON.parse(event.dataTransfer.getData(mimeType));
}
/**
 * @param {?} effects
 * @param {?} allowed
 * @return {?}
 */
function filterEffects(effects, allowed) {
    if (allowed === "all") {
        return effects;
    }
    return effects.filter(function (effect) {
        return allowed.toLowerCase().indexOf(effect) !== -1;
    });
}
/**
 * @param {?} parentElement
 * @param {?} childElement
 * @return {?}
 */
function getDirectChildElement(parentElement, childElement) {
    let /** @type {?} */ directChild = childElement;
    while (directChild.parentNode !== parentElement) {
        // reached root node without finding given parent
        if (!directChild.parentNode) {
            return null;
        }
        directChild = directChild.parentNode;
    }
    return /** @type {?} */ (directChild);
}
/**
 * @param {?} event
 * @param {?} element
 * @param {?} horizontal
 * @return {?}
 */
function shouldPositionPlaceholderBeforeElement(event, element, horizontal) {
    const /** @type {?} */ bounds = element.getBoundingClientRect();
    // If the pointer is in the upper half of the list item element,
    // we position the placeholder before the list item, otherwise after it.
    if (horizontal) {
        return (event.clientX < bounds.left + bounds.width / 2);
    }
    return (event.clientY < bounds.top + bounds.height / 2);
}
/**
 * @param {?} event
 * @param {?} dragImage
 * @return {?}
 */
function calculateDragImageOffset(event, dragImage) {
    const /** @type {?} */ dragImageComputedStyle = window.getComputedStyle(dragImage);
    const /** @type {?} */ paddingTop = parseFloat(dragImageComputedStyle.paddingTop) || 0;
    const /** @type {?} */ paddingLeft = parseFloat(dragImageComputedStyle.paddingLeft) || 0;
    const /** @type {?} */ borderTop = parseFloat(dragImageComputedStyle.borderTopWidth) || 0;
    const /** @type {?} */ borderLeft = parseFloat(dragImageComputedStyle.borderLeftWidth) || 0;
    return {
        x: event.offsetX + paddingLeft + borderLeft,
        y: event.offsetY + paddingTop + borderTop
    };
}
/**
 * @param {?} event
 * @param {?} dragImage
 * @param {?} offsetFunction
 * @return {?}
 */
function setDragImage(event, dragImage, offsetFunction) {
    const /** @type {?} */ offset = offsetFunction(event, dragImage) || { x: 0, y: 0 };
    ((event.dataTransfer)).setDragImage(dragImage, offset.x, offset.y);
}

const _dndState = {
    isDragging: false,
    dropEffect: "none",
    effectAllowed: "all",
    type: undefined
};
/**
 * @param {?} event
 * @param {?} effectAllowed
 * @param {?} type
 * @return {?}
 */
function startDrag(event, effectAllowed, type) {
    _dndState.isDragging = true;
    _dndState.dropEffect = "none";
    _dndState.effectAllowed = effectAllowed;
    _dndState.type = type;
    event.dataTransfer.effectAllowed = effectAllowed;
}
/**
 * @return {?}
 */
function endDrag() {
    _dndState.isDragging = false;
    _dndState.dropEffect = undefined;
    _dndState.effectAllowed = undefined;
    _dndState.type = undefined;
}
/**
 * @param {?} event
 * @param {?} dropEffect
 * @return {?}
 */
function setDropEffect(event, dropEffect) {
    if (_dndState.isDragging === true) {
        _dndState.dropEffect = dropEffect;
    }
    event.dataTransfer.dropEffect = dropEffect;
}
/**
 * @param {?} event
 * @param {?=} effectAllowed
 * @return {?}
 */
function getDropEffect(event, effectAllowed) {
    let /** @type {?} */ effects = DROP_EFFECTS;
    effects = filterEffects(effects, /** @type {?} */ (event.dataTransfer.effectAllowed));
    if (_dndState.isDragging === true) {
        effects = filterEffects(effects, _dndState.effectAllowed);
    }
    if (effectAllowed) {
        effects = filterEffects(effects, effectAllowed);
    }
    // MacOS automatically filters dataTransfer.effectAllowed depending on the modifier keys,
    // therefore the following modifier keys will only affect other operating systems.
    if (effects.length === 0) {
        return "none";
    }
    if (event.ctrlKey && effects.indexOf("copy") !== -1) {
        return "copy";
    }
    if (event.altKey && effects.indexOf("link") !== -1) {
        return "link";
    }
    return /** @type {?} */ (effects[0]);
}
/**
 * @param {?} event
 * @return {?}
 */
function getDndType(event) {
    if (_dndState.isDragging === true) {
        return _dndState.type;
    }
    const /** @type {?} */ mimeType = getWellKnownMimeType(event);
    if (mimeType === null) {
        return undefined;
    }
    if (mimeType === MSIE_MIME_TYPE
        || mimeType === JSON_MIME_TYPE) {
        return undefined;
    }
    return mimeType.substr(CUSTOM_MIME_TYPE.length + 1) || undefined;
}
/**
 * @return {?}
 */
function isExternalDrag() {
    return _dndState.isDragging === false;
}
const dndState = (_dndState);

class DndDragImageRefDirective {
    /**
     * @param {?} parent
     * @param {?} elementRef
     */
    constructor(parent, elementRef) {
        parent.registerDragImage(elementRef);
    }
}
DndDragImageRefDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndDragImageRef]"
            },] },
];
/**
 * @nocollapse
 */
DndDragImageRefDirective.ctorParameters = () => [
    { type: DndDraggableDirective, },
    { type: ElementRef, },
];
class DndDraggableDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dndEffectAllowed = "copy";
        this.dndDraggingClass = "dndDragging";
        this.dndDraggingSourceClass = "dndDraggingSource";
        this.dndDraggableDisabledClass = "dndDraggableDisabled";
        this.dndDragImageOffsetFunction = calculateDragImageOffset;
        this.dndStart = new EventEmitter();
        this.dndEnd = new EventEmitter();
        this.dndMoved = new EventEmitter();
        this.dndCopied = new EventEmitter();
        this.dndLinked = new EventEmitter();
        this.dndCanceled = new EventEmitter();
        this.draggable = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dndDisableIf(value) {
        this.draggable = !value;
        if (this.draggable) {
            this.renderer.removeClass(this.elementRef.nativeElement, this.dndDraggableDisabledClass);
        }
        else {
            this.renderer.addClass(this.elementRef.nativeElement, this.dndDraggableDisabledClass);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragStart(event) {
        if (this.draggable === false) {
            return false;
        }
        // check if there is dnd handle and if the dnd handle was used to start the drag
        if (typeof this.dndHandle !== "undefined"
            && typeof event._dndUsingHandle === "undefined") {
            return false;
        }
        // initialize global state
        startDrag(event, this.dndEffectAllowed, this.dndType);
        setDragData(event, { data: this.dndDraggable, type: this.dndType }, dndState.effectAllowed);
        this.determineDragImage();
        // set dragging css class prior to setDragImage so styles are applied before
        // TODO breaking change: add class to elementRef rather than drag image which could be another element
        this.renderer.addClass(this.dragImage, this.dndDraggingClass);
        // set custom dragimage if present
        // set dragimage if drag is started from dndHandle
        if (typeof this.dndDragImageElementRef !== "undefined"
            || typeof event._dndUsingHandle !== "undefined") {
            setDragImage(event, this.dragImage, this.dndDragImageOffsetFunction);
        }
        // add dragging source css class on first drag event
        const /** @type {?} */ unregister = this.renderer.listen(this.elementRef.nativeElement, "drag", () => {
            this.renderer.addClass(this.elementRef.nativeElement, this.dndDraggingSourceClass);
            unregister();
        });
        this.dndStart.emit(event);
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEnd(event) {
        // get drop effect from custom stored state as its not reliable across browsers
        const /** @type {?} */ dropEffect = dndState.dropEffect;
        let /** @type {?} */ dropEffectEmitter;
        switch (dropEffect) {
            case "copy":
                dropEffectEmitter = this.dndCopied;
                break;
            case "link":
                dropEffectEmitter = this.dndLinked;
                break;
            case "move":
                dropEffectEmitter = this.dndMoved;
                break;
            default:
                dropEffectEmitter = this.dndCanceled;
                break;
        }
        dropEffectEmitter.emit(event);
        this.dndEnd.emit(event);
        // reset global state
        endDrag();
        this.renderer.removeClass(this.dragImage, this.dndDraggingClass);
        // IE9 special hammering
        window.setTimeout(() => {
            this.renderer.removeClass(this.elementRef.nativeElement, this.dndDraggingSourceClass);
        }, 0);
        event.stopPropagation();
    }
    /**
     * @param {?} handle
     * @return {?}
     */
    registerDragHandle(handle) {
        this.dndHandle = handle;
    }
    /**
     * @param {?} elementRef
     * @return {?}
     */
    registerDragImage(elementRef) {
        this.dndDragImageElementRef = elementRef;
    }
    /**
     * @return {?}
     */
    determineDragImage() {
        // evaluate custom drag image existence
        if (typeof this.dndDragImageElementRef !== "undefined") {
            this.dragImage = /** @type {?} */ (this.dndDragImageElementRef.nativeElement);
        }
        else {
            this.dragImage = this.elementRef.nativeElement;
        }
    }
}
DndDraggableDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndDraggable]"
            },] },
];
/**
 * @nocollapse
 */
DndDraggableDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
DndDraggableDirective.propDecorators = {
    'dndDraggable': [{ type: Input },],
    'dndEffectAllowed': [{ type: Input },],
    'dndType': [{ type: Input },],
    'dndDraggingClass': [{ type: Input },],
    'dndDraggingSourceClass': [{ type: Input },],
    'dndDraggableDisabledClass': [{ type: Input },],
    'dndDragImageOffsetFunction': [{ type: Input },],
    'dndStart': [{ type: Output },],
    'dndEnd': [{ type: Output },],
    'dndMoved': [{ type: Output },],
    'dndCopied': [{ type: Output },],
    'dndLinked': [{ type: Output },],
    'dndCanceled': [{ type: Output },],
    'draggable': [{ type: HostBinding, args: ["attr.draggable",] },],
    'dndDisableIf': [{ type: Input },],
    'onDragStart': [{ type: HostListener, args: ["dragstart", ["$event"],] },],
    'onDragEnd': [{ type: HostListener, args: ["dragend", ["$event"],] },],
};

class DndPlaceholderRefDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
}
DndPlaceholderRefDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndPlaceholderRef]"
            },] },
];
/**
 * @nocollapse
 */
DndPlaceholderRefDirective.ctorParameters = () => [
    { type: ElementRef, },
];
class DndDropzoneDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dndAllowExternal = false;
        this.dndHorizontal = false;
        this.dndDragoverClass = "dndDragover";
        this.dndDropzoneDisabledClass = "dndDropzoneDisabled";
        this.dndDragover = new EventEmitter();
        this.dndDrop = new EventEmitter();
        this.placeholder = null;
        this.disabled = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dndDisableIf(value) {
        this.disabled = !!value;
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.placeholder = this.tryGetPlaceholder();
        if (this.placeholder !== null) {
            this.placeholder.remove();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        // check if another dropzone is activated
        if (event._dndDropzoneActive === true) {
            this.cleanupDragoverState();
            return;
        }
        // set as active if the target element is inside this dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            const /** @type {?} */ newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
            }
        }
        // check if this drag event is allowed to drop on this dropzone
        const /** @type {?} */ type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        // allow the dragenter
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        // check if this drag event is allowed to drop on this dropzone
        const /** @type {?} */ type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        this.checkAndUpdatePlaceholderPosition(event);
        const /** @type {?} */ dropEffect = getDropEffect(event, this.dndEffectAllowed);
        if (dropEffect === "none") {
            this.cleanupDragoverState();
            return;
        }
        // allow the dragover
        event.preventDefault();
        // set the drop effect
        setDropEffect(event, dropEffect);
        this.dndDragover.emit(event);
        this.renderer.addClass(this.elementRef.nativeElement, this.dndDragoverClass);
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        try {
            // check if this drag event is allowed to drop on this dropzone
            const /** @type {?} */ type = getDndType(event);
            if (this.isDropAllowed(type) === false) {
                return;
            }
            const /** @type {?} */ data = getDropData(event, isExternalDrag());
            if (this.isDropAllowed(data.type) === false) {
                return;
            }
            // signal custom drop handling
            event.preventDefault();
            const /** @type {?} */ dropEffect = getDropEffect(event);
            setDropEffect(event, dropEffect);
            if (dropEffect === "none") {
                return;
            }
            const /** @type {?} */ dropIndex = this.getPlaceholderIndex();
            this.dndDrop.emit({
                event: event,
                dropEffect: dropEffect,
                isExternal: isExternalDrag(),
                data: data.data,
                index: dropIndex,
                type: type,
            });
            event.stopPropagation();
        }
        finally {
            this.cleanupDragoverState();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragLeave(event) {
        // check if still inside this dropzone and not yet handled by another dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            const /** @type {?} */ newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
                return;
            }
        }
        this.cleanupDragoverState();
        // cleanup drop effect when leaving dropzone
        setDropEffect(event, "none");
    }
    /**
     * @return {?}
     */
    tryGetPlaceholder() {
        if (typeof this.dndPlaceholderRef !== "undefined") {
            return /** @type {?} */ (this.dndPlaceholderRef.elementRef.nativeElement);
        }
        // TODO nasty workaround needed because if ng-container / template is used @ContentChild() or DI will fail because
        // of wrong context see angular bug https://github.com/angular/angular/issues/13517
        return this.elementRef.nativeElement.querySelector("[dndPlaceholderRef]");
    }
    /**
     * @param {?=} type
     * @return {?}
     */
    isDropAllowed(type) {
        // dropzone is disabled -> deny it
        if (this.disabled === true) {
            return false;
        }
        // if drag did not start from our directive
        // and external drag sources are not allowed -> deny it
        if (isExternalDrag() === true
            && this.dndAllowExternal === false) {
            return false;
        }
        // no filtering by types -> allow it
        if (!this.dndDropzone) {
            return true;
        }
        // no type set -> allow it
        if (!type) {
            return true;
        }
        if (Array.isArray(this.dndDropzone) === false) {
            throw new Error("dndDropzone: bound value to [dndDropzone] must be an array!");
        }
        // if dropzone contains type -> allow it
        return this.dndDropzone.indexOf(type) !== -1;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    checkAndUpdatePlaceholderPosition(event) {
        if (this.placeholder === null) {
            return;
        }
        // make sure the placeholder is in the DOM
        if (this.placeholder.parentNode !== this.elementRef.nativeElement) {
            this.renderer.appendChild(this.elementRef.nativeElement, this.placeholder);
        }
        // update the position if the event originates from a child element of the dropzone
        const /** @type {?} */ directChild = getDirectChildElement(this.elementRef.nativeElement, /** @type {?} */ (event.target));
        // early exit if no direct child or direct child is placeholder
        if (directChild === null
            || directChild === this.placeholder) {
            return;
        }
        const /** @type {?} */ positionPlaceholderBeforeDirectChild = shouldPositionPlaceholderBeforeElement(event, directChild, this.dndHorizontal);
        if (positionPlaceholderBeforeDirectChild) {
            // do insert before only if necessary
            if (directChild.previousSibling !== this.placeholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild);
            }
        }
        else {
            // do insert after only if necessary
            if (directChild.nextSibling !== this.placeholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild.nextSibling);
            }
        }
    }
    /**
     * @return {?}
     */
    getPlaceholderIndex() {
        if (this.placeholder === null) {
            return undefined;
        }
        const /** @type {?} */ element = (this.elementRef.nativeElement);
        return Array.prototype.indexOf.call(element.children, this.placeholder);
    }
    /**
     * @return {?}
     */
    cleanupDragoverState() {
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDragoverClass);
        if (this.placeholder !== null) {
            this.placeholder.remove();
        }
    }
}
DndDropzoneDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndDropzone]"
            },] },
];
/**
 * @nocollapse
 */
DndDropzoneDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
DndDropzoneDirective.propDecorators = {
    'dndDropzone': [{ type: Input },],
    'dndEffectAllowed': [{ type: Input },],
    'dndAllowExternal': [{ type: Input },],
    'dndHorizontal': [{ type: Input },],
    'dndDragoverClass': [{ type: Input },],
    'dndDropzoneDisabledClass': [{ type: Input },],
    'dndDragover': [{ type: Output },],
    'dndDrop': [{ type: Output },],
    'dndPlaceholderRef': [{ type: ContentChild, args: [DndPlaceholderRefDirective,] },],
    'dndDisableIf': [{ type: Input },],
    'onDragEnter': [{ type: HostListener, args: ["dragenter", ["$event"],] },],
    'onDragOver': [{ type: HostListener, args: ["dragover", ["$event"],] },],
    'onDrop': [{ type: HostListener, args: ["drop", ["$event"],] },],
    'onDragLeave': [{ type: HostListener, args: ["dragleave", ["$event"],] },],
};

class DndHandleDirective {
    /**
     * @param {?} parent
     */
    constructor(parent) {
        this.draggable = true;
        parent.registerDragHandle(this);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEvent(event) {
        event._dndUsingHandle = true;
    }
}
DndHandleDirective.decorators = [
    { type: Directive, args: [{
                selector: "[dndHandle]"
            },] },
];
/**
 * @nocollapse
 */
DndHandleDirective.ctorParameters = () => [
    { type: DndDraggableDirective, },
];
DndHandleDirective.propDecorators = {
    'draggable': [{ type: HostBinding, args: ["attr.draggable",] },],
    'onDragEvent': [{ type: HostListener, args: ["dragstart", ["$event"],] }, { type: HostListener, args: ["dragend", ["$event"],] },],
};

class DndModule {
}
DndModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    DndDraggableDirective,
                    DndDropzoneDirective,
                    DndHandleDirective,
                    DndPlaceholderRefDirective,
                    DndDragImageRefDirective
                ],
                exports: [
                    DndDraggableDirective,
                    DndDropzoneDirective,
                    DndHandleDirective,
                    DndPlaceholderRefDirective,
                    DndDragImageRefDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
DndModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { DndDragImageRefDirective, DndDraggableDirective, DndPlaceholderRefDirective, DndDropzoneDirective, DndHandleDirective, DndModule };
//# sourceMappingURL=ngx-drag-drop.js.map
