# pptx2one

Merge multiple PowerPoint (.pptx) presentations into one — right in your browser. No uploads, no servers, no installation.

合并多个 PPT 演示文稿为一个文件 — 纯浏览器端完成，不上传、不安装。

**Try online:** https://1asingleone.github.io/pptx2one/pptx2one.html

---

## Usage

1. Open `pptx2one.html` in Chrome/Edge/Firefox
2. Drag .pptx files onto the drop zone (or click to select)
3. Drag file items to reorder
4. Click the merge button to download

## How it works

.pptx files are ZIP archives containing XML:

1. [JSZip](https://stuk.github.io/jszip/) unpacks each presentation in-browser
2. Slide XML files (`ppt/slides/slideN.xml`) are renumbered and appended
3. Media files in `ppt/media/` are copied with deduplication
4. `presentation.xml` `<p:sldIdLst>` is updated with new slide entries
5. Slide relationships (`ppt/_rels/presentation.xml.rels`) are remapped
6. Everything is repacked into a new `.pptx` for download

## Compatibility

- Chrome 60+, Edge 79+, Firefox 55+, Safari 12+
- `.pptx` only (Office 2007+). Legacy `.ppt` is **not** supported
- Recommended: up to 10 presentations at once

## License

MIT
