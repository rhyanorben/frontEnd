import './IntroComponent.module.css'

function IntroComponent () {
    const a = 5, b = 2, nome = 'Rhyan';

    return(
    <>
        <div className="introComponent">
            <h2>Componente de Introdução</h2>
            <h3>Template Expressions</h3>
            <p>{nome}, o produto entre {a} e {b} é {a * b}</p>
        </div>
    </>
    )
}

export default IntroComponent;