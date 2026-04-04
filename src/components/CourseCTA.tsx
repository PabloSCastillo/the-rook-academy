const CourseCTA = () => {
    return (
        <section className="mt-40 bg-surface-container-low overflow-hidden relative">
            <div className="max-w-screen-2xl mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="lg:w-1/2">
                    <h2 className="font-headline font-extrabold text-5xl text-primary mb-8 leading-tight uppercase tracking-tighter">
                        ¿No está seguro de qué programa es el adecuado?
                    </h2>
                    <p className="text-on-surface-variant text-xl mb-12 leading-relaxed">
                        Nuestros asesores académicos están disponibles para realizar una evaluación personalizada de su nivel.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="bg-primary text-on-primary px-10 py-5 font-label font-bold text-sm uppercase tracking-widest hover:bg-primary-container transition-all">
                            Solicitar Asesoría
                        </button>
                        <button className="bg-secondary text-on-secondary px-10 py-5 font-label font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all">
                            Prueba de Nivel
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 -z-10"></div>
                    <img alt="Asesoría" src="/assets/cta-advisor.jpg" className="w-full h-[500px] object-cover shadow-2xl" />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-surface-container-highest/50 translate-x-1/4 translate-y-1/4 -rotate-12"></div>
        </section>
    );
};

export default CourseCTA;