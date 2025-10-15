import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import DmnModeler from 'dmn-js/lib/Modeler';   // 👈 use Modeler, not default
import { saveAs } from 'file-saver';
import { BLANK_DMN_13 } from './blank-dmn';
import { DmnUploadService } from './dmn-upload.service';

@Component({
  selector: 'app-dmn-editor',
  templateUrl: './dmn-editor.component.html',
  styleUrls: ['./dmn-editor.component.scss']
})
export class DmnEditorComponent implements AfterViewInit, OnDestroy {

  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLDivElement>;
  private modeler!: DmnModeler;
  status = 'ready';

  constructor(private uploader: DmnUploadService) {}

  async ngAfterViewInit() {
    this.modeler = new DmnModeler({
      container: this.canvasRef.nativeElement,
      keyboard: { bindTo: document }
    });

    setTimeout(() => this.newDiagram());  // avoid ExpressionChanged error
  }

  ngOnDestroy(): void {
    if (this.modeler && (this.modeler as any).destroy) {
      (this.modeler as any).destroy();
    }
  }

  async newDiagram() {
    this.status = 'creating…';
    await this.modeler.importXML(BLANK_DMN_13);
    this.status = 'diagram ready';
  }

  async openFile(evt: Event) {
    const input = evt.target as HTMLInputElement;
    if (!input.files?.length) return;
    const file = input.files[0];
    const xml = await file.text();

    try {
      this.status = `opening ${file.name}…`;
      const { warnings } = await this.modeler.importXML(xml);
      if (warnings?.length) console.warn('import warnings', warnings);
      this.status = `opened ${file.name}`;
    } catch (err) {
      console.error(err);
      this.status = 'failed to open file';
    } finally {
      input.value = '';
    }
  }

  async downloadXML() {
    try {
      this.status = 'exporting…';
      const { xml } = await (this.modeler as any).saveXML({ format: true });
      const blob = new Blob([xml], { type: 'application/xml' });
      saveAs(blob, 'diagram.dmn');
      this.status = 'downloaded diagram.dmn';
    } catch (err) {
      console.error(err);
      this.status = 'export failed';
    }
  }

  async uploadXML() {
    try {
      this.status = 'preparing upload…';
      const { xml } = await (this.modeler as any).saveXML({ format: true });
      await this.uploader.upload(xml, 'diagram.dmn');
      this.status = 'uploaded successfully';
    } catch (err) {
      console.error(err);
      this.status = 'upload failed';
    }
  }
}