# pptx2one

Merge multiple PowerPoint (.pptx) presentations into one — right in your browser. No uploads, no servers, no installation.

在浏览器中合并多个 PPT 演示文稿，无需上传、无需安装、开箱即用。

**Try online:** https://1asingleone.github.io/pptx2one/pptx2one.html

---

## See also / 同类工具

| 工具 | 格式 |
|------|------|
| [docx2one](https://github.com/1asingleone/docx2one) | Word 文档合并 |
| [pdf2one](https://github.com/1asingleone/pdf2one) | PDF 合并 |

## 详细介绍

### 这是什么？

pptx2one 是一个纯前端工具，让你在浏览器中直接合并多个 PowerPoint 演示文稿（.pptx）。所有文件在本地处理，**不会上传到任何服务器**，隐私安全有保障。

### 适用场景

- 收集了多个同事的 PPT 需要合并为一份完整演示文稿
- 把项目各阶段的汇报 PPT 合并成一个总览
- 将多个课件 PPT 合并为一个完整课程
- 汇总多个提案/方案 PPT 为一份投标材料

### 功能特性

- **拖拽排序** — 文件列表支持拖拽调整顺序
- **幻灯片追加** — 后续文档的所有幻灯片按顺序追加到第一个文档后
- **图片自动合并** — 各文档中的图片自动复制到输出文档，文件名冲突自动重命名
- **编号重映射** — 幻灯片 ID 和关系 ID 自动重新编号，避免冲突
- **双向兼容** — 合并后的文档可在 PowerPoint、WPS、Google Slides 中正常打开

### 用法

1. 用 Chrome、Edge 或 Firefox 打开 `pptx2one.html`
2. 拖拽 .pptx 文件到虚线区域，或点击「选择文件」按钮
3. 拖拽文件项调整合并顺序
4. 输入自定义输出文件名（可选）
5. 点击「合并并下载」即可得到合并后的 PPT

### 兼容性

- 浏览器：Chrome 60+、Edge 79+、Firefox 55+、Safari 12+
- 文件格式：仅支持 `.pptx`（Office 2007+ 格式），不支持旧版 `.ppt`
- 建议单次合并不超过 10 个演示文稿（受浏览器内存限制）

### 技术原理

`.pptx` 文件本质上是 ZIP 压缩包，内部是 XML 格式。pptx2one 在浏览器中完成全部操作：

1. 用 [JSZip](https://stuk.github.io/jszip/) 解包每个演示文稿
2. 保留第一个文档的完整结构（母版、版式、主题等）
3. 遍历后续文档的每张幻灯片：
   - 复制 `ppt/slides/slideN.xml` 并重新编号
   - 复制 `ppt/slides/_rels/slideN.xml.rels` 并更新媒体引用路径
   - 复制 `ppt/media/` 下的图片文件，文件名冲突自动加前缀
4. 更新 `ppt/presentation.xml` 的 `<p:sldIdLst>` 添加新幻灯片条目
5. 更新 `ppt/_rels/presentation.xml.rels` 添加新幻灯片关系
6. 更新 `[Content_Types].xml` 注册新幻灯片内容类型
7. 重新打包为新的 `.pptx` 并下载

整个过程完全在浏览器本地完成，文件不会离开你的设备。

---

## Usage (English)

1. Open `pptx2one.html` in Chrome/Edge/Firefox
2. Drag .pptx files onto the drop zone (or click to select)
3. Drag file items to reorder
4. Click the merge button to download

### How it works

.pptx files are ZIP archives containing XML:

1. [JSZip](https://stuk.github.io/jszip/) unpacks each presentation in-browser
2. Slide XML files (`ppt/slides/slideN.xml`) are renumbered and appended
3. Media files in `ppt/media/` are copied with deduplication
4. `presentation.xml` `<p:sldIdLst>` is updated with new slide entries
5. Slide relationships (`ppt/_rels/presentation.xml.rels`) are remapped
6. Everything is repacked into a new `.pptx` for download

### Compatibility

- Chrome 60+, Edge 79+, Firefox 55+, Safari 12+
- `.pptx` only (Office 2007+). Legacy `.ppt` is **not** supported
- Recommended: up to 10 presentations at once

## License

MIT
