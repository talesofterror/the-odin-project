let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/personal-repos/the-odin-project
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +26 term://~/personal-repos/the-odin-project/sandbox/box032-prototypes//11752:C:/Windows/system32/cmd.exe
badd +1 sandbox/box032-prototypes/index.html
badd +61 sandbox/box032-prototypes/script.js
badd +34 sandbox/box032-prototypes/style.css
argglobal
%argdel
$argadd sandbox/box032-prototypes/
edit sandbox/box032-prototypes/script.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 30 + 28) / 56)
exe '2resize ' . ((&lines * 22 + 28) / 56)
exe 'vert 2resize ' . ((&columns * 67 + 51) / 103)
exe '3resize ' . ((&lines * 22 + 28) / 56)
exe 'vert 3resize ' . ((&columns * 35 + 51) / 103)
argglobal
balt sandbox/box032-prototypes/index.html
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 62 - ((19 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 62
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box032-prototypes
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/the-odin-project/sandbox/box032-prototypes/style.css", ":p")) | buffer ~/personal-repos/the-odin-project/sandbox/box032-prototypes/style.css | else | edit ~/personal-repos/the-odin-project/sandbox/box032-prototypes/style.css | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/the-odin-project/sandbox/box032-prototypes/style.css
endif
balt ~/personal-repos/the-odin-project/sandbox/box032-prototypes/index.html
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 21 - ((2 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 21
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box032-prototypes
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/the-odin-project/sandbox/box032-prototypes/index.html", ":p")) | buffer ~/personal-repos/the-odin-project/sandbox/box032-prototypes/index.html | else | edit ~/personal-repos/the-odin-project/sandbox/box032-prototypes/index.html | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/the-odin-project/sandbox/box032-prototypes/index.html
endif
balt ~/personal-repos/the-odin-project/sandbox/box032-prototypes/style.css
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 11) / 22)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box032-prototypes
wincmd w
exe '1resize ' . ((&lines * 30 + 28) / 56)
exe '2resize ' . ((&lines * 22 + 28) / 56)
exe 'vert 2resize ' . ((&columns * 67 + 51) / 103)
exe '3resize ' . ((&lines * 22 + 28) / 56)
exe 'vert 3resize ' . ((&columns * 35 + 51) / 103)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
