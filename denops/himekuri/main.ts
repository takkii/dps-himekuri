import {Denops} from 'https://deno.land/x/denops_std@v1.0.0-alpha.0/mod.ts'

export async function main(denops: Denops): Promise<void> {
    denops.dispatcher = {
        async himekuri(): Promise<void> {
            let OneWeek = ['日', '月', '火', '水', '木', '金', '土']
            let OneDay = new Date()
            let comma = ' : '
            let str = '時刻を表示'
            let OneYear = OneDay.getFullYear()
            const OneMonth = OneDay.getMonth() + 1
            let anyDays = OneDay.getDate()
            let OneHour = OneDay.getHours()
            let OneMinute = OneDay.getMinutes()
            let OneSecond = OneDay.getSeconds()
            let WeekDay = OneDay.getDay()
            let anything_month = OneDay.getMonth()
            let anyMonth = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走']
            let something_Month = anyMonth[anything_month]

            let TimeNow =
                str +
                comma +
                (OneYear) + '年' +
                (OneMonth) + '月' +
                (anyDays) + '日' +
                comma +
                (OneHour) + '時' +
                (OneMinute) + '分' +
                (OneSecond) + '秒' +
                comma +
                (OneWeek[WeekDay]) + '曜日'

            if (OneMonth == 1) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 2) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 3) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 4) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 5) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 6) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 7) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 8) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 9) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 10) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 11) {
                console.log(TimeNow + comma + something_Month)
            } else if (OneMonth == 12) {
                console.log(TimeNow + comma + something_Month)
            } else {
                try {
                    throw new Error('ありえない月です、独自例外を発生させます!')
                } catch (e) {
                    console.error("補足しました、例外メッセージです ... ", e.message);
                }
            }
        },
    }
    await denops.cmd(
        `command! Himekuri call denops#request('${denops.name}', 'himekuri', [])`
    )
}