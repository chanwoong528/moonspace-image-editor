import { Canvas } from 'fabric';
export declare class ImageEditor {
    private static instance;
    private readonly container;
    private fabricCanvas;
    constructor(container: HTMLElement);
    init(): void;
    getCanvas(): Canvas | null;
    destroy(): void;
}
