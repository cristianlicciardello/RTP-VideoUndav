
document.addEventListener('DOMContentLoaded', event => {
    document.getElementById('butconectar')
        .addEventListener('click', event => {
            conectar()
        })
    document.getElementById('butdesconectar')
        .addEventListener('click', event => {
            hangUpCall()
            mostrarConectar()
        })
    document.getElementById('txtNombre')
        .addEventListener('keypress', e => {
            if (e.key === 'Enter')
                conectar()
        })
})

const conectar = _ => {
    connect()
    mostrarDesconectar()
}

const visibilidadPanel = visibilidad => {
    const panel = document.getElementById('panel')
    const txtNombre = document.getElementById('txtNombre')
    const etiquetaNombreLocal = document.getElementById('etiquetaNombreLocal')
    
    panel.setAttribute('style', `visibility:${visibilidad}`)
    etiquetaNombreLocal.innerText = txtNombre.value
}
const mostrarConectar = _ => {
    visibilidadConectar('visible')
    visibilidadDesconectar('hidden')
    visibilidadPanel('hidden')
}
const mostrarDesconectar = _ => {
    visibilidadConectar('hidden')
    visibilidadDesconectar('visible')
    visibilidadPanel('visible')
}
const visibilidadConectar = visibilidad => {
    const panelConectar = document.getElementById('panelconectar')

    panelConectar.setAttribute('style', `visibility:${visibilidad}`)
}
const visibilidadDesconectar = visibilidad => {
    const panelDesconectar = document.getElementById('paneldesconectar')

    panelDesconectar.setAttribute('style', `visibility:${visibilidad}`)
}
const setearTargetUsername = nombre => {
    const etiquetaNombreRemoto = document.getElementById('etiquetaNombreRemoto')
    etiquetaNombreRemoto.innerText = nombre;
}