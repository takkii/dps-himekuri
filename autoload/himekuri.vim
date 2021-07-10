function! Himekuri()
  let now = "時刻を表示"
  let time_now = localtime()
  let someday_Month = strftime("%m")
  let anyMonth = ['0','睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走']
  let comma = " : "

  execute 'echon' 'now'
  execute 'echon' 'comma'
  execute 'echon' 'strftime("%Y年%m月%d日 : %H時%M分%S秒 : %A", time_now)'
  execute 'echon' 'comma'
  execute 'echon' 'anyMonth[someday_Month]'  
endfunction
