let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/personal-repos/the-odin-project/sandbox/box043-working-with-api
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +18 script.js
badd +13 index.html
badd +1 style.css
badd +1 notes.md
badd +0 ~/personal-repos/the-odin-project/sandbox/box043-working-with-api
badd +1 tinnedfish/tin.js
badd +2875 giphyRefData.json
argglobal
%argdel
$argadd ~/personal-repos/the-odin-project/sandbox/box043-working-with-api
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit style.css
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
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
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe '2resize ' . ((&lines * 26 + 28) / 57)
argglobal
balt index.html
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 13 - ((12 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 13
normal! 022|
lcd ~/personal-repos/the-odin-project/sandbox/box043-working-with-api
wincmd w
argglobal
if bufexists(fnamemodify("~/personal-repos/the-odin-project/sandbox/box043-working-with-api/index.html", ":p")) | buffer ~/personal-repos/the-odin-project/sandbox/box043-working-with-api/index.html | else | edit ~/personal-repos/the-odin-project/sandbox/box043-working-with-api/index.html | endif
if &buftype ==# 'terminal'
  silent file ~/personal-repos/the-odin-project/sandbox/box043-working-with-api/index.html
endif
balt ~/personal-repos/the-odin-project/sandbox/box043-working-with-api/style.css
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 12 - ((5 * winheight(0) + 13) / 26)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 12
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box043-working-with-api
wincmd w
2wincmd w
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe '2resize ' . ((&lines * 26 + 28) / 57)
tabnext
edit ~/personal-repos/the-odin-project/sandbox/box043-working-with-api/script.js
argglobal
balt ~/personal-repos/the-odin-project/sandbox/box043-working-with-api/giphyRefData.json
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 17 - ((16 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 17
normal! 028|
lcd ~/personal-repos/the-odin-project/sandbox/box043-working-with-api
tabnext
edit ~/personal-repos/the-odin-project/sandbox/box043-working-with-api/giphyRefData.json
argglobal
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 2875 - ((53 * winheight(0) + 27) / 54)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 2875
normal! 0
lcd ~/personal-repos/the-odin-project/sandbox/box043-working-with-api
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
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
