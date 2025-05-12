import * as fabric from 'fabric';

export class FabricJSCanvas {
  private fabricCanvas: fabric.Canvas | null = null;
  private container: HTMLElement;
  private width: number;
  private height: number;
  constructor(width: number, height: number, container: HTMLElement) {
    this.container = container;
    this.width = width;
    this.height = height;
  }

  public initializeFabricCanvas() {
    if (!this.container.contains(document.querySelector('canvas'))) {
      const canvas = document.createElement('canvas');
      canvas.id = 'fabric-canvas';
      this.container.appendChild(canvas);
      this.fabricCanvas = new fabric.Canvas(canvas);
      this.fabricCanvas.setDimensions({
        width: this.width,
        height: this.height,
      });
      const add = () => {
        const red = new fabric.Rect({
          top: Math.random() * (this.height - 25),
          left: Math.random() * (this.width - 40),
          width: 80,
          height: 50,
          fill: 'red',
        });
        const blue = new fabric.Rect({
          top: Math.random() * (this.height - 35),
          left: Math.random() * (this.width - 25),
          width: 50,
          height: 70,
          fill: 'blue',
        });
        const green = new fabric.Rect({
          top: Math.random() * (this.height - 30),
          left: Math.random() * (this.width - 30),
          width: 60,
          height: 60,
          fill: 'green',
        });
        return [red, blue, green];
      };
      this.fabricCanvas.add(...add());
      this.fabricCanvas.setActiveObject(this.fabricCanvas.getObjects()[0]);
      this.fabricCanvas.renderAll();
    }

    // this.initEvents();
  }

  public initEvents() {
    this.fabricCanvas?.on('selection:created', (e) => {
      console.log('selection:created', e);
    });
    this.fabricCanvas?.on('selection:updated', (e) => {
      console.log('selection:updated', e);
    });
    this.fabricCanvas?.on('selection:cleared', (e) => {
      console.log('selection:cleared', e);
    });
  }

  public getCanvas() {
    return this.fabricCanvas;
  }

  public destroy() {
    this.fabricCanvas?.destroy();
  }
}
