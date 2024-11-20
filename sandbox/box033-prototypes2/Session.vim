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
badd +0 sandbox/box033-prototypes2/index.html
badd +1 sandbox/box033-prototypes2/script.js
badd +0 sandbox/box033-prototypes2/style.css
argglobal
%argdel
$argadd sandbox/box033-prototypes2/
edit sandbox/box033-prototypes2/script.js
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
exe '1resize ' . ((&lines * 32 + 28) / 56)
exe '2resize ' . ((&lines * 20 + 28) / 56)
exe 'vert 2resize ' . ((&columns * 51 + 51) / 103)
exe '3resize ' . ((&lines * 20 + 28) / 56)
exe 'vert 3resize ' . ((&columns * 51 + 51) / 103)
argglobal
balt sandbox/box033-prototypes2/index.html
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
let s:l = 3 - ((2 * winheight(0) + 16) / 32)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 3
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box033-prototypes2
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/the-odin-project/sandbox/box033-prototypes2/style.css", ":p")) | buffer ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/style.css | else | edit ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/style.css | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/style.css
endif
balt ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/index.html
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
let s:l = 1 - ((0 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box033-prototypes2
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/the-odin-project/sandbox/box033-prototypes2/index.html", ":p")) | buffer ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/index.html | else | edit ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/index.html | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/index.html
endif
balt ~/personal-repos/the-odin-project/sandbox/box033-prototypes2/style.css
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
let s:l = 1 - ((0 * winheight(0) + 10) / 20)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box033-prototypes2
wincmd w
exe '1resize ' . ((&lines * 32 + 28) / 56)
exe '2resize ' . ((&lines * 20 + 28) / 56)
exe 'vert 2resize ' . ((&columns * 51 + 51) / 103)
exe '3resize ' . ((&lines * 20 + 28) / 56)
exe 'vert 3resize ' . ((&columns * 51 + 51) / 103)
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
