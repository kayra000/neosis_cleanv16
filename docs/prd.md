# Neosis Defense Autonomous Vehicle Company Landing Page 需求文档

## 1. 应用概述

### 1.1 应用名称
Neosis Defense Autonomous Vehicle Showcase

### 1.2 应用描述
一个专业的深色主题多页面网站,采用 bento grid 布局设计,用于展示 Neosis 国防工业自动驾驶车辆及防务解决方案。网站包含主落地页及多个功能页面,重点呈现公司服务范围、产品应用场景、系统组件、技术规格、购买选项、客户评价和联系信息。

## 2. 核心内容

### 2.1 主题与视觉风格
- 深色主题设计,纯黑色背景 #000000
- 强调色:#FAFF00(特殊黄色调,用于发光效果和激活状态)
- 次要强调色:#C5AE79 和 #4A4E54
- Bento grid 布局结构用于内容组织
- 专业且现代的美学风格,灵感来自 Overland AI 网站
- 高对比度、战术风格设计
- 字体:现代工业风无衬线字体(如 Inter 或 Roboto)

### 2.2 页面结构

网站包含以下页面:
1. 主落地页(Ana Sayfa)
2. 车辆展示页(Araçlarımız Sayfası)
3. 组件展示页(Bileşenler Sayfası)
4. 关于我们页(Hakkımızda Sayfası)
5. 热成像目标页(Termal Hedefler Sayfası)
6. 服务页(Hizmetlerimiz Sayfası)
7. 更多信息页(Daha Fazlası Sayfası)

### 2.3 主落地页(Ana Sayfa)内容

#### 顶部导航栏
- 公司名称 Neosis 显示在右上角
- 固定/粘性导航栏,向下滚动时保持可见
- 导航菜单包含链接:
  - Termal Hedefler(点击跳转到热成像目标页)
  - Hizmetlerimiz(点击跳转到服务页)
  - Daha Fazlası(点击跳转到更多信息页)
  - Hakkımızda(点击跳转到关于我们页)
  - İletişim(点击滚动到当前页面的页脚联系区域)

#### 第一部分:视频介绍区域(Video Introduction Section)

**布局与视觉:**
- 全屏高度显示
- 背景:纯黑 #000000
- 视频背景或动态视觉元素

**内容:**
- 顶部品牌标识:⬢ NEOSIS
- 公司简介文本(简短几句话):
  - 说明 Neosis 在国防工业领域提供的服务范围
  - 强调从交钥匙自动驾驶车辆到仅套件解决方案
  - 提及服务领域包括自动驾驶车辆、热成像目标系统等多个防务领域
  - 目标:在页面首次加载时为客户建立对公司的初步认知
  - 文本保持简洁,不过度冗长

#### 第二部分:应用场景展示区域(Kullanım Alanları Section)

**目的:**
- 向客户展示自动驾驶车辆的实际应用场景
- 为客户提供购买后的使用灵感和想法
- 帮助客户根据自身需求了解产品的多样化应用

**内容:**
- 展示多个应用场景示例
- 每个场景包含简短描述和视觉呈现(配图支持)
- 突出产品在不同国防和战术环境中的适用性
- 使用图片增强视觉效果和说服力

#### 第三部分:购买选项区域(上下排列)

**布局:**
- 两个选项垂直排列(上下结构)

**选项1:交钥匙自动驾驶平台(Anahtar Teslim Otonom Platform)**
- 标题:Anahtar Teslim Otonom Platform
- 简短说明和关键特点
- 包含车辆图片
- 按钮:Araçlarımız(点击跳转到车辆展示页)

**选项2:自动驾驶转换套件(Otonom Dönüşüm Kitleri)**
- 标题:Otonom Dönüşüm Kitleri
- 简短说明和关键特点
- 包含套件图片
- 按钮:Bileşenler(点击跳转到组件展示页)

#### 第四部分:客户评价/推荐区域(Referanslar Section)
- 展示满意客户的评价
- 显示从 Neosis 购买产品的组织反馈
- 突出积极的体验和成果

#### 第五部分:FAQ 区域(FAQ Section)
- 常见问题及解答
- 解决关于产品和服务的常见询问

#### 第六部分:联系/页脚区域(İletişim Footer)
- 电子邮件联系信息
- 咨询沟通渠道
- 专业页脚,包含相关公司信息

### 2.4 车辆展示页(Araçlarımız Sayfası)内容

#### 顶部导航栏
- 与主落地页相同的导航栏结构
- İletişim 按钮点击滚动到本页面的页脚联系区域

