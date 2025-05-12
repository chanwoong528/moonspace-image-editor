import * as fabric from 'fabric';
export declare class FabricJSCanvas {
    private fabricCanvas;
    private container;
    private width;
    private height;
    constructor(width: number, height: number, container: HTMLElement);
    initializeFabricCanvas(): void;
    initEvents(): void;
    getCanvas(): fabric.Canvas | null;
    destroy(): void;
}
