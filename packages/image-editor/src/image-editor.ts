import type { StaticCanvas } from 'fabric';

import { StaticCanvas as FabricStaticCanvas, FabricText } from 'fabric';

export class ImageEditor {
  private readonly container: HTMLElement;
  //   private canvas: HTMLCanvasElement | null = null;
  private fabricCanvas: StaticCanvas | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public init() {
    this.fabricCanvas = new FabricStaticCanvas();
    this.fabricCanvas.add(new FabricText('Hello World'));
    this.fabricCanvas.renderAll();
    this.container.appendChild(this.fabricCanvas.getElement());
  }

  //   public initCanvas() {
  //     this.canvas = document.createElement('canvas');
  //     this.container.appendChild(this.canvas);
  //     this.canvas.width = 100;
  //     this.canvas.height = 100;
  //     this.canvas.style.border = '1px solid #000';
  //     this.canvas.style.backgroundColor = 'red';
  //   }

  public getCanvas() {
    return this.fabricCanvas;
  }

  public destroy() {
    this.fabricCanvas?.destroy();
  }
}