#### 车辆展示区域
- 展示 Neosis 自动驾驶车辆的图片
- 每辆车辆包含:
  - 高质量车辆图片
  - 车辆名称
  - 详细技术规格信息
  - 性能参数
  - 关键特性说明

#### 页脚(Footer)
- 电子邮件联系信息
- 咨询沟通渠道
- 专业页脚,包含相关公司信息

### 2.5 组件展示页(Bileşenler Sayfası)内容

#### 顶部导航栏
- 与主落地页相同的导航栏结构
- İletişim 按钮点击滚动到本页面的页脚联系区域

#### 交互式系统组件展示区域(NEOSIS - Sistem Bileşenleri)

**整体布局架构:**
- 全屏高度显示,宽高比 2000:848
- 容器使用 position: relative
- 所有图层使用 position: absolute 实现精确堆叠
- 背景色:#060809
- 字体:Helvetica Neue, Arial, sans-serif
- 主文本颜色:#f5eedc

**图层堆叠逻辑(关键):**
- 基础层(Base Layer):使用 image.png 作为干净的车辆底图,object-fit: cover, object-position: center
- 高亮层(Highlight Layers):使用从 image-2.png 中裁剪的透明 PNG,尺寸与基础层完全一致
- 所有高亮层必须与基础层完美重叠对齐,确保发光部分精确覆盖在车辆对应组件上
- 默认状态:所有高亮层 opacity: 0(隐藏)
- 激活状态:对应高亮层 opacity: 1(显示),其他保持 opacity: 0
- 高亮层淡入动画:transition: opacity .4s ease
- 高亮层脉冲动画:@keyframes sc-pulse { 0%,100%{opacity:.82} 50%{opacity:1} },动画时长 2s,无限循环
- 禁止在图片周围显示白色边框或背景框

**渐变遮罩层:**
- 位置:绝对定位覆盖整个图片区域,z-index: 2
- 渐变效果:
  - 从左到右:rgba(6,8,9,.97) 0% → rgba(6,8,9,.88) 14% → rgba(6,8,9,.18) 34% → transparent 50%
  - 从下到上:rgba(6,8,9,.75) 0% → transparent 30%
- pointer-events: none

**左侧菜单区域:**
- 宽度:clamp(190px, 22%, 260px)
- 内边距:clamp(18px,3%,40px) 0 clamp(14px,2.5%,26px) clamp(16px,2.5%,36px)
- 背景:无(依赖整体渐变遮罩)
- 布局:flex 纵向,justify-content: space-between
- z-index: 10

**菜单标题:**
- 文本:SİSTEM BİLEŞENLERİ(分两行显示,SİSTEM 为普通色,BİLEŞENLERİ 为强调色)
- 字号:clamp(16px,2.1vw,32px)
- 字重:900
- 文本转换:uppercase
- 字母间距:-1.5px
- 行高:.95
- 颜色:#e8e2d6(普通部分),#c5ae79(强调部分)
- 下边距:clamp(12px,1.8%,22px)

