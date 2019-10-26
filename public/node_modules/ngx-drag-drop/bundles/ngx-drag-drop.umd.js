(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-drag-drop'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var DROP_EFFECTS = (["move", "copy", "link"]);
var CUSTOM_MIME_TYPE = "application/x-dnd";
var JSON_MIME_TYPE = "application/json";
var MSIE_MIME_TYPE = "Text";
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
    var /** @type {?} */ types = event.dataTransfer.types;
    // IE 9 workaround.
    if (!types) {
        return MSIE_MIME_TYPE;
    }
    for (var /** @type {?} */ i = 0; i < types.length; i++) {
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
    var /** @type {?} */ mimeType = CUSTOM_MIME_TYPE + (data.type ? ("-" + data.type) : "");
    var /** @type {?} */ dataString = JSON.stringify(data);
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
            var /** @type {?} */ effectsAllowed = filterEffects(DROP_EFFECTS, effectAllowed);
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
    var /** @type {?} */ mimeType = getWellKnownMimeType(event);
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
    var /** @type {?} */ directChild = childElement;
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
    var /** @type {?} */ bounds = element.getBoundingClientRect();
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
    var /** @type {?} */ dragImageComputedStyle = window.getComputedStyle(dragImage);
    var /** @type {?} */ paddingTop = parseFloat(dragImageComputedStyle.paddingTop) || 0;
    var /** @type {?} */ paddingLeft = parseFloat(dragImageComputedStyle.paddingLeft) || 0;
    var /** @type {?} */ borderTop = parseFloat(dragImageComputedStyle.borderTopWidth) || 0;
    var /** @type {?} */ borderLeft = parseFloat(dragImageComputedStyle.borderLeftWidth) || 0;
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
    var /** @type {?} */ offset = offsetFunction(event, dragImage) || { x: 0, y: 0 };
    ((event.dataTransfer)).setDragImage(dragImage, offset.x, offset.y);
}
var _dndState = {
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
    var /** @type {?} */ effects = DROP_EFFECTS;
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
    var /** @type {?} */ mimeType = getWellKnownMimeType(event);
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
var dndState = (_dndState);
var DndDragImageRefDirective = /** @class */ (function () {
    /**
     * @param {?} parent
     * @param {?} elementRef
     */
    function DndDragImageRefDirective(parent, elementRef) {
        parent.registerDragImage(elementRef);
    }
    return DndDragImageRefDirective;
}());
DndDragImageRefDirective.decorators = [
    { type: core.Directive, args: [{
                selector: "[dndDragImageRef]"
            },] },
];
/**
 * @nocollapse
 */
DndDragImageRefDirective.ctorParameters = function () { return [
    { type: DndDraggableDirective, },
    { type: core.ElementRef, },
]; };
var DndDraggableDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    function DndDraggableDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dndEffectAllowed = "copy";
        this.dndDraggingClass = "dndDragging";
        this.dndDraggingSourceClass = "dndDraggingSource";
        this.dndDraggableDisabledClass = "dndDraggableDisabled";
        this.dndDragImageOffsetFunction = calculateDragImageOffset;
        this.dndStart = new core.EventEmitter();
        this.dndEnd = new core.EventEmitter();
        this.dndMoved = new core.EventEmitter();
        this.dndCopied = new core.EventEmitter();
        this.dndLinked = new core.EventEmitter();
        this.dndCanceled = new core.EventEmitter();
        this.draggable = true;
    }
    Object.defineProperty(DndDraggableDirective.prototype, "dndDisableIf", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.draggable = !value;
            if (this.draggable) {
                this.renderer.removeClass(this.elementRef.nativeElement, this.dndDraggableDisabledClass);
            }
            else {
                this.renderer.addClass(this.elementRef.nativeElement, this.dndDraggableDisabledClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    DndDraggableDirective.prototype.onDragStart = function (event) {
        var _this = this;
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
        var /** @type {?} */ unregister = this.renderer.listen(this.elementRef.nativeElement, "drag", function () {
            _this.renderer.addClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
            unregister();
        });
        this.dndStart.emit(event);
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDraggableDirective.prototype.onDragEnd = function (event) {
        var _this = this;
        // get drop effect from custom stored state as its not reliable across browsers
        var /** @type {?} */ dropEffect = dndState.dropEffect;
        var /** @type {?} */ dropEffectEmitter;
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
        window.setTimeout(function () {
            _this.renderer.removeClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
        }, 0);
        event.stopPropagation();
    };
    /**
     * @param {?} handle
     * @return {?}
     */
    DndDraggableDirective.prototype.registerDragHandle = function (handle) {
        this.dndHandle = handle;
    };
    /**
     * @param {?} elementRef
     * @return {?}
     */
    DndDraggableDirective.prototype.registerDragImage = function (elementRef) {
        this.dndDragImageElementRef = elementRef;
    };
    /**
     * @return {?}
     */
    DndDraggableDirective.prototype.determineDragImage = function () {
        // evaluate custom drag image existence
        if (typeof this.dndDragImageElementRef !== "undefined") {
            this.dragImage = /** @type {?} */ (this.dndDragImageElementRef.nativeElement);
        }
        else {
            this.dragImage = this.elementRef.nativeElement;
        }
    };
    return DndDraggableDirective;
}());
DndDraggableDirective.decorators = [
    { type: core.Directive, args: [{
                selector: "[dndDraggable]"
            },] },
];
/**
 * @nocollapse
 */
DndDraggableDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
DndDraggableDirective.propDecorators = {
    'dndDraggable': [{ type: core.Input },],
    'dndEffectAllowed': [{ type: core.Input },],
    'dndType': [{ type: core.Input },],
    'dndDraggingClass': [{ type: core.Input },],
    'dndDraggingSourceClass': [{ type: core.Input },],
    'dndDraggableDisabledClass': [{ type: core.Input },],
    'dndDragImageOffsetFunction': [{ type: core.Input },],
    'dndStart': [{ type: core.Output },],
    'dndEnd': [{ type: core.Output },],
    'dndMoved': [{ type: core.Output },],
    'dndCopied': [{ type: core.Output },],
    'dndLinked': [{ type: core.Output },],
    'dndCanceled': [{ type: core.Output },],
    'draggable': [{ type: core.HostBinding, args: ["attr.draggable",] },],
    'dndDisableIf': [{ type: core.Input },],
    'onDragStart': [{ type: core.HostListener, args: ["dragstart", ["$event"],] },],
    'onDragEnd': [{ type: core.HostListener, args: ["dragend", ["$event"],] },],
};
var DndPlaceholderRefDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function DndPlaceholderRefDirective(elementRef) {
        this.elementRef = elementRef;
    }
    return DndPlaceholderRefDirective;
}());
DndPlaceholderRefDirective.decorators = [
    { type: core.Directive, args: [{
                selector: "[dndPlaceholderRef]"
            },] },
];
/**
 * @nocollapse
 */
DndPlaceholderRefDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
var DndDropzoneDirective = /** @class */ (function () {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    function DndDropzoneDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dndAllowExternal = false;
        this.dndHorizontal = false;
        this.dndDragoverClass = "dndDragover";
        this.dndDropzoneDisabledClass = "dndDropzoneDisabled";
        this.dndDragover = new core.EventEmitter();
        this.dndDrop = new core.EventEmitter();
        this.placeholder = null;
        this.disabled = false;
    }
    Object.defineProperty(DndDropzoneDirective.prototype, "dndDisableIf", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this.disabled = !!value;
            if (this.disabled) {
                this.renderer.addClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DndDropzoneDirective.prototype.ngAfterViewInit = function () {
        this.placeholder = this.tryGetPlaceholder();
        if (this.placeholder !== null) {
            this.placeholder.remove();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDragEnter = function (event) {
        // check if another dropzone is activated
        if (event._dndDropzoneActive === true) {
            this.cleanupDragoverState();
            return;
        }
        // set as active if the target element is inside this dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            var /** @type {?} */ newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
            }
        }
        // check if this drag event is allowed to drop on this dropzone
        var /** @type {?} */ type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        // allow the dragenter
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDragOver = function (event) {
        // check if this drag event is allowed to drop on this dropzone
        var /** @type {?} */ type = getDndType(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        this.checkAndUpdatePlaceholderPosition(event);
        var /** @type {?} */ dropEffect = getDropEffect(event, this.dndEffectAllowed);
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDrop = function (event) {
        try {
            // check if this drag event is allowed to drop on this dropzone
            var /** @type {?} */ type = getDndType(event);
            if (this.isDropAllowed(type) === false) {
                return;
            }
            var /** @type {?} */ data = getDropData(event, isExternalDrag());
            if (this.isDropAllowed(data.type) === false) {
                return;
            }
            // signal custom drop handling
            event.preventDefault();
            var /** @type {?} */ dropEffect = getDropEffect(event);
            setDropEffect(event, dropEffect);
            if (dropEffect === "none") {
                return;
            }
            var /** @type {?} */ dropIndex = this.getPlaceholderIndex();
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.onDragLeave = function (event) {
        // check if still inside this dropzone and not yet handled by another dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            var /** @type {?} */ newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
                return;
            }
        }
        this.cleanupDragoverState();
        // cleanup drop effect when leaving dropzone
        setDropEffect(event, "none");
    };
    /**
     * @return {?}
     */
    DndDropzoneDirective.prototype.tryGetPlaceholder = function () {
        if (typeof this.dndPlaceholderRef !== "undefined") {
            return /** @type {?} */ (this.dndPlaceholderRef.elementRef.nativeElement);
        }
        // TODO nasty workaround needed because if ng-container / template is used @ContentChild() or DI will fail because
        // of wrong context see angular bug https://github.com/angular/angular/issues/13517
        return this.elementRef.nativeElement.querySelector("[dndPlaceholderRef]");
    };
    /**
     * @param {?=} type
     * @return {?}
     */
    DndDropzoneDirective.prototype.isDropAllowed = function (type) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DndDropzoneDirective.prototype.checkAndUpdatePlaceholderPosition = function (event) {
        if (this.placeholder === null) {
            return;
        }
        // make sure the placeholder is in the DOM
        if (this.placeholder.parentNode !== this.elementRef.nativeElement) {
            this.renderer.appendChild(this.elementRef.nativeElement, this.placeholder);
        }
        // update the position if the event originates from a child element of the dropzone
        var /** @type {?} */ directChild = getDirectChildElement(this.elementRef.nativeElement, /** @type {?} */ (event.target));
        // early exit if no direct child or direct child is placeholder
        if (directChild === null
            || directChild === this.placeholder) {
            return;
        }
        var /** @type {?} */ positionPlaceholderBeforeDirectChild = shouldPositionPlaceholderBeforeElement(event, directChild, this.dndHorizontal);
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
    };
    /**
     * @return {?}
     */
    DndDropzoneDirective.prototype.getPlaceholderIndex = function () {
        if (this.placeholder === null) {
            return undefined;
        }
        var /** @type {?} */ element = (this.elementRef.nativeElement);
        return Array.prototype.indexOf.call(element.children, this.placeholder);
    };
    /**
     * @return {?}
     */
    DndDropzoneDirective.prototype.cleanupDragoverState = function () {
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDragoverClass);
        if (this.placeholder !== null) {
            this.placeholder.remove();
        }
    };
    return DndDropzoneDirective;
}());
DndDropzoneDirective.decorators = [
    { type: core.Directive, args: [{
                selector: "[dndDropzone]"
            },] },
];
/**
 * @nocollapse
 */
DndDropzoneDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
DndDropzoneDirective.propDecorators = {
    'dndDropzone': [{ type: core.Input },],
    'dndEffectAllowed': [{ type: core.Input },],
    'dndAllowExternal': [{ type: core.Input },],
    'dndHorizontal': [{ type: core.Input },],
    'dndDragoverClass': [{ type: core.Input },],
    'dndDropzoneDisabledClass': [{ type: core.Input },],
    'dndDragover': [{ type: core.Output },],
    'dndDrop': [{ type: core.Output },],
    'dndPlaceholderRef': [{ type: core.ContentChild, args: [DndPlaceholderRefDirective,] },],
    'dndDisableIf': [{ type: core.Input },],
    'onDragEnter': [{ type: core.HostListener, args: ["dragenter", ["$event"],] },],
    'onDragOver': [{ type: core.HostListener, args: ["dragover", ["$event"],] },],
    'onDrop': [{ type: core.HostListener, args: ["drop", ["$event"],] },],
    'onDragLeave': [{ type: core.HostListener, args: ["dragleave", ["$event"],] },],
};
var DndHandleDirective = /** @class */ (function () {
    /**
     * @param {?} parent
     */
    function DndHandleDirective(parent) {
        this.draggable = true;
        parent.registerDragHandle(this);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DndHandleDirective.prototype.onDragEvent = function (event) {
        event._dndUsingHandle = true;
    };
    return DndHandleDirective;
}());
DndHandleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: "[dndHandle]"
            },] },
];
/**
 * @nocollapse
 */
DndHandleDirective.ctorParameters = function () { return [
    { type: DndDraggableDirective, },
]; };
DndHandleDirective.propDecorators = {
    'draggable': [{ type: core.HostBinding, args: ["attr.draggable",] },],
    'onDragEvent': [{ type: core.HostListener, args: ["dragstart", ["$event"],] }, { type: core.HostListener, args: ["dragend", ["$event"],] },],
};
var DndModule = /** @class */ (function () {
    function DndModule() {
    }
    return DndModule;
}());
DndModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
DndModule.ctorParameters = function () { return []; };

exports.DndDragImageRefDirective = DndDragImageRefDirective;
exports.DndDraggableDirective = DndDraggableDirective;
exports.DndPlaceholderRefDirective = DndPlaceholderRefDirective;
exports.DndDropzoneDirective = DndDropzoneDirective;
exports.DndHandleDirective = DndHandleDirective;
exports.DndModule = DndModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-drag-drop.umd.js.map
