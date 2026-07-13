# Studio One Melodyne与ARA

## 这是什么
- 这页解决的是“Melodyne 怎么装、为什么装完还不能用、Studio One 里为什么不需要 transfer、什么该用 Melodyne 修，什么该留给 Audio Editor / Audio Bend”。
- Studio One 的高价值点不是“内置 Melodyne”，而是它把 Melodyne 作为 `Event FX` 深度整合进音频事件编辑流程，这就是用户常说的 `ARA` 工作方式。
- 真正高频的坑有三个：没做独立授权、算法选错、一个工程里挂了很多 Melodyne 但一直不 render。

## 怎么操作
### 1. 官方安装与授权流程
- 在 `Studio Pro/Studio Pro Installation` 里找到 Melodyne，勾选后点 `Install`。
- 旁边可以点 `Claim Product Key` 领取 Melodyne 产品序列号。
- 领完号后，不是在 Studio One 里直接激活，而是先启动 Melodyne 的独立程序。
- 在独立程序里点 `Enter Serial Number`，粘贴序列号，再按提示创建 / 登录 `Celemony` 账号完成注册。
- 授权完成后退出独立 Melodyne，再回 Studio One 使用。

### 2. 在音频事件上直接进入 Melodyne
- 选中任意 `Audio Event`，按 `Ctrl + M`，或者右键事件选 `Edit With Melodyne`。
- 它会把 Melodyne 插到这个事件的 `Event FX Device Rack`，并在和 `Audio Editor / Note Editor` 同一区域打开集成编辑视图。
- 第一次打开时，音频会自动分析，不需要像很多其他宿主那样先做一次 `transfer`。
- 当这个事件上的 Melodyne 仍然处于激活状态时，双击该事件会直接回到 Melodyne 视图；想切回普通音频编辑，可按 `F2` 或点 `Edit`。

### 3. 算法选择别用错
- `Melodic`：优先给人声、单音旋律乐器。
- `Percussive`：给无明确音高的打击类素材。
- `Universal`：官方文档说明，随 `Melodyne Essential 5` 一起提供，可对和弦、吉他、键盘或整段混音做基础音高 / 节奏处理。
- 用户问“为什么 blob 识别得乱”，先别急着怀疑文件坏了，先看算法是不是选错。

### 4. 修完要不要 Render
- Melodyne 和其他 `Event FX` 一样，默认实时运行，优点是你能边听边改。
- 但正式修完后，最好在事件检查器里对该 `Event FX` 点 `Render`，把 CPU 还回来。
- 官方也说明，render 前的状态会被保留，后续还能回去继续编辑，不是一次性写死。

### 5. 不是所有音频编辑都该进 Melodyne
- 如果你要修的是瞬态、节奏贴齐、鼓组相位一致、音频切片，优先用 `Audio Editor / Audio Bend`。
- Studio One 的音频量化基于 `Bend Markers`：
  - 选中音频事件按 `Q`：量化到当前网格。
  - `Alt + Q`：50% 强度量化。
  - `Shift + Q`：恢复原始 timing。
- 所以更实用的判断是：
  - 修音高、修 blob、修人声连音和音准，用 Melodyne。
  - 修瞬态、贴网格、轻度节奏校正，用 Audio Editor / Audio Bend。

## 常见误区与排查
- 误区：点了 `Install` 就算 Melodyne 完成授权。
  - 正解：还要进独立 Melodyne 程序输入序列号并完成 Celemony 注册。
- 误区：在 Studio One 里也要像别的宿主一样先 `transfer`。
  - 正解：Studio One 的官方工作流就是直接 `Edit With Melodyne`，自动分析音频事件。
- 误区：所有问题都丢给 Melodyne 修。
  - 正解：节奏贴齐、鼓组切片、瞬态修正很多时候用 `Audio Bend` 更快，也更符合事件级编辑逻辑。
- 误区：算法乱选，最后抱怨识别不准。
  - 正解：人声先用 `Melodic`，无音高打击类用 `Percussive`，和弦或复音材料再考虑 `Universal`。
- 症状：工程越修越卡。
  - 先看是不是同一个工程里挂了大量未 render 的 Melodyne 事件。
  - 处理完成的先 render，再继续修下一批。
- 版本提醒：
  - `8.0.1` 官方更新修过 `[Melodyne] Potential crash when rapidly executing render/restore`。
  - `8.0.2` 官方更新修过 `Focus remains in ARA editor after clicking Session Page`。
  - 如果你遇到的正好是这两类问题，先确认版本，不要把版本 bug 误判成操作错。

## 补充提醒
- 萃取边界：只保留官方安装授权流程、ARA 集成逻辑和高频编辑边界，不展开完整 Melodyne 教程。