**菜单项列表:**
- 布局:flex 纵向,flex: 1,justify-content: space-between
- 菜单项包含:
  - Compute - TACTICAL AI ENGINE(BİLGİSAYAR / Taktik YZ Motoru / 15ms altı gecikme · Sinir çıkarım hızlandırıcı)
  - Drive System - DRIVE-BY-WIRE(SÜRÜŞ SİSTEMİ / Drive-by-Wire Kontrolü / CAN-BUS evrensel · 50ms komut tepkisi)
  - Protection - NIGHT PRESENCE SYSTEM(KORUMA & ALGILAMA / Süspansiyon & Zırh Sistemi / 18\\" strok · STANAG Seviye-3 zırh)
  - Power Management(İTKİ SİSTEMİ / Hibrit Güç Yönetimi / 80km elektrik · 600km hibrit menzil)

**菜单按钮样式:**
- 背景:transparent
- 边框:无,左侧边框 2px solid rgba(197,174,121,.1)
- 颜色:rgba(255,255,255,.3)
- 内边距:clamp(5px,.8vw,10px) clamp(7px,1vw,12px)
- 文本对齐:左对齐
- 布局:flex 纵向,gap: 2px,flex: 1,justify-content: center
- 过渡效果:color .2s, background .2s, border-color .2s
- 悬停状态:color: rgba(255,255,255,.62), background: rgba(197,174,121,.06), border-left-color: rgba(197,174,121,.3)
- 激活状态:background: rgba(197,174,121,.11), border-left: 2px solid #c5ae79, color: #e8e2d6

**菜单项内容结构:**
- 类别标签(sc-ctag):字号 7px,字母间距 3px,文本转换 uppercase,颜色 rgba(197,174,121,.35),字重 700;激活时颜色 #c5ae79
- 标题(sc-cname):字号 clamp(8px,.82vw,11px),字重 400,文本转换 uppercase,字母间距 .4px;激活时字重 700
- 提示(sc-chint):字号 clamp(6px,.6vw,8.5px),颜色 rgba(197,174,121,.28),上边距 1px;激活时颜色 rgba(197,174,121,.52)

**中央展示区域:**
- 显示车辆主图像(image.png),最大宽度 90%
- 高亮层透明 PNG 与基础层完美堆叠,尺寸完全一致
- 当菜单项被选中时,仅对应的高亮层显示(opacity: 1),其他高亮层保持隐藏(opacity: 0)
- 高亮动画:淡入效果(0.4秒)+ 持续脉冲发光效果(2秒循环)

**SVG 标注系统:**
- SVG 容器:绝对定位覆盖整个图片区域,z-index: 8,overflow: visible
- SVG 尺寸:viewBox=\\"0 0 2000 848\",保持与图片宽高比一致
- 标注组(sc-cg):默认 opacity: 0,激活时 opacity: 1,过渡效果 .4s ease .1s

**每个标注组包含:**
1. 连接线:从组件位置(ax, ay)到标签位置(lx, ly+14),stroke: #D4C84A, stroke-width: 1.5
2. 端点圆点:位置(ax, ey),半径 3,填充 #D4C84A
3. 外圈脉冲环:位置(ax, ay),半径动画 8→14→8,透明度动画 .35→.04→.35,时长 2s 无限循环
4. 内圈脉冲环:位置(ax, ay),半径动画 5→8→5,透明度动画 .9→.28→.9,时长 2s 无限循环
5. 中心点:位置(ax, ay),半径动画 2.5→4→2.5,时长 2s 无限循环
6. 标签文本阴影层:位置(lx, ly),字号 17,字重 700,字母间距 1.8,填充 rgba(0,0,0,0.75),描边 rgba(0,0,0,0.55),描边宽度 5
7. 标签文本主层:位置(lx, ly),字号 17,字重 700,字母间距 1.8,填充 #D4C84A,应用霓虹滤镜效果

**霓虹滤镜效果(sc-neon):**
- feMorphology:膨胀半径 1
- feFlood:黑色 0.8 透明度
- feComposite:合成阴影
- feGaussianBlur:阴影模糊 1.2,主体模糊 4 和 7
- feMerge:合并所有层

**组件坐标数据:**
- Compute:ax=47.8%, ay=29.9%, lx=64.0%, ly=8.0%, callout=TEMEL YZ YIĞINI
- Suspension:ax=59.1%, ay=49.3%, lx=72.0%, ly=28.0%, callout=GECE VARLIK SİSTEMİ
- Power:ax=54.0%, ay=53.1%, lx=72.0%, ly=50.0%, callout=HİBRİT SÜRÜŞ SİSTEMİ
- DBW:ax=37.9%, ay=53.1%, lx=64.0%, ly=70.0%, callout=CAN-BUS SÜRÜŞ ARAYÜZÜ

**底部信息栏(sc-infobar):**
- 背景:#060809
- 顶部边框:1px solid rgba(255,255,255,.06)
- 内边距:clamp(18px,2.2vw,32px) clamp(28px,4vw,56px)
- 布局:grid,三列(auto 1fr auto),对齐 center,间距 clamp(20px,3vw,52px)

**左侧区域(sc-infobar-left):**
- 布局:flex 纵向,对齐 flex-start,间距 6px
- ID 标签(sc-idtag):字号 7px,字母间距 5px,颜色 #c5ae79,文本转换 uppercase,包含闪烁圆点
- 闪烁圆点(sc-ldot):宽高 4px,圆形,背景 #c5ae79,阴影 0 0 6px rgba(197,174,121,.9),闪烁动画 1.2s 无限循环
- 序号(sc-iidx):字号 clamp(28px,4vw,58px),字重 900,颜色 rgba(197,174,121,.12),字母间距 -3px,行高 1

**中间区域(sc-infobar-mid):**
- 布局:flex 纵向,间距 10px
- 左侧边框:1px solid rgba(255,255,255,.07)
- 左内边距:clamp(20px,3vw,52px)
- 标题(sc-ititle):字号 clamp(14px,1.6vw,22px),字重 900,文本转换 uppercase,颜色 #e8e2d6,字母间距 .8px
- 描述(sc-itext):字号 clamp(12px,1vw,15px),行高 1.8,颜色 rgba(232,226,214,.55),最大宽度 68ch
- 文本淡入动画:@keyframes sc-text-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } },时长 .3s

