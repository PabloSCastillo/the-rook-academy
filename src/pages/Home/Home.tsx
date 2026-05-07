const Home = () => {
    return (
        <div className="min-h-screen bg-background text-on-surface font-body">
            {/* Header con Video de Fondo */}
            <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-8">

                {/* Contenedor del Video de Fondo */}
                <div className="absolute inset-0 z-0">
                    {/* Filtro Polaroid aplicado al video */}
                    <video
                        className="w-full h-full object-cover grayscale-[30%] sepia-[20%] brightness-[0.7] contrast-[0.85] saturate-[0.9]"
                        src="/walking.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    {/* Overlay para legibilidad del texto */}
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                </div>

                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 mt-8 gap-20 items-center relative z-10">
                    <div className="text-center lg:text-left order-1 lg:order-2
                    ">

                        <h1 className="text-3xl md:text-6xl font-headline font-extrabold text-white leading-[1.1] mb-8 tracking-tighter uppercase">
                            QUE EL INGLÉS NO SEA <span className="text-rookBase italic">TU LÍMITE</span>
                        </h1>
                        <p className="text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            Transformamos tu potencial profesional con una metodología de élite, diseñada para arquitectos del lenguaje que buscan la excelencia global.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-rookOrange text-white px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-lg">
                                Comenzar Ahora
                            </button>
                            <button className="border-2 border-white text-white px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all">
                                Explorar Programas
                            </button>
                        </div>
                    </div>

                    {/* Imagen destacada lateral (opcional, ahora que tienes video de fondo) */}
                    <div className="relative order-1 lg:order-2 flex justify-center items-center">
                        <div className="absolute -inset-4 bg-white/5 transform -rotate-3"></div>
                        <div className="relative postal w-full aspect-[4/5] max-w-md overflow-hidden border-[12px] border-white shadow-2xl">
                            <img
                                src="casilla 2.jpeg"
                                alt="Profesional The Rook Academy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 border border-outline-variant/20">
                                <p className="text-[10px] font-bold text-rookDeep tracking-widest uppercase">The Rook Academy</p>
                                <p className="text-sm font-headline font-bold">LIDERAZGO GLOBAL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Services Section */}
            <section className="py-24 px-8 bg-surface-container-low">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Nuestra Excelencia</span>
                        <h2 className="text-4xl md:text-5xl font-headline font-black text-on-surface mt-4 uppercase tracking-tight">Programas Especializados</h2>
                        <div className="w-20 h-1 bg-rookBase mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/30">
                        {[
                            { title: "Clases Particulares", icon: "person", desc: "Atención personalizada y ritmo adaptado a tus objetivos específicos." },
                            { title: "Inglés para Negocios", icon: "business_center", desc: "Dominio técnico para presentaciones y entornos corporativos internacionales." },
                            { title: "Preparación de Exámenes", icon: "history_edu", desc: "Estrategias avanzadas para certificar tu nivel en TOEFL, IELTS y Cambridge." }
                        ].map((service, index) => (
                            <div key={index} className="group bg-surface-container-lowest p-12 flex flex-col items-center text-center border-r border-outline-variant/30 last:border-r-0 hover:bg-rookBase transition-colors duration-500">
                                <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
                                    <span className="material-symbols-outlined text-rookBase text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="text-2xl font-headline font-bold mb-6 uppercase tracking-tight group-hover:text-white">{service.title}</h3>
                                <p className="text-on-surface-variant group-hover:text-white/80 leading-relaxed mb-8">{service.desc}</p>
                                <a className="mt-auto inline-flex items-center text-rookBase group-hover:text-white font-bold uppercase tracking-widest text-xs" href="#">
                                    Saber más <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;