# [Denops](https://github.com/vim-denops/denops.vim)版日めくり

### MacOS(UNIX) 環境動作例

![dps-himekuri](https://github.com/takkii/dps-himekuri/blob/main/image/himekuri2.jpg)

### Windows 環境動作例

![dps-himekuri](https://github.com/takkii/dps-himekuri/blob/main/image/windows3.jpg)

> ※ TwitterでWindowsだとdenops.vimが起動しないことをつぶやくと

> [Issues](https://github.com/vim-denops/denops.vim/commit/b83cf1443257cb224c907c2dbcbd6f1459e2c11b)として対応してくださいました。

> 迅速な対応でした。ありがとうございます。

#### dein.toml (設定例)

```markdown
[[plugins]]
repo = 'vim-denops/denops.vim'

[[plugins]]
repo = 'takkii/dps-himekuri'
```

#### 注意

```markdown
1. :echo executable('deno')
Vim/Neovimで実行後、1を返すかどうか確かめます

2. 起動時にインストールする設定をdeinで書いてあれば、
denops版日めくりは時刻を表示します。
```

#### denops.vimの動作確認などでご利用どうぞ。

※ MITライセンスです。
