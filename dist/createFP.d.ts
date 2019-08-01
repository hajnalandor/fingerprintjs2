import { FPInterface } from './fingerprint';
import 'clientjs';
export default class Fingerprint {
    private client;
    fingerprintId: string;
    fp: FPInterface;
    constructor();
    create(): FPInterface;
    generateFingerprint(): void;
    getCustomFingerPr(fp2components: any[]): void;
    buildfp(fp2components: any[]): void;
    clientJsFingerprint(): void;
    fingerPrint2jsFingerprint(fp2comp: any[]): void;
    setAvailableScreenResolutin(data: any): void;
    setScreenResolution(data: any): void;
    setCanvas(data: any): void;
    setPlugins(data: any): void;
    setWebgl(data: any): void;
    setClientJsComponents(): void;
    setMobileInformations(): void;
    setBrowserInformation(): void;
    setDeviceInformation(): void;
    setFlashAndJava(): void;
}
