export const IMCResult = ({peso, altura}) => {
    if (/^[0-9]*$/.test(peso) && /^[0-9]*$/.test(altura)) {
        return  (peso) / (altura / 100) ** 2
    } else {
        return null
    }

}