# Capital Jolt Global（CJG）靜態網站

純 HTML + CSS + JavaScript，可直接部署到 GitHub Pages。不需要 npm、框架、資料庫、建置服務或付費外掛。

## 內容與導覽

主導覽共 6 項：首頁、關於 CJG、資質與安全、公司文章、常見問題、聯絡我們。

網站共有 16 個完整 HTML 頁面：6 個主導覽對應頁、研究與布局延伸頁、6 篇獨立公司文章、企業資料與活動規劃、隱私權與使用說明，以及 404 頁面。404 設為 noindex，其餘 15 頁列入 sitemap。研究與布局保留在首頁及頁尾入口。

網站使用台灣繁體中文、統一的暖白／深墨綠／薄荷綠視覺。英文僅保留品牌名稱、技術縮寫、社群品牌與原始地址等專有名稱。

## 上傳 GitHub Pages

1. 解壓縮後，開啟 `CapitalJoltGlobal` 資料夾。
2. 將這個資料夾「裡面的所有檔案及子資料夾」上傳到 `CapitalJoltGlobal.github.io` 儲存庫根目錄。請讓 `index.html` 直接位於儲存庫根目錄，不要在外面再包一層同名資料夾。
3. 保留 `assets`、`articles`、`content`、`originals` 等子資料夾的結構。
4. 依下一節將圖片上傳至 `assets/images/`。
5. 在 GitHub 儲存庫的 Settings → Pages 設定 Deploy from a branch，選擇 main 分支及 `/ (root)`，儲存。若儲存庫預設分支名稱不同，選擇實際使用的分支。
6. 發布完成後，網站使用 `https://CapitalJoltGlobal.github.io/`。此交付沒有登入你的 GitHub，也沒有替你發布；上傳後才會在你的網域生效。
7. 此 GitHub Pages 網址不需要另設 CNAME，也不需要把網域加入 robots 封鎖規則。
8. `.nojekyll` 已附上。若使用的上傳方式沒有選到此檔，請在儲存庫根目錄建立同名空白檔案。

直接在電腦開啟 index.html 即可閱讀。由於瀏覽器安全限制，剪貼簿功能以 HTTPS 網站上的效果為準；複製失敗時，聯絡表單會顯示可手動複製的文字。

## 圖片：原檔名與放置位置

這次實際收到的是圖片清單截圖，沒有收到 19 張獨立圖片原檔。因此，壓縮包不會用截圖裁切或其他照片冒充原圖。所有圖片位置與原檔名已寫好；請把下表檔案上傳到 `assets/images/`，即可自動顯示。缺圖時會以品牌色幾何備援維持版面。

圖片使用自然寬高比例。海報完整顯示、不裁掉文字；照片不做固定比例裁切。因未取得原圖尺寸，沒有捏造圖片的像素大小與寬高比。上傳後可依實際原檔再作局部留白微調。

| 檔名 | 主要用途 |
| --- | --- |
| 1.png | 關於 CJG：企業入口 |
| 2.png | 首頁：企業接待空間 |
| 3.png | 首頁：交流與會客空間 |
| 4.png | 研究與布局：研究協作空間 |
| 5.png | 研究與布局：會議空間 |
| 6.png | 企業資料頁與 PK 賽文章 |
| 7.png | 企業資料頁：會議與交流空間 |
| 8.png | 關於 CJG：企業公共區域 |
| 9.png | 聯絡我們：玻璃門品牌形象 |
| 10.png | 聯絡我們：品牌辦公用品 |
| 11.png | 首頁：企業品牌展示 |
| 12.png | 研究理念文章與文章卡片 |
| 13.png | AI／半導體文章與文章卡片 |
| 14.png | 台灣與全球市場文章與文章卡片 |
| 15.png | 多元資產配置文章與文章卡片 |
| 16.png | 一級市場文章與文章卡片 |
| CJG.jpeg | 關於 CJG 品牌展示、全站社群分享圖 |
| LOGO.png | 全站頁首與頁尾標誌 |
| LOGO-1.png | 全站 favicon 與 Apple touch icon |

注意大小寫及副檔名：`CJG.jpeg` 不是 `CJG.jpg`；`LOGO-1.png` 的連字號不可省略。不要將 `image(20261126-021639).png` 當成網站照片上傳。

## 六篇文章與字數

以下只計算正文段落的中文字數，排除標題、目錄、SEO、導覽、標點、數字與英文字母。每篇正文均超過 1,000 個中文字，並使用獨立 HTML，關閉 JavaScript 仍能讀到正文。

| 文章 | 檔案 | 正文中文字數 |
| --- | --- | ---: |
| Capital Jolt Global：把全球視野轉化為有脈絡的投資研究 | articles/research-philosophy.html | 1,188 |
| Capital Jolt Global 解析 AI 與半導體：成長題材之外，還要看哪些企業訊號？ | articles/ai-semiconductor.html | 1,151 |
| Capital Jolt Global 為什麼關注台灣？從科技供應鏈連結美國與亞洲市場 | articles/taiwan-global.html | 1,163 |
| Capital Jolt Global 談多元資產配置：從資金用途、時間與風險建立研究框架 | articles/multi-asset-risk.html | 1,168 |
| Capital Jolt Global 介紹 Pre-IPO、IPO 與 IEO：研究方向、參與條件與權利差異 | articles/primary-markets.html | 1,147 |
| Capital Jolt Global 百億基金 PK 賽：從投資理念、風險控管到人才交流的規劃 | articles/strategy-exchange.html | 1,172 |

## FAQ：精選 40 題，完整保留回答

依最後確認的 30–40 題需求，使用原檔中的 40 題，沒有另外編造或縮短所選題目的回答。前台連續編號 01–40；`content/faq-selected.json` 保留原檔題號，方便核對。

| 主題 | 題數 | 原檔題號 |
| --- | ---: | --- |
| 公司與品牌 | 8 | 31、32、33、34、35、36、37、38 |
| 背景與資格 | 10 | 1、3、5、8、11、13、17、21、24、25 |
| 全球市場 | 8 | 46、49、51、53、54、56、59、60 |
| 研究與風險 | 8 | 61、63、65、67、71、72、73、85 |
| 計畫與閱讀 | 6 | 15、16、18、19、88、90 |

可搜尋問題與回答全文，分類及搜尋可組合使用，也能展開目前顯示的問題或全部收合。未使用原檔不完整的第 96 題，不需要補齊後才能上線。

## 替換官網、電子郵件與社群連結

開啟 `assets/js/config.js`，把對應的 `null` 改為含引號的正式網址或電子郵件：

```js
window.CJG_CONFIG = {
  website: 'https://你的正式官網網址/',
  email: '你的正式信箱@你的網域',
  socials: {
    Facebook: 'https://你的正式連結/',
    Instagram: null,
    X: null,
    LinkedIn: null,
    YouTube: null,
    Quora: null
  },
  address: '1 Vanderbilt Avenue, New York, NY 10017, USA',
  map: 'https://www.google.com/maps/search/?api=1&query=1%20Vanderbilt%20Avenue%2C%20New%20York%2C%20NY%2010017%2C%20USA'
};
```

電子郵件欄只填地址，不用加入 `mailto:`。尚未取得正式網址的項目維持 `null`，點擊會顯示待更新提示。沒有導向同名帳號或假冒真實社群。地址已可直接開啟 Google 地圖。

聯絡表單目前提供整理與複製內容，不會真的寄信，也不會把資料存入後端。待正式連結齊備時，還需同步更新頁尾及聯絡頁「尚待更新」的文字；日後可直接交由我統一替換。若要加入寄信服務，須另外設定真實的表單接收端。

## SEO

每頁都有獨立 title、description、canonical、robots、繁中語言標示、台灣地區 Open Graph、Twitter 分享資訊及 JSON-LD。SEO 使用完整名稱 `Capital Jolt Global（CJG）`。

