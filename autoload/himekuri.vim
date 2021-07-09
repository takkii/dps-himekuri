function! Himekuri()
  let now = '時刻を表示'
  let time_now = localtime()
  let wahu = strftime('%m', time_now)
  let comma = ' : '
  
  if wahu == '01'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '睦月'
  elseif wahu == '02'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '如月'
  elseif wahu == '03'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '弥生'
  elseif wahu == '04'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '卯月'
  elseif wahu == '05'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '皐月'
  elseif wahu == '06'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '水無月'
  elseif wahu == '07'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '文月'
  elseif wahu == '08'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '葉月'
  elseif wahu == '09'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '長月'
  elseif wahu == '010'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '神無月'
  elseif wahu == '011'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon '霜月'
  elseif wahu == '012'
    echon now
    echon comma
    echon strftime('%Y年%m月%d日 : %H時%分%S秒 : %A', time_now)
    echon comma
    echon echon '師走'
  endif 

endfunction