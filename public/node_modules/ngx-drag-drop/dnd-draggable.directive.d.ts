import { ElementRef, EventEmitter, Renderer2 } from "@angular/core";
import { DndDragImageOffsetFunction, DndEvent } from "./dnd-utils";
import { DndHandleDirective } from "./dnd-handle.directive";
import { EffectAllowed } from "./dnd-types";
export declare class DndDragImageRefDirective {
    constructor(parent: DndDraggableDirective, elementRef: ElementRef);
}
export declare class DndDraggableDirective {
    private elementRef;
    private renderer;
    dndDraggable: any;
    dndEffectAllowed: EffectAllowed;
    dndType?: string;
    dndDraggingClass: string;
    dndDraggingSourceClass: string;
    dndDraggableDisabledClass: string;
    dndDragImageOffsetFunction: DndDragImageOffsetFunction;
    readonly dndStart: EventEmitter<DragEvent>;
    readonly dndEnd: EventEmitter<DragEvent>;
    readonly dndMoved: EventEmitter<DragEvent>;
    readonly dndCopied: EventEmitter<DragEvent>;
    readonly dndLinked: EventEmitter<DragEvent>;
    readonly dndCanceled: EventEmitter<DragEvent>;
    draggable: boolean;
    private dndHandle?;
    private dndDragImageElementRef?;
    private dragImage;
    dndDisableIf: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    onDragStart(event: DndEvent): boolean;
    onDragEnd(event: DragEvent): void;
    registerDragHandle(handle: DndHandleDirective | undefined): void;
    registerDragImage(elementRef: ElementRef | undefined): void;
    private determineDragImage();
}
