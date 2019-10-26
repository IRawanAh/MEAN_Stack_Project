import { AfterViewInit, ElementRef, EventEmitter, Renderer2 } from "@angular/core";
import { DndEvent } from "./dnd-utils";
import { DropEffect, EffectAllowed } from "./dnd-types";
export interface DndDropEvent {
    event: DragEvent;
    dropEffect: DropEffect;
    isExternal: boolean;
    data?: any;
    index?: number;
    type?: any;
}
export declare class DndPlaceholderRefDirective {
    readonly elementRef: ElementRef;
    constructor(elementRef: ElementRef);
}
export declare class DndDropzoneDirective implements AfterViewInit {
    private elementRef;
    private renderer;
    dndDropzone?: string[];
    dndEffectAllowed: EffectAllowed;
    dndAllowExternal: boolean;
    dndHorizontal: boolean;
    dndDragoverClass: string;
    dndDropzoneDisabledClass: string;
    readonly dndDragover: EventEmitter<DragEvent>;
    readonly dndDrop: EventEmitter<DndDropEvent>;
    private readonly dndPlaceholderRef?;
    private placeholder;
    private disabled;
    dndDisableIf: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    onDragEnter(event: DndEvent): void;
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    onDragLeave(event: DndEvent): void;
    private tryGetPlaceholder();
    private isDropAllowed(type?);
    private checkAndUpdatePlaceholderPosition(event);
    private getPlaceholderIndex();
    private cleanupDragoverState();
}
