import { Canvas } from 'fabric';
export declare class ImageEditor {
    private readonly container;
    private fabricCanvas;
    constructor(container: HTMLElement);
    init(): void;
    getCanvas(): Canvas | null;
    destroy(): void;
}
