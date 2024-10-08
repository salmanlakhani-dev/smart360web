import dayjs from 'dayjs'
import { getCurrentInstance as instance } from 'vue'
import tinycolor from 'tinycolor2'

const filters = {
	stripHtml(value = '') {
		value = this.transString(value) || ''
		return value.replace(/<\/?[^>]+>/gi, ' ')
	},

	transString(value) {
		if (value instanceof Object) {
			const locale = instance().proxy.$i18n.locale
			if (value.hasOwnProperty(locale)) {
				return value[locale] // TODO get from localstorage
			} else {
				return instance().proxy.$global['supported_languages'][0]
			}
		}
		return value
	},

	getFirstMediaUrl(object) {
		if (object?.media?.length > 0) {
			return object.media[0].url
		}
		return 'images/loading.gif'
	},
	getFirstMediaThumb(object) {
		if (object?.media?.length > 0) {
			return object.media[0].thumb
		}
		return 'images/loading.gif'
	},
	getGalleryListImage(object) {
		if (object?.image) {
			return object.image
		}
		return 'images/loading.gif'
	},

	getFirstMediaIcon(object) {
		if (object?.media?.length > 0) {
			return object.media[0].icon
		}
		return 'images/loading.gif'
	},

	formatDate(date, format = 'HH:mm - DD/MM/YYYY') {
		return dayjs(date?.toString()).format(format)
	},

	formatDuration(hours = 0, format = 'H[h] mm[m] ss[s]') {
		// HH:mm
		let seconds = dayjs.duration({ hours: hours }).asSeconds()
		return dayjs.duration(seconds, 'seconds').format(format)
	},

	formatPrice(price) {
		const settings = instance().proxy.$settings
		price = price?.toFixed(settings['default_currency_decimal_digits']) || price
		if (settings['currency_right'] === '1') {
			return (price?.toString() || '') + settings['default_currency']
		} else {
			return settings['default_currency'] + (price?.toString() || '')
		}
	},

	getSubtotal(booking) {
		let total = 0.0
		booking.e_services?.forEach(function (element) {
			total += element.price * (booking.quantity >= 1 ? booking.quantity : 1)
		})
		booking.options?.forEach(function (element) {
			total += element.price * (booking.quantity >= 1 ? booking.quantity : 1)
		})
		return total
	},

	getCouponValue(booking) {
		return booking.coupon?.value || 0
	},

	getTaxesValue(booking) {
		let total = this.getSubtotal(booking)
		let taxValue = 0.0
		booking.taxes?.forEach(function (element) {
			if (element.type === 'percent') {
				taxValue += (total * element.value) / 100
			} else {
				taxValue += element.value
			}
		})
		return taxValue
	},

	getTotal(booking) {
		let total = this.getSubtotal(booking)
		total += this.getTaxesValue(booking)
		total -= this.getCouponValue(booking)
		return total
	},

	tinycolor(color) {
		return tinycolor(color)
	},

	filterOptionsByEService(options, eServiceId) {
		return options.filter((option) => option.e_service_id === eServiceId)
	},
}

export default {
	install: (app) => {
		app.config.globalProperties.$filters = filters
	},
} //
