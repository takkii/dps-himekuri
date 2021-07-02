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
                OneYear +
                '年' +
                (OneMonth) +
                '月' +
                (anyDays) +
                '日' +
                comma +
                (OneHour) +
                '時' +
                (OneMinute) +
                '分' +
                (OneSecond) +
                '秒' +
                comma +
                OneWeek[WeekDay] +
                '曜日'

            const console_january: void = console.log(TimeNow + comma + January)
            const console_february: void = console.log(TimeNow + comma + February)
            const console_march: void = console.log(TimeNow + comma + March)
            const console_april: void = console.log(TimeNow + comma + April)
            const console_may: void = console.log(TimeNow + comma + May)
            const console_june: void = console.log(TimeNow + comma + June)
            const console_july: void = console.log(TimeNow + comma + July)
            const console_august: void = console.log(TimeNow + comma + August)
            const console_september: void = console.log(TimeNow + comma + September)
            const console_october: void = console.log(TimeNow + comma + October)
            const console_november: void = console.log(TimeNow + comma + November)
            const console_december: void = console.log(TimeNow + comma + December)

            if (OneMonth == 1) {
                console_january
            } else if (OneMonth == 2) {
                console_february
            } else if (OneMonth == 3) {
                console_march
            } else if (OneMonth == 4) {
                console_april
            } else if (OneMonth == 5) {
                console_may
            } else if (OneMonth == 6) {
                console_june
            } else if (OneMonth == 7) {
                console_july
            } else if (OneMonth == 8) {
                console_august
            } else if (OneMonth == 9) {
                console_september
            } else if (OneMonth == 10) {
                console_october
            } else if (OneMonth == 11) {
                console_november
            } else if (OneMonth == 12) {
                console_december
            } else {
                try {
                    throw new Error('独自例外を発生させます!')
                } catch (e) {
                    console.error("ありえない月です！例外を発生させます", e.message);
                }
            }
        },
    }
    await denops.cmd(
        `command! Himekuri call denops#request('${denops.name}', 'himekuri', [])`
    )
}