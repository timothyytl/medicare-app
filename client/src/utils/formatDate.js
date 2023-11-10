export default function formatDate(date, config) {
    const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' }
    const options = config ? config : defaultOptions

    return (
        new Date(date).toLocaleDateString('en-us', options)
    )
}
