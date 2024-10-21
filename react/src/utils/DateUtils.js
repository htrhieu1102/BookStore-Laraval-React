
export const convertDate = (date) => {
	const dateFull = new Date(date);

	return  dateFull.toLocaleString('vi-VN', {
		weekday: 'long',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,

	})
}