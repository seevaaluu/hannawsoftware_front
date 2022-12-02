
function errorHandling(error) {
    if (typeof alertify == 'undefined') {
        alert('Alertify is not defined')
        throw error
    }

    if (!error.response) {
        console.error('Error sin respuesta de axios', error)
        throw error
    }

    if (error.response.status === 401) {
        window.location.replace(laravelRoute('login'))
        throw error
    }

    if (error.response.status === 403) {
        console.log('Error, no tienes permiso para realizar esa acción')
        throw error
    }

    if (!error.response.data) {
        console.log('Error desde el servidor')
        throw error
    }

    if (error.response.data.message_type === 'error') {
        console.log(error.response.data.message_text)
        throw error
    }

    if (!error.response.data.message_text) {
        if (error.response.status === 422) {
            for (const field in error.response.data.errors) {
                error.response.data.errors[field].forEach(error => console.log(error))
            }
        } else {
            if (error.response.status == 503) {
                console.log('Actualización en proceso. Por favor espere unos minutos y reintente')
            } else {
                console.log('Error Inesperado, reintente')
                console.error(error.response)
            }
        }
        throw error
    }

    if (error.response.statusText !== 'OK') {
        console.log('Error Inesperado! Intente volver a iniciar sesión.')
        throw error
    }

    console.log('Error Inesperado! Intente volver a iniciar sesión.')
    throw error
}

/**
 * Convierte una ruta de laravel en una URL normal
 * @param {*} args
 */
function laravelRoute(...args) {
    if (typeof window.route == 'undefined') {
        alert('route is not defined')
        throw Error('Utility Error')
    }
    return window.route(...args).toString()
}

if (window) {
    window.errorHandling = errorHandling
    window.laravelRoute = laravelRoute
}

export { errorHandling, laravelRoute }
