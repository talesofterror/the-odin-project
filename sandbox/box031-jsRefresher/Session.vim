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
badd +0 sandbox/box031-jsRefresher/index.html
badd +0 sandbox/box031-jsRefresher/script.js
badd +0 sandbox/box031-jsRefresher/style.css
argglobal
%argdel
$argadd NvimTree_1
edit sandbox/box031-jsRefresher/script.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
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
exe 'vert 1resize ' . ((&columns * 30 + 105) / 210)
exe '2resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 179 + 105) / 210)
exe '3resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 3resize ' . ((&columns * 89 + 105) / 210)
exe '4resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 4resize ' . ((&columns * 89 + 105) / 210)
argglobal
enew
file NvimTree_1
balt sandbox/box031-jsRefresher/index.html
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
lcd ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher
wincmd w
argglobal
balt ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/index.html
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
let s:l = 1 - ((0 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/style.css", ":p")) | buffer ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/style.css | else | edit ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/style.css | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/style.css
endif
balt ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/index.html
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
let s:l = 1 - ((0 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/index.html", ":p")) | buffer ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/index.html | else | edit ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/index.html | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/index.html
endif
balt ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher/style.css
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
let s:l = 1 - ((0 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box031-jsRefresher
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 105) / 210)
exe '2resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 179 + 105) / 210)
exe '3resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 3resize ' . ((&columns * 89 + 105) / 210)
exe '4resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 4resize ' . ((&columns * 89 + 105) / 210)
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
