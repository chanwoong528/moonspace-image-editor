import { StaticCanvas } from 'fabric';
export declare class ImageEditor {
    private readonly container;
    private fabricCanvas;
    constructor(container: HTMLElement);
    init(): void;
    getCanvas(): StaticCanvas<import('fabric').StaticCanvasEvents> | null;
    destroy(): void;
}
