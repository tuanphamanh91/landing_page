# AI Shortcut — Hướng dẫn thiết kế (Organic warm)

Tài liệu này mô tả chính xác ngôn ngữ thiết kế dùng trong 4 ảnh store, để áp dụng lại cho **app** và **landing page**. Mọi giá trị dưới đây là giá trị thật, dùng trực tiếp được.

---

## 1. Nguyên tắc cốt lõi

1. **Nền ấm, không dùng nền trắng.** Toàn bộ sản phẩm đặt trên nền kem `#f5ead8`; thẻ/panel dùng trắng-ấm `#f9f4ed`. Không bao giờ dùng `#fff` thuần hay xám lạnh.
2. **Bo tròn quá mức (over-rounded).** Container 28–72px, nút và input bo pill `999px`. Không có góc vuông, không viền hairline làm điểm nhấn.
3. **Căn trái, bất đối xứng.** Tiêu đề flush-left, nội dung sát cạnh trái, chừa khoảng trắng bên phải. Không căn giữa cả trang.
4. **Hai giọng màu.** Terracotta `#c67139` là accent chính; sage `#7a8a5e` là giọng thứ hai thật sự (dùng cho cả một section nền tối), không chỉ để highlight.
5. **Hình khối mềm làm trang trí.** Vòng tròn lớn (900–1500px) tràn ra ngoài mép, màu ramp 200. Không dùng gradient mạnh, không glow, không neon.
6. **Ít chữ, chữ to.** Một ý mỗi khối: tag → tiêu đề → 1 câu phụ. Không đoạn văn dài.

---

## 2. Màu (token)

Ground & mực
| Token | Hex | Dùng cho |
| --- | --- | --- |
| `--color-bg` | `#f5ead8` | nền trang / nền màn hình |
| `--color-surface` | `#ebddc5` | nền phụ, vùng chìm |
| `--color-neutral-100` | `#f9f4ed` | nền thẻ, panel, keycap |
| `--color-text` | `#201e1d` | chữ chính |
| `--color-neutral-800` | `#474238` | chữ phụ / body trên nền kem |
| `--color-neutral-600` | `#82796a` | chữ mờ, metadata |
| `--color-neutral-200/300` | `#eee7db` / `#dcd3c4` | thanh giả text, đường phân cách mềm |

Accent — terracotta
`100 #fff2eb` · `200 #ffe1d0` · `300 #ffc6a5` · `400 #f6a06b` · `500 #d67f48` · **base `#c67139`** · `600 #b2622d` · `700 #8c491a` · `800 #643312` · `900 #402310`

Accent 2 — sage
`100 #f0fae1` · `200 #e1eecc` · `300 #ccdbb2` · `400 #aebf92` · `500 #8fa073` · **base `#7a8a5e`** · `600 #728157` · `700 #56633f` · `800 #3d472b` · `900 #272e1b`

Quy tắc dùng ramp
- 100–300: nền tint, hover, highlight chữ, hình khối trang trí.
- base/500: fill nút chính, icon, vòng tròn nhấn.
- 700–900: **chữ màu accent** (accent base không đủ tương phản cho chữ nhỏ), nền tối của section, trạng thái pressed.
- Section nền tối = `--color-accent-2-800` (`#3d472b`), chữ trên đó dùng `accent-2-200`, tag dùng `accent-2-600`.

Bóng (đừng tự nghĩ box-shadow mới)
```
--shadow-sm: 0 1px 2px  rgba(46,43,37,.14)
--shadow-md: 0 3px 10px rgba(46,43,37,.16)
--shadow-lg: 0 12px 32px rgba(46,43,37,.22)
```

---

## 3. Chữ

- **Body:** Figtree (`--font-body`). Weight 400/600/700.
- **Heading:** Caprasimo là display gốc của hệ, **nhưng thiếu dấu tiếng Việt** → với mọi UI có tiếng Việt dùng **Baloo 2** (600–800), cùng tinh thần tròn-dày:
  `font-family: "Baloo 2", "Figtree", system-ui, sans-serif`
  Bản chỉ có tiếng Anh có thể giữ Caprasimo.
