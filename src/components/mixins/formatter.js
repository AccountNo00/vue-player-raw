export default {
    methods: {
        dateTime(val) {
            //convert to date time string
            if (!val) {
                return ''
            }
            var date = new Date(val);
            return date.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "2-digit", hour: '2-digit', minute: '2-digit' })
        },
        dateOnly(val) {
            //convert to date time string
            if (!val) {
                return ''
            }
            var date = new Date(val);
            return date.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "2-digit" })

        },
        timeOnly(val) {
            //convert to date time string
            if (!val) {
                return ''
            }
            var date = new Date(val);
            return date.toLocaleTimeString('en-us', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        },
        inputNumToString(val) {
            var str = val ? val.toString() : ''

            // check if have decimal

            return (val < 0 ? '-' : '') + str.replace(/^0+/, '')
                .replace(/[^0-9]/g, '')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        },
        numToString(val) {
            var str = val ? val.toString() : ''

            // check if have decimal

            return val > 0 ? (val < 0 ? '-' : '') + str.replace(/^0+/, '')
                .replace(/[^0-9]/g, '')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') : '0'
        },
        stringToNum(val) {
            return parseInt(val.replace(/[^0-9]/g, ''))
        },
    }
}