declare module 'dmn-js/lib/Modeler' {
  export default class DmnModeler {
    constructor(options?: any);
    importXML(xml: string): Promise<{ warnings: any[] }>;
    saveXML(options?: any): Promise<{ xml: string }>;
    destroy(): void;
    // add more APIs here if you use them
  }
}