**右侧进度条区域(sc-prow):**
- 布局:flex 纵向,间距 4px,对齐 flex-end
- 进度条(sc-pbar):高度 1.5px,宽度 18px,背景 rgba(197,174,121,.14),内边距 5px 0,background-clip: content-box,过渡效果 .3s
- 激活状态:背景 #c5ae79,宽度 30px

**组件详细信息:**
- Compute(BİLGİSAYAR):Taktik YZ Motoru,描述:Gerçek zamanlı sensör füzyonunu 15ms altı gecikmeyle işleyen askeri sınıf görev bilgisayarı. Sinir çıkarım hızlandırıcısı LIDAR, kamera ve termal veri akışlarını eş zamanlı yönetir. MIL-STD-810H sertifikalı.
- Suspension(KORUMA & ALGILAMA):Süspansiyon & Zırh Sistemi,描述:Termal görüntüleme ve aktif LIDAR dizileri gece görüşü ve 360° çevre haritalaması sağlar. 18 inç stroklu çift salıncaklı süspansiyon ve kritik düğümlerde STANAG 4569 Seviye-3 balistik zırh.
- Power(İTKİ SİSTEMİ):Hibrit Güç Yönetimi,描述:Elektrik ve yanmalı çift modlu itki sistemi elektrikle 80 km sessiz menzil, hibrit modda 600 km'ye uzar. 48V LiFePO₄ akü paketi tüm otonom sensörleri ve aktüatörleri aynı anda besler.
- DBW(SÜRÜŞ SİSTEMİ):Drive-by-Wire Kontrolü,描述:CAN-BUS tam elektronik drive-by-wire arayüzü otonom veya uzaktan operasyona olanak tanır. 50ms altı komut tepkisi ve fail-safe çift kanal yedekleme ile her koşulda güvenilir kontrol.

**交互逻辑:**
- 页面加载时默认选中第一个组件(Compute)
- 点击菜单项时触发交互:
  1. 移除所有菜单项的 active 状态
  2. 将所有高亮层设置为 opacity: 0(隐藏)
  3. 移除所有 SVG 标注组的 on 状态
  4. 激活当前选中的菜单项(左边框和文本颜色变为强调色)
  5. 延迟 20ms 后显示对应的高亮层(opacity: 1)
  6. 延迟 20ms 后显示对应的 SVG 标注组(opacity: 1)
  7. 更新底部信息栏内容(ID 标签、序号、标题、描述),带淡入动画
  8. 更新右侧进度条激活状态
- 自动轮播:每 3.8 秒自动切换到下一个组件
- 手动操作后暂停自动轮播 9 秒,然后恢复
- 点击右侧进度条也可切换组件

**顶部品牌标识:**
- 显示 ⬢ NEOSIS 标识

**CSS 样式规范:**
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.sc-section {
  background: #060809;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #f5eedc;
}

.sc-hero {
  position: relative;
  width: 100%;
  aspect-ratio: 2000 / 848;
  overflow: hidden;
}
.sc-bg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: center;
  display: block;
}
.sc-overlay {
  position: absolute; inset: 0; pointer-events: none; z-index: 2;
  background:
    linear-gradient(to right, rgba(6,8,9,.97) 0%, rgba(6,8,9,.88) 14%, rgba(6,8,9,.18) 34%, transparent 50%),
    linear-gradient(to top,   rgba(6,8,9,.75) 0%, transparent 30%);
}
.sc-hs {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; pointer-events: none; z-index: 3;
  opacity: 0; transition: opacity .4s ease;
}
.sc-hs.on { opacity: 1; animation: sc-pulse 2s ease-in-out infinite; }
@keyframes sc-pulse { 0%,100%{opacity:.82} 50%{opacity:1} }

.sc-svg {
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 8; overflow: visible;
}
.sc-cg { opacity: 0; transition: opacity .4s ease .1s; }
.sc-cg.on { opacity: 1; }

