import {Denops} from 'https://deno.land/x/denops_std@v1.0.0-alpha.0/mod.ts'

export async function main(denops: Denops): Promise<void> {
    denops.dispatcher = {
        himekuri: async function (): Promise<void> {
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

            try {
                if (isNaN(OneMonth)) {
                    throw new Error('暦の月判定にNaNが表示されました、例外を発生させます!')
                } else if (something_Month == '') {
                    throw new Error('和風月に空文字列が表示されました、例外を発生させます!')
                } else {
                    console.log(TimeNow + comma + something_Month)
                }
            } catch (e) {
                console.error("例外を補足しました、メッセージです ... ", e.message);
            }
        },
    }

    await denops.cmd(
        `command! Himekuri call denops#request('${denops.name}', 'himekuri', [])`
    )
}