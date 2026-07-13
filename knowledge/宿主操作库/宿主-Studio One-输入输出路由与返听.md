# Studio One 输入输出路由与返听

## 这是什么
- 这页解决的是“声卡通道怎么进宿主、耳机返听怎么单独做、为什么主监听和歌手耳机要分开、为什么返听有效果但录进去不想被写死”。
- Studio One 的 `Audio I/O Setup` 是按 `Session` 单独保存的，不同工程可以有不同路由。这既是优点，也是很多人中途改路由后把工程弄乱的原因。
- 用户常见问题基本都集中在三块：`输入输出矩阵没配对`、`Cue Mix 不会独立`、`把监听效果直接录死了`。

## 怎么操作
- 进入位置：新建或打开 Session 后，去 `Session/Session Setup/Audio I/O Setup`。
- `Audio I/O Setup` 分为 `Inputs` 和 `Outputs` 两页。纵列是硬件 I/O，横行是 Studio Pro 里创建的软件 I/O 通道。
- 新增输入或输出：
  - 直接用 `Add (Mono)` 或 `Add (Stereo)` 快速加。
  - 需要更细控制时用 `Add...`，可以自定义 `Label`、`Format`、`Color`，也能一次建多个通道。
  - 建完后记得点 `Apply`，不然这次改动不会生效。
- 重命名很重要：双击 I/O 通道名，把 `Input 1`、`Input L+R` 这类默认名改成你真能看懂的名字，比如 `Vocal Mic`、`Loopback`、`Headphone Cue`。
- 默认路由逻辑：
  - 输入默认会有 `Input L+R`、`Input L`、`Input R`。
  - 输出默认会有 `Main Out`，一般接第一对物理输出。
- 做耳机返听 `Cue Mix`：
  - 先在 `Outputs` 新增一个立体声输出。
  - 给这个输出勾上 `Cue Mix`。
  - 之后 Console 里每个通道都会出现对应的 `Cue Mix object`，可单独开关、调电平、调声像。
- `Cue Mix object` 的核心按钮：
  - `Activate`：这个通道要不要送到该耳机 mix。
  - 电平 / 声像：默认会锁定主混音。
  - `Lock to Channel`：想做独立耳机 mix，就把它从主混音解锁。
- 外部耳返系统：
  - 如果你接的是外部 cue 系统，不希望每个通道都自动生成一堆 cue send，就在 `Outputs` 页勾 `Use External Cue Mix System`。
  - 打开后各个 cue 文件夹一开始会是空的，你要手动决定每个 cue header 用哪个输出目的地。
- 低延迟返听：
  - 主输出本身也可以做 direct monitoring。
  - 启用后通道底部会出现 `D` 标记；原生 direct monitoring 时是绿色，硬件 direct monitoring 时是蓝色。
  - 如果你用的是硬件 direct monitoring，就不要指望通道插入效果还能出现在监听里，因为监听发生在软件处理之前。
- `Listen Bus`：
  - 适合控制室单独监听、Solo 不打扰歌手耳机、给控制室挂房间校正而不影响主导出。
  - 启用方法：在 Console 里右键任意通道，打开 `Enable Listen Bus`；需要时再开 `Solo through Listen Bus`。
  - 开启后它会作为独立总线加入 Console，并可以单独指定输出对。
- 录音时要不要把效果录死：
  - 把插件插在 `Input Channel` 上，效果会直接录进音频。
  - 如果你只是想让歌手“听着更舒服”，更稳的做法是把效果插在录音轨或 FX 通道上做监听，最后在 mixdown 再决定是否导出这些效果。

## 常见误区与排查
- 误区：改完 `Audio I/O Setup` 就直接关窗口。
  - 正解：一定要点 `Apply`。很多“明明配了还是没声”就是漏了这一步。
- 误区：工程中途随便改输入输出，不管旧轨道。
  - 正解：I/O 改动会影响关联轨道，可能直接把原来录音轨的输入源切走。
- 误区：`Cue Mix` 只是主混音复制品，没法给歌手单独多一点人声。
  - 正解：默认确实锁定主混音，但你一旦改 `Cue Mix object` 的 level / pan，它就会和主混音分家。
- 误区：硬件 direct monitoring 开着，却还在问“为什么这条通道的压缩和混响听不到”。
  - 正解：硬件直返听的是软件前信号。想在监听里听到插入效果，要改用原生 low-latency monitoring。
- 误区：为了省事，把 EQ、压缩、去齿全插在 `Input Channel` 上直接录。
  - 正解：这样录进去就回不去了。除非你明确就是要打印效果，否则更建议只做监听链，最后在 mixdown 再定。
- 症状：Solo 某轨时把歌手耳机也搞乱了。
  - 先启用 `Listen Bus`。
  - 再用 `Solo through Listen Bus` 把控制室 Solo 和歌手 `Cue Mix` 拆开。
- 症状：耳机返听明明做了，但没走到正确物理输出。
  - 回 `Outputs` 页检查该 `Cue Mix` 对应的 hardware output。
  - 如果用了 `Use External Cue Mix System`，再检查 cue header 里的 `Destination` 有没有手动指定。

## 补充提醒
- 萃取边界：只保留和录音、返听、独立耳机 mix、控制室监听直接相关的设置，不展开 Show Page 和复杂演出路由。
