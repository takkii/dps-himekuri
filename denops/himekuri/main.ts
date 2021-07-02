import {Denops} from 'https://deno.land/x/denops_std@v1.0.0-alpha.0/mod.ts'

export async function main(denops: Denops): Promise<void> {
    denops.dispatcher = {
        async himekuri(): Promise<void> {
            const OneWeek = ['日', '月', '火', '水', '木', '金', '土']
            const OneDay = new Date()
            const comma = ' : '
            const str = '時刻を表示'
            const OneYear = OneDay.getFullYear()
            const OneMonth = OneDay.getMonth() + 1
            const anyDays = OneDay.getDate()
            const OneHour = OneDay.getHours()
            const OneMinute = OneDay.getMinutes()
            const OneSecond = OneDay.getSeconds()
            const WeekDay = OneDay.getDay()
            const January = '睦月'
            const February = '如月'
            const March = '弥生'
            const April = '卯月'
            const May = '皐月'
            const June = '水無月'
            const July = '文月'
            const August = '葉月'
            const September = '長月'
            const October = '神無月'
            const November = '霜月'
            const December = '師走'

            const TimeNow =
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
                console.log(TimeNow + comma + January)
            } else if (OneMonth == 2) {
                console.log(TimeNow + comma + February)
            } else if (OneMonth == 3) {
                console.log(TimeNow + comma + March)
            } else if (OneMonth == 4) {
                console.log(TimeNow + comma + April)
            } else if (OneMonth == 5) {
                console.log(TimeNow + comma + May)
            } else if (OneMonth == 6) {
                console.log(TimeNow + comma + June)
            } else if (OneMonth == 7) {
                console.log(TimeNow + comma + July)
            } else if (OneMonth == 8) {
                console.log(TimeNow + comma + August)
            } else if (OneMonth == 9) {
                console.log(TimeNow + comma + September)
            } else if (OneMonth == 10) {
                console.log(TimeNow + comma + October)
            } else if (OneMonth == 11) {
                console.log(TimeNow + comma + November)
            } else if (OneMonth == 12) {
                console.log(TimeNow + comma + December)
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