- 企業、網站與麵包屑結構化資料：全站。
- Article：六篇獨立文章，含標題、作者、正文、日期與圖片。
- FAQPage：只包含頁面實際出現的 40 組問答。
- sitemap.xml：15 個可索引網址，首頁採根網址。
- robots.txt：允許抓取，並標示 sitemap。
- 404.html：noindex，並保留導覽及根路徑資源。
- OG 分享圖依你的圖片清單使用 `assets/images/CJG.jpeg`，上傳原圖後才會顯示。

文章與 FAQ 直接存在 HTML 中，不依賴 JavaScript 載入。結構化資料不代表搜尋引擎一定提供特殊搜尋外觀，也不保證排名。若修改文章或 FAQ，請一併更新同頁 JSON-LD。若更換網域，需要同步更新所有 canonical、OG、JSON-LD、sitemap 與 robots。

## 互動與無障礙

包含捲動淡入、緩慢軌道動畫、浮動視覺、卡片懸浮、按鈕箭頭動效、固定導覽、手機選單、閱讀進度、文章目錄、連結複製、列印、回到頂端、FAQ 搜尋與分類。系統啟用「減少動態效果」時，會停止動畫及平滑捲動。支援鍵盤焦點、跳至主內容、欄位標籤與狀態回饋。

## 原始資料與後續維護

`originals/` 保留你上傳的五份 Word 檔及原始 FAQ，方便對照。`company-materials.html` 收錄公司文件完整內容及原始表格；中文人名「郑」與「納斯達克」在前台統一為「鄭」與「那斯達克」。原始檔不修改。

原始企業文件中的資產規模、SEC 申報、上市計畫、外部機構活動、獎勵及第三方監督等敘述，保留為企業提供的內容，未做獨立查核。企業計畫與已完成事項在整理文章中分開說明。

`content/articles.json` 與 `content/faq-selected.json` 是方便維護的內容備份，網頁不會自動讀取這兩個 JSON。直接修改 HTML 才會立即改變前台，並請保持 JSON-LD 與備份一致。全站共用的視覺與互動分別在 `assets/css/style.css`、`assets/js/main.js`。

`VALIDATION.md` 記錄本次檢查範圍與結果。

## 新增「資質與安全」導覽與證書頁

主導覽的「研究與布局」已替換為「資質與安全」，對應 `trust.html`。研究頁仍保留，首頁與全站頁尾都有入口。原本六篇文章與四十題 FAQ 不變。

證書頁使用與全站相同的配色、字體、卡片、微互動及響應式設計，包含四類文件展示：公司登記、業務資格與許可、資訊安全與隱私、其他認證與佐證。每張卡片提供發證單位、文件編號、適用範圍、核發日期及有效期限。點擊卡片可開啟原件檢視，支援按 Escape、關閉按鈕及點擊遮罩關閉，關閉後焦點會回到原按鈕。

本次沒有收到證書原件，因此不新增不存在的證書、編號、認證標章或「已驗證」標示。正式資料提供後，編輯 `assets/js/certificates.js` 的對應項目，例如：

```js
{
  id: 'registration',
  title: '公司登記文件',
  image: 'assets/images/certificates/registration.png',
  file: 'assets/documents/registration.pdf',
  officialUrl: null,
  issuer: '依原件填寫發證或登記單位',
  number: '依原件填寫文件編號',
  scope: '依原件填寫適用範圍',
  issuedAt: '依原件填寫日期',
  expiresAt: '依原件填寫；無期限時請明確說明'
}
```

`image` 用於完整比例的縮圖及放大檢視，不會裁掉直式文件。`file` 可填 PDF 或完整原件；只提供 PDF 時，視窗會提供開啟原件入口。`officialUrl` 填正式查證網址，沒有時保持 null。未提供的欄位維持 null，前台顯示「待提供」。上傳檔案後顯示「文件已提供」，不會自動宣稱主管機關認可或查核完成。此證書設定與既有企業圖片分開管理，原 19 張圖片的檔名不變。

正式文件補齊後，也應將 trust.html 的待補說明與靜態欄位同步改為實際資訊，供關閉 JavaScript 的訪客閱讀。