- Tiêu đề: `line-height: .93–.95`, `letter-spacing: -1…-2px`, viết hoa chữ đầu (không ALL CAPS cho tiêu đề dài).
- Tag/eyebrow: ALL CAPS, `letter-spacing: 2px`, cỡ nhỏ nhất trong khối.
- Luôn thêm `text-wrap: pretty` cho tiêu đề và câu phụ.

Thang cỡ chữ đề xuất
| Vai trò | Landing (desktop) | App UI | Ảnh store 2880×1800 |
| --- | --- | --- | --- |
| Hero / H1 | 72–96px | — | 180–196px |
| H2 section | 48–64px | 28–32px | 180px |
| Câu phụ / lead | 24–28px | 17–18px | 70–74px |
| Body | 17–18px | 15–16px | 54–60px |
| Tag / caption | 13–14px | 12–13px | 38–44px |

Cỡ nhỏ nhất: 13px trên web, 15px trong app, 24px trên ảnh store (thực tế nên ≥38px).

---

## 4. Bố cục & khoảng cách

- Spacing scale: 4.4 / 8.8 / 13.2 / 17.6 / 26.4 / 35.2px (nhân bội cho layout lớn: 44 / 56 / 96 / 120 / 180).
- Bố cục 2 cột bất đối xứng `1.05fr 1fr`, gap 96–160px (landing: 48–80px).
- Padding section landing: 96–120px dọc, 64–80px ngang; ảnh store: 180px.
- Khối nội dung dọc: `display:flex; flex-direction:column; gap:` — luôn dùng `gap`, không dùng margin lẻ.
- Bán kính: container lớn 48–72px, thẻ 28–48px, chip/keycap 18–22px, nút & input `999px`.
- Hình khối trang trí: `border-radius:999px`, đặt `position:absolute` tràn mép (âm 260–420px), màu `accent-200` hoặc `accent-2-200`, luôn nằm dưới nội dung.

---

## 5. Thành phần

**Tag / eyebrow**
```css
.tag { border-radius:999px; padding:.5em 1.1em; font-size:.85em; letter-spacing:2px;
       background:var(--color-accent-200); color:var(--color-accent-700); }
.tag-outline { background:transparent; box-shadow:inset 0 0 0 2px var(--color-neutral-300);
               color:var(--color-neutral-700); }
```
Dùng `.tag-outline` cho nền tảng (Windows / macOS / iOS).

**Nút**
- Primary: fill `--color-accent`, chữ `#f9f4ed`, pill, không viền. Hover `accent-600`, pressed `accent-700`.
- Secondary: nền `accent-100`, chữ `accent-700`.
- Ghost: chỉ chữ `accent-700`, hover nền `accent-100`.
- Focus bàn phím: `outline: 2px solid var(--color-accent); outline-offset: 2px` — không để ring xanh mặc định.

**Thẻ (card)**
Nền `neutral-100`, radius 48px (web: 28px), padding 56–72px (web: 24–32px), `--shadow-md`. Bên trong: kicker ALL CAPS `accent-700` + title đậm. Tối đa 1 dòng ý.

**Keycap (đặc trưng của brand)**
```css
kbd { font-family:var(--font-body); background:var(--color-neutral-100);
      border-radius:20px; padding:.35em .7em; box-shadow:var(--shadow-sm); color:var(--color-text); }
```
Đi theo cặp/ba (`⌘` `⇧` `D`), xếp bằng flex gap 14–18px. Đây là hình ảnh nhận diện chính của sản phẩm — dùng lại ở hero, feature, onboarding.

**Demo "trước → sau"** (mẫu ảnh 02)
Grid `1fr auto 1fr`: bong bóng nguồn nền `neutral-200`, giữa là vòng tròn accent 120px chứa `→` + keycap, bên phải là kết quả nền `--color-bg` + `--shadow-md`. Dùng cho landing để giải thích giá trị trong 1 giây.

