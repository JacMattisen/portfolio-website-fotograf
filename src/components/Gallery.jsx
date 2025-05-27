function Gallery() {
const imagens = [
    '/imagens/galeria1.jpg',
    '/imagens/galeria2.jpg',
    '/imagens/galeria3.jpg',
]

    return (
        <section id="galeria">
            <h2>Galeria </h2>
            <div className="galeria">
                {imagens.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Foto ${index + 1}`}
                    />
            ))}
            </div>
        </section>
    );
}

export default Gallery;