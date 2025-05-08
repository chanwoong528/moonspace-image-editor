export declare class ImageEditor {
    private readonly container;
    private canvas;
    constructor(container: HTMLElement);
    initCanvas(): void;
    getCanvas(): HTMLCanvasElement | null;
}
