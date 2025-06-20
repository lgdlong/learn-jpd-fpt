declare module "kuroshiro" {
  interface KuroshiroOptions {
    to?: "hiragana" | "katakana" | "romaji";
    mode?: "normal" | "spaced" | "okurigana" | "furigana";
    romajiSystem?: "nippon" | "passport" | "hepburn";
  }
  export default class Kuroshiro {
    constructor();
    init(analyzer: object): Promise<void>;
    convert(text: string, options?: KuroshiroOptions): Promise<string>;
  }
}

declare module "kuroshiro-analyzer-kuromoji" {
  export default class KuromojiAnalyzer {
    constructor(dictPath?: string);
  }
}