**Mô phỏng "app chạy nền"** (mẫu ảnh 01)
Panel `neutral-100`, 3 chấm cửa sổ (1 chấm `accent-300`), vài thanh xám giả text (`height:26px; radius:999px; background:neutral-200`), một câu thật với phần bôi đen `background:accent-200; box-shadow:0 0 0 6px accent-300`, và popup kết quả nền `--color-bg` + keycap. Không vẽ toàn bộ UI app — app không có UI.

**Ảnh chụp thật**: luôn bọc `.washed` (giảm bão hòa, giảm tương phản) + bo tròn ≥28px.

**Icon**: Lucide, `stroke-width: 2.75`.

---

## 6. Giọng viết (copy)

- Câu ngắn, chủ ngữ là người dùng, nói lợi ích trước tính năng: "Bôi đen chữ, nhấn phím tắt. Không copy–paste."
- Mỗi màn hình/section = **một** thông điệp. Tối đa 1 câu phụ dưới tiêu đề.
- Nói vào pain point: ngoại ngữ chưa tốt, tài liệu dài, đổi cửa sổ liên tục, viết lại email nhiều lần.
- Không buzzword ("AI-powered platform", "cutting-edge"), không dấu chấm than, không emoji.
- Tiếng Việt là bản chính; bản EN dịch tự nhiên, không dịch từng chữ.

---

## 7. Bốn thông điệp đang dùng (giữ nhất quán trên app + landing)

1. **Dịch mọi thứ bằng một phím tắt** — bôi đen là xong, không copy–paste.
2. **Ngoại ngữ chưa tốt vẫn tự tin trao đổi** — email/chat với khách nước ngoài, đúng văn phong và thuật ngữ ngành.
3. **Chạy trong mọi ứng dụng bạn dùng** — trình duyệt, Office/PDF/Mail, Slack/Zalo/Teams; một phím tắt duy nhất.
4. **Phím tắt làm đúng việc của bạn** — tự tạo prompt, gán key, cài một lần dùng mãi.

---

## 8. Áp dụng cho app (desktop & iOS)

- Popup kết quả: nền `--color-bg`, radius 28px, `--shadow-lg`, padding 20–24px, tiêu đề nhỏ `AI SHORTCUT` màu `accent-700` + keycap ở góc phải.
- Danh sách prompt: mỗi dòng là thẻ radius 20px nền `neutral-100`, chữ tên prompt weight 600, phím tắt hiển thị bằng keycap ở cuối dòng.
- Cài đặt: nhóm theo section có tiêu đề ALL CAPS `neutral-600`; input pill, viền `neutral-300`, focus ring accent.
- Bàn phím iOS / thanh công cụ: nền `surface`, các phím hành động là pill `accent-100` chữ `accent-700`, phím chính fill accent.
- Trạng thái: thành công `accent-2-700`, lỗi dùng `accent-700` (không đưa màu đỏ lạ vào hệ).
- Vùng bấm ≥ 44px.

## 9. Áp dụng cho landing page

Thứ tự section: hero (tiêu đề + 1 câu + nút store + demo keycap) → 4 thông điệp trên, xen kẽ nền kem / một section nền `accent-2-800` → 3 bước sử dụng (vòng tròn số accent) → dải nền tảng + CTA tải về → footer nền `neutral-900` chữ `neutral-200`.
Chỉ **một** section nền tối trong toàn trang. Mỗi section một hình khối tròn trang trí, không nhiều hơn.

---

## 10. Checklist trước khi ship

- [ ] Không có `#ffffff`, không xám lạnh, không gradient nhiều màu.
- [ ] Mọi màu/bóng/bán kính lấy từ token ở trên.
- [ ] Tiêu đề tiếng Việt dùng Baloo 2 và hiển thị đủ dấu.
- [ ] Chữ màu accent luôn ở step 700+.
- [ ] Mỗi khối chỉ một ý, không quá 1 câu phụ.
- [ ] Nút/input bo pill; có hover, pressed, focus-visible accent.
- [ ] Ảnh thật đã qua `.washed` và bo tròn.
