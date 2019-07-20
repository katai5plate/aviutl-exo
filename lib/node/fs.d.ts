import { ReadableFileExt } from './type';
export declare const load: (fileName: string, ext: ReadableFileExt, encoding?: string) => Promise<string>;
export declare const save: (fileName: string, ext: ReadableFileExt, data: string, encoding?: string | undefined) => Promise<void>;
interface ExoIOConfig {
    ext: string;
    encoding?: string;
}
export declare const loadEXO: (fileName: string, config?: ExoIOConfig) => Promise<string>;
export declare const saveEXO: (fileName: string, data: string, config?: ExoIOConfig) => Promise<void>;
export {};
