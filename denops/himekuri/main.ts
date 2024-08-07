import type { Denops } from "https://deno.land/x/denops_std@v6.5.1/mod.ts";

export async function main(denops: Denops): Promise<void> {
    denops.dispatcher = {
        himekuri: async function (): Promise<void> {
            let OneWeek: Array<string> = ['日', '月', '火', '水', '木', '金', '土']
            let OneDay: Date = new Date()
            let comma: string = ' : '
            let time_now: string = '時刻を表示'
            let OneYear: number = OneDay.getFullYear()
            const anything_month: number = OneDay.getMonth()
            const OneMonth: number = anything_month + 1
            let anyDays: number = OneDay.getDate()
            let OneHour: number = OneDay.getHours()
            let OneMinute: number = OneDay.getMinutes()
            let OneSecond: number = OneDay.getSeconds()
            let WeekDay: number = OneDay.getDay()
            let anyMonth: Array<string> = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走']
            let something_Month: string = anyMonth[anything_month]

            let TimeNow: string = time_now + comma +
                (OneYear) + '年' +
                (OneMonth) + '月' +
                (anyDays) + '日' + comma +
                (OneHour) + '時' +
                (OneMinute) + '分' +
                (OneSecond) + '秒' + comma +
                (OneWeek[WeekDay]) + '曜日'

            try {
                if (isNaN(OneMonth || anything_month)) {
                    throw new Error('暦の月判定にNaNが表示されました、例外を発生させます!')
                } else if (something_Month == '') {
                    throw new Error('和風月に空文字列が表示されました、例外を発生させます!')
                } else {
                    console.log(TimeNow + comma + something_Month)
                }
            } catch (e) {
                console.error('例外を補足しました、メッセージです ... ', e.message);
            }
        },
    }
    denops.cmd(`command! Himekuri call denops#notify('${denops.name}', 'himekuri', [])`)
}
