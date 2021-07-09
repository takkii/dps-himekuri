function! Himekuri()
  let now = "時刻を表示"
  let time_now = localtime()
  let wahu = strftime("%m", time_now)
  let comma = " : "
  echon now
  echon comma
  echon strftime("%Y年%m月%d日 : %H時%M分%S秒 : %A", time_now)
  echon comma
  
  if wahu == "01"
    echon "睦月"
  elseif wahu == "02"
    echon "如月"
  elseif wahu == "03"
    echon "弥生"
  elseif wahu == "04"
    echon "卯月"
  elseif wahu == "05"
    echon "皐月"
  elseif wahu == "06"
    echon "水無月"
  elseif wahu == "07"
    echon "文月"
  elseif wahu == "08"
    echon "葉月"
  elseif wahu == "09"
    echon "長月"
  elseif wahu == "010"
    echon "神無月"
  elseif wahu == "011"
    echon "霜月"
  elseif wahu == "012"
    echon "師走"
  endif 

endfunction
