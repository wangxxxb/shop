import moment from 'moment'

export default (value, format = 'YYYY-MM-DD') => moment(+value).format(format)
