function! Himekuri()
  let now = "時刻を表示"
  let time_now = localtime()
  let wahu = strftime("%m", time_now)
  let comma = " : "
  execute 'echon' 'now'
  execute 'echon' 'comma'
  execute 'echon' 'strftime("%Y年%m月%d日 : %H時%M分%S秒 : %A", time_now)'
  execute 'echon' 'comma'
  
  if wahu == "01"
    execute 'echon' '"睦月"'
  elseif wahu == "02"
    execute 'echon' '"如月"'
  elseif wahu == "03"
    execute 'echon' '"弥生"'
  elseif wahu == "04"
    execute 'echon' '"卯月"'
  elseif wahu == "05"
    execute 'echon' '"皐月"'
  elseif wahu == "06"
    execute 'echon' '"水無月"'
  elseif wahu == "07"
    execute 'echon' '"文月"'
  elseif wahu == "08"
    execute 'echon' '"葉月"'
  elseif wahu == "09"
    execute 'echon' '"長月"'
  elseif wahu == "010"
    execute 'echon' '"神無月"'
  elseif wahu == "011"
    execute 'echon' '"霜月"'
  elseif wahu == "012"
    execute 'echon' '"師走"'
  endif 
endfunction
