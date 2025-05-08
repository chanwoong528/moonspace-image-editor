import type { Canvas } from 'fabric';

import { Canvas as FabricCanvas, FabricText } from 'fabric';

export class ImageEditor {
  private static instance: ImageEditor;
  private readonly container: HTMLElement;
  //   private canvas: HTMLCanvasElement | null = null;
  private fabricCanvas: Canvas | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
  }

  public init() {
    console.log('init');
    if (!this.fabricCanvas) {
      this.fabricCanvas = new FabricCanvas();
      if (!this.container.contains(this.fabricCanvas.getElement())) {
        console.log('append');

        this.fabricCanvas.add(new FabricText('Hello World'));
        this.fabricCanvas.renderAll();

        this.container.appendChild(this.fabricCanvas.getElement());
      }

      //   this.fabricCanvas.add(new FabricText('Hello World'));
      //   this.fabricCanvas.renderAll();
      //   this.container.appendChild(this.fabricCanvas.getElement());
    }
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