.sc-panel {
  position: absolute; top: 0; left: 0; bottom: 0;
  width: clamp(190px, 22%, 260px);
  padding: clamp(18px,3%,40px) 0 clamp(14px,2.5%,26px) clamp(16px,2.5%,36px);
  display: flex; flex-direction: column; justify-content: space-between; z-index: 10;
}
.sc-title {
  font-size: clamp(16px,2.1vw,32px); font-weight: 900;
  text-transform: uppercase; letter-spacing: -1.5px; line-height: .95;
  color: #e8e2d6; margin-bottom: clamp(12px,1.8%,22px);
}
.sc-title em { color: #c5ae79; font-style: normal; display: block; }

.sc-list {
  display: flex; flex-direction: column; flex: 1;
  overflow: hidden; justify-content: space-between;
}
.sc-btn {
  background: transparent; border: none;
  border-left: 2px solid rgba(197,174,121,.1);
  color: rgba(255,255,255,.3);
  padding: clamp(5px,.8vw,10px) clamp(7px,1vw,12px);
  text-align: left; cursor: pointer;
  transition: color .2s, background .2s, border-color .2s;
  display: flex; flex-direction: column; gap: 2px;
  flex: 1; justify-content: center; min-height: 0; font-family: inherit;
}
.sc-btn:hover { color: rgba(255,255,255,.62); background: rgba(197,174,121,.06); border-left-color: rgba(197,174,121,.3); }
.sc-btn.active { background: rgba(197,174,121,.11); border-left: 2px solid #c5ae79; color: #e8e2d6; }
.sc-ctag { font-size: 7px; letter-spacing: 3px; text-transform: uppercase; color: rgba(197,174,121,.35); font-weight: 700; }
.sc-btn.active .sc-ctag { color: #c5ae79; }
.sc-cname { font-size: clamp(8px,.82vw,11px); font-weight: 400; text-transform: uppercase; letter-spacing: .4px; }
.sc-btn.active .sc-cname { font-weight: 700; }
.sc-chint { font-size: clamp(6px,.6vw,8.5px); color: rgba(197,174,121,.28); margin-top: 1px; }
.sc-btn.active .sc-chint { color: rgba(197,174,121,.52); }

.sc-infobar {
  background: #060809;
  border-top: 1px solid rgba(255,255,255,.06);
  padding: clamp(18px,2.2vw,32px) clamp(28px,4vw,56px);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: clamp(20px,3vw,52px);
}

.sc-infobar-left {
  display: flex; flex-direction: column; align-items: flex-start; gap: 6px; flex-shrink: 0;
}
.sc-idtag {
  font-size: 7px; letter-spacing: 5px; color: #c5ae79;
  text-transform: uppercase; display: flex; align-items: center; gap: 7px;
}
.sc-ldot {
  width: 4px; height: 4px; border-radius: 50%;
  background: #c5ae79; box-shadow: 0 0 6px rgba(197,174,121,.9);
  animation: sc-blink 1.2s infinite; display: inline-block;
}
@keyframes sc-blink { 0%,100%{opacity:1} 50%{opacity:.15} }
.sc-iidx {
  font-size: clamp(28px,4vw,58px); font-weight: 900;
  color: rgba(197,174,121,.12); letter-spacing: -3px; line-height: 1;
}

.sc-infobar-mid {
  display: flex; flex-direction: column; gap: 10px;
  border-left: 1px solid rgba(255,255,255,.07);
  padding-left: clamp(20px,3vw,52px);
}
.sc-ititle {
  font-size: clamp(14px,1.6vw,22px); font-weight: 900;
  text-transform: uppercase; color: #e8e2d6;
  letter-spacing: .8px; margin: 0;
}
.sc-itext {
  font-size: clamp(12px,1vw,15px);
  line-height: 1.8;
  color: rgba(232,226,214,.55);
  margin: 0;
  max-width: 68ch;
}

.sc-prow {
  display: flex; flex-direction: column; gap: 4px;
  align-items: flex-end; flex-shrink: 0;
}
.sc-pbar {
  height: 1.5px; width: 18px;
  background: rgba(197,174,121,.14);
  border: none; cursor: pointer;
  padding: 5px 0; background-clip: content-box;
  transition: background .3s, width .3s;
}
.sc-pbar.active {
  background: #c5ae79; background-clip: content-box; width: 30px;
}

@keyframes sc-text-in {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: none; }
}
.sc-anim-in { animation: sc-text-in .3s ease both; }
```

**JavaScript 交互逻辑:**
```javascript
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  var COMPONENTS = [{\"id\": \"compute\", \"tag\": \"BİLGİSAYAR\", \"label\": \"Taktik YZ Motoru\", \"hint\": \"15ms altı gecikme · Sinir çıkarım hızlandırıcı\", \"callout\": \"TEMEL YZ YIĞINI\", \"desc\": \"Gerçek zamanlı sensör füzyonunu 15ms altı gecikmeyle işleyen askeri sınıf görev bilgisayarı. Sinir çıkarım hızlandırıcısı LIDAR, kamera ve termal veri akışlarını eş zamanlı yönetir. MIL-STD-810H sertifikalı.\", \"ax\": 47.8, \"ay\": 29.9, \"lx\": 64.0, \"ly\": 8.0}, {\"id\": \"suspension\", \"tag\": \"KORUMA & ALGILAMA\", \"label\": \"Süspansiyon & Zırh Sistemi\", \"hint\": \"18\\" strok · STANAG Seviye-3 zırh\", \"callout\": \"GECE VARLIK SİSTEMİ\", \"desc\": \"Termal görüntüleme ve aktif LIDAR dizileri gece görüşü ve 360° çevre haritalaması sağlar. 18 inç stroklu çift salıncaklı süspansiyon ve kritik düğümlerde STANAG 4569 Seviye-3 balistik zırh.\", \"ax\": 59.1, \"ay\": 49.3, \"lx\": 72.0, \"ly\": 28.0}, {\"id\": \"power\", \"tag\": \"İTKİ SİSTEMİ\", \"label\": \"Hibrit Güç Yönetimi\", \"hint\": \"80km elektrik · 600km hibrit menzil\", \"callout\": \"HİBRİT SÜRÜŞ SİSTEMİ\", \"desc\": \"Elektrik ve yanmalı çift modlu itki sistemi elektrikle 80 km sessiz menzil, hibrit modda 600 km'ye uzar. 48V LiFePO₄ akü paketi tüm otonom sensörleri ve aktüatörleri aynı anda besler.\", \"ax\": 54.0, \"ay\": 53.1, \"lx\": 72.0, \"ly\": 50.0}, {\"id\": \"dbw\", \"tag\": \"SÜRÜŞ SİSTEMİ\", \"label\": \"Drive-by-Wire Kontrolü\", \"hint\": \"CAN-BUS evrensel · 50ms komut tepkisi\", \"callout\": \"CAN-BUS SÜRÜŞ ARAYÜZÜ\", \"desc\": \"CAN-BUS tam elektronik drive-by-wire arayüzü otonom veya uzaktan operasyona olanak tanır. 50ms altı komut tepkisi ve fail-safe çift kanal yedekleme ile her koşulda güvenilir kontrol.\", \"ax\": 37.9, \"ay\": 53.1, \"lx\": 64.0, \"ly\": 70.0}];
  var active = 0, autoTimer = null, manTimer = null;

  var svg    = document.getElementById('sc-svg');
  var list   = document.getElementById('sc-list');
  var prow   = document.getElementById('sc-prow');
  var elTag  = document.getElementById('sc-tag');
  var elIdx  = document.getElementById('sc-idx');
  var elTtl  = document.getElementById('sc-title');
  var elDesc = document.getElementById('sc-desc');

  function svgEl(tag, attrs) {
    var el = document.createElementNS(NS, tag);
    Object.keys(attrs).forEach(function(k) { el.setAttribute(k, attrs[k]); });
    return el;
  }
  function px(p) { return (p / 100) * 2000; }
  function py(p) { return (p / 100) * 848; }

  function buildSVG() {
    var defs = document.createElementNS(NS, 'defs');
    defs.innerHTML =
      '<filter id=\"sc-neon\" x=\"-40%\" y=\"-40%\" width=\"180%\" height=\"180%\">' +
        '<feMorphology operator=\"dilate\" radius=\"1\" in=\"SourceGraphic\" result=\"thick\"/>' +
        '<feFlood flood-color=\"#000\" flood-opacity=\"0.8\" result=\"dk\"/>' +
        '<feComposite in=\"dk\" in2=\"thick\" operator=\"in\" result=\"shadow\"/>' +
        '<feGaussianBlur in=\"shadow\" stdDeviation=\"1.2\" result=\"sb\"/>' +
        '<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"4\" result=\"g1\"/>' +
        '<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"7\" result=\"g2\"/>' +
        '<feMerge><feMergeNode in=\"sb\"/><feMergeNode in=\"g2\"/><feMergeNode in=\"g1\"/><feMergeNode in=\"SourceGraphic\"/></feMerge>' +
      '</filter>';
    svg.appendChild(defs);

    COMPONENTS.forEach(function(c, i) {
      var g = document.createElementNS(NS, 'g');
      g.id = 'sc-cg-' + i;
      g.setAttribute('class', 'sc-cg');

      var ax = px(c.ax), ay = py(c.ay);
      var lx = px(c.lx), ly = py(c.ly), ey = ly + 14;

      g.appendChild(svgEl('path', {
        d:'M'+ax+','+ay+' L'+ax+','+ey+' L'+lx+','+ey,
        stroke:'#D4C84A','stroke-width':'1.5',
        fill:'none','stroke-linecap':'round','stroke-linejoin':'round'
      }));
      g.appendChild(svgEl('circle', { cx:''+ax, cy:''+ey, r:'3', fill:'#D4C84A' }));

      var r1 = svgEl('circle', { cx:''+ax, cy:''+ay, r:'10', fill:'none', stroke:'rgba(210,196,70,.2)', 'stroke-width':'1.5' });
      r1.innerHTML =
        '<animate attributeName=\"r\" values=\"8;14;8\" dur=\"2s\" repeatCount=\"indefinite\"/>' +
        '<animate attributeName=\"stroke-opacity\" values=\".35;.04;.35\" dur=\"2s\" repeatCount=\"indefinite\"/>';
      g.appendChild(r1);

      var r2 = svgEl('circle', { cx:''+ax, cy:''+ay, r:'6', fill:'none', stroke:'#D4C84A', 'stroke-width':'1.2' });
      r2.innerHTML =
        '<animate attributeName=\"r\" values=\"5;8;5\" dur=\"2s\" repeatCount=\"indefinite\"/>' +
        '<animate attributeName=\"stroke-opacity\" values=\".9;.28;.9\" dur=\"2s\" repeatCount=\"indefinite\"/>';
      g.appendChild(r2);

      var dot = svgEl('circle', { cx:''+ax, cy:''+ay, r:'3', fill:'#D4C84A' });
      dot.innerHTML = '<animate attributeName=\"r\" values=\"2.5;4;2.5\" dur=\"2s\" repeatCount=\"indefinite\"/>';
      g.appendChild(dot);

      var ts = document.createElementNS(NS, 'text');
      ts.setAttribute('x',''+lx); ts.setAttribute('y',''+ly);
      ts.setAttribute('font-size','17'); ts.setAttribute('font-weight','700');
      ts.setAttribute('font-family','Helvetica Neue,Arial,sans-serif');
      ts.setAttribute('letter-spacing','1.8'); ts.setAttribute('text-anchor','start');
      ts.setAttribute('fill','rgba(0,0,0,0.75)');
      ts.setAttribute('stroke','rgba(0,0,0,0.55)');
      ts.setAttribute('stroke-width','5');
      ts.setAttribute('stroke-linejoin','round');
      ts.setAttribute('paint-order','stroke');
      ts.textContent = c.callout;
      g.appendChild(ts);

      var t = document.createElementNS(NS, 'text');
      t.setAttribute('x',''+lx); t.setAttribute('y',''+ly);
      t.setAttribute('font-size','17'); t.setAttribute('font-weight','700');
      t.setAttribute('font-family','Helvetica Neue,Arial,sans-serif');
      t.setAttribute('letter-spacing','1.8'); t.setAttribute('text-anchor','start');
      t.setAttribute('fill','#D4C84A'); t.setAttribute('filter','url(#sc-neon)');
      t.textContent = c.callout;
      g.appendChild(t);
      svg.appendChild(g);
    });
  }

  function buildList() {
    COMPONENTS.forEach(function(c, i) {
      var btn = document.createElement('button');
      btn.className = 'sc-btn' + (i === 0 ? ' active' : '');
      btn.id = 'sc-btn-' + i;
      btn.innerHTML =
        '<span class=\"sc-ctag\">'  + c.tag   + '</span>' +
        '<span class=\"sc-cname\">' + c.label + '</span>' +
        '<span class=\"sc-chint\">' + c.hint  + '</span>';
      btn.addEventListener('click', (function(idx) { return function() { select(idx,true); }; })(i));
      list.appendChild(btn);

      var bar = document.createElement('button');
      bar.className = 'sc-pbar' + (i === 0 ? ' active' : '');
      bar.id = 'sc-bar-' + i;
      bar.addEventListener('click', (function(idx) { return function() { select(idx,true); }; })(i));
      prow.appendChild(bar);
    });
  }

  function select(i, manual) {
    document.getElementById('sc-btn-' + active).classList.remove('active');
    document.getElementById('sc-bar-' + active).classList.remove('active');
    document.getElementById('sc-hs-' + COMPONENTS[active].id).classList.remove('on');
    document.getElementById('sc-cg-' + active).classList.remove('on');

    active = i;
    var c = COMPONENTS[i];

    document.getElementById('sc-btn-' + i).classList.add('active');
    document.getElementById('sc-bar-' + i).classList.add('active');
    setTimeout(function() {
      document.getElementById('sc-hs-' + c.id).classList.add('on');
      document.getElementById('sc-cg-' + i).classList.add('on');
    }, 20);

    elTag.textContent = c.tag;
    elIdx.textContent = String(i + 1).padStart(2, '0');
    [elTtl, elDesc].forEach(function(el) {
      el.classList.remove('sc-anim-in');
      void el.offsetHeight;
      el.classList.add('sc-anim-in');
    });
    elTtl.textContent  = c.label;
    elDesc.textContent = c.desc;

    if (manual) {
      clearInterval(autoTimer); clearTimeout(manTimer);
      manTimer = setTimeout(startAuto, 9000);
    }
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function() {
      select((active + 1) % COMPONENTS.length, false);
    }, 3800);
  }

  buildSVG(); buildList(); select(0, false); startAuto();
})();
```

#### 页脚(Footer)
- 电子邮件联系信息
- 咨询沟通渠道
- 专业页脚,包含相关公司信息

### 2.6 关于我们页(Hakkımızda Sayfası)内容

#### 顶部导航栏
- 与主落地页相同的导航栏结构
- İletişim 按钮点击滚动到本页面的页脚联系区域

#### 关于我们内容区域
- 公司介绍
- 公司历史和发展
- 团队信息
- 公司愿景和使命
- 核心价值观

#### 页脚(Footer)
- 电子邮件联系信息
- 咨询沟通渠道
- 专业页脚,包含相关公司信息

### 2.7 热成像目标页(Termal Hedefler Sayfası)内容

#### 顶部导航栏
- 与主落地页相同的导航栏结构
- İletişim 按钮点击滚动到本页面的页脚联系区域

#### 热成像目标系统展示区域
- 热成像目标系统介绍
- 产品特点和优势
- 技术规格
- 应用场景

#### 页脚(Footer)
- 电子邮件联系信息
- 咨询沟通渠道
- 专业页脚,包含相关公司信息

### 2.8 服务页(Hizmetlerimiz Sayfası)内容

#### 顶部导航栏
- 与主落地页相同的导航栏结构
- İletişim 按钮点击滚动到本页面的页脚联系区域

#### 服务内容展示区域
- 公司提供的各项服务介绍
- 服务范围说明
- 服务流程
- 服务优势

#### 页脚(Footer)
- 电子邮件联系信息
- 咨询沟通渠道
- 专业页脚,包含相关公司信息

### 2.9 更多信息页(Daha Fazlası Sayfası)内容

#### 顶部导航栏
- 与主落地页相同的导航栏结构
- İletişim 按钮点击滚动到本页面的页脚联系区域

#### 更多信息展示区域
- 额外的产品信息
- 行业资讯
- 技术文档
- 相关资源

#### 页脚(Footer)
- 电子邮件联系信息
- 咨询沟通渠道
- 专业页脚,包含相关公司信息

### 2.10 设计要求
- 快速加载性能
- 清晰的信息层次结构
- Bento grid 布局实现内容块
- 主背景色:纯黑 #000000
- 主要强调色:#FAFF00(发光效果和激活状态)
- 次要强调色:#C5AE79 和 #4A4E54
- 粘性导航栏,带有公司品牌
- 整体专业且精致的呈现,灵感来自 Overland AI 高端国防科技美学
- 高对比度战术风格,无白色边框或背景框
- 交互式组件选择功能,带有精确的视觉高亮效果和图层堆叠
- 所有页面保持统一的视觉风格和导航结构
- 页面间平滑跳转
- İletişim 按钮在所有页面均滚动到当前页面的页脚联系区域

### 2.11 参考图片
- image.png:交互式组件展示的车辆基础层图像
- image-2.png:组件高亮可视化示例,从中裁剪黄色高亮形状制作透明 PNG,用于各组件的视觉高亮显示(与基础层尺寸完全一致)