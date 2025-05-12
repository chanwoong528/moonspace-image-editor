import * as fabric from 'fabric';

export class ImageEditor {
  //   private static instance: ImageEditor;

  private fabricCanvas: fabric.Canvas | null = null;

  constructor(canvasElement: HTMLElement) {
    if (
      !canvasElement ||
      !(canvasElement instanceof HTMLCanvasElement) ||
      canvasElement instanceof fabric.Canvas
    ) {
      throw new Error('canvasElement is required');
    }
    this.fabricCanvas = new fabric.Canvas(canvasElement);
    // this.fabricCanvas.setDimensions({
    //   width: canvasElement.width,
    //   height: canvasElement.height,
    // });
    // this.fabricCanvas.renderAll();
  }

  public init() {}

  public destroy() {
    this.fabricCanvas?.destroy();
  }
}
