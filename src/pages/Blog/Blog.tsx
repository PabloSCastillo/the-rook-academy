import React from 'react';
import './blog.css';

const Blog: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] font-['Manrope'] selection:bg-[#a7efef] selection:text-[#002020]">

            {/* Hero Section - Ajustado px-8 y max-w para match con Home */}
            <section className="px-8 py-20 bg-surface flex items-center justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <h4 className="font-label text-[#944921] font-bold tracking-widest uppercase mb-4 text-xs">El Horizonte Intelectual</h4>
                        <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-[#005a5a] leading-[1.1] mb-8 uppercase tracking-tighter">
                            Pensamiento Crítico <span className="italic">en Inglés.</span>
                        </h1>
                        <p className="text-body text-xl text-[#3f4948] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
                            Explora nuestra curaduría de artículos y lecciones en video diseñadas específicamente para el profesional moderno que busca maestría lingüística y cultural.
                        </p>
                    </div>
                    <div className="relative order-1 lg:order-2 flex justify-center items-center">
                        <div className="absolute -inset-4 bg-[#005a5a]/5 transform -rotate-3"></div>
                        <div className="relative w-full aspect-[4/5] max-w-md overflow-hidden border-[12px] border-white shadow-xl">
                            <img
                                alt="Editorial library"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                src="character 8.png"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Education Section - Ajustado padding y responsividad */}
            <section className="bg-[#f6f3f2] py-24 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                        <div>
                            <h2 className="font-headline text-4xl font-bold text-[#005a5a] mb-2 uppercase">Lecciones Magistrales</h2>
                            <p className="font-label text-[#3f4948] tracking-wide">Video-cápsulas de aprendizaje inmersivo</p>
                        </div>
                        <button className="text-[#005a5a] font-bold font-label border-b-2 border-[#005a5a] pb-1 hover:text-[#944921] hover:border-[#944921] transition-all uppercase text-sm tracking-widest">
                            Ver todos los videos
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Featured Video */}
                        <div className="lg:col-span-8 group relative bg-white overflow-hidden shadow-sm border border-outline-variant/20">
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    src="character 9.png"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-white text-7xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        play_circle
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-4 mb-4 flex-wrap">
                                    <span className="bg-[#e8e2d4] text-[#1d1c13] px-3 py-1 text-[10px] font-bold font-label uppercase tracking-tighter">Nivel Avanzado</span>
                                    <span className="text-[#3f4948] text-[10px] font-bold font-label uppercase py-1 tracking-tighter">15 Minutos</span>
                                </div>
                                <h3 className="font-headline text-2xl md:text-3xl font-bold text-[#005a5a] mb-4 uppercase">Estrategias de Negociación: El Matiz</h3>
                                <p className="text-[#3f4948] line-clamp-2">Navega conversaciones complejas utilizando estructuras que proyectan autoridad.</p>
                            </div>
                        </div>

                        {/* Secondary Video List */}
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            {[
                                { title: "Fonética y Presencia", cat: "Video Reciente", border: "border-[#944921]" },
                                { title: "El Arte del Subjuntivo", cat: "Gramática Elite", border: "border-[#005a5a]" },
                                { title: "Networking en Oxford", cat: "Cultura Académica", border: "border-[#6f7979]" }
                            ].map((video, idx) => (
                                <div key={idx} className={`bg-white p-6 group cursor-pointer border-l-4 ${video.border} shadow-sm hover:shadow-md transition-shadow`}>
                                    <span className="font-bold font-label text-[10px] uppercase block mb-2 opacity-70 tracking-widest">{video.cat}</span>
                                    <h4 className="font-headline text-lg font-bold text-[#005a5a] group-hover:text-[#944921] transition-colors uppercase">{video.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid - Consistencia con Services Section de Home */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="font-headline text-4xl font-bold text-[#005a5a] uppercase tracking-tight">Perspectivas Literarias</h2>
                    <div className="w-20 h-1 bg-[#005a5a] mx-auto mt-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[10, 11, 12].map((imgNum) => (
                        <article key={imgNum} className="flex flex-col group">
                            <div className="aspect-[4/5] bg-[#f0eded] overflow-hidden mb-6 border border-outline-variant/10">
                                <img
                                    alt="Article"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    src={`character 6.png`}
                                />
                            </div>
                            <span className="font-label text-[#944921] font-bold text-xs uppercase mb-3 tracking-widest">Conocimiento Experto</span>
                            <h3 className="font-headline text-xl font-bold text-[#005a5a] mb-4 leading-tight uppercase group-hover:text-[#944921] transition-colors">La ventaja cognitiva en el aprendizaje</h3>
                            <p className="text-[#3f4948] mb-6 leading-relaxed text-sm">Análisis sobre la adquisición de segundas lenguas en entornos de alto nivel.</p>
                            <a className="mt-auto font-label font-bold text-xs text-[#005a5a] uppercase tracking-widest flex items-center group-hover:gap-2 transition-all" href="#">
                                Leer Artículo <span className="ml-2">→</span>
                            </a>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter - Ajustado para que no desborde en móvil */}
            <section className="px-4 md:px-8 py-24 mb-20">
                <div className="max-w-5xl mx-auto bg-[#005a5a] text-white p-8 md:p-16 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 uppercase">Suscríbete al Journal</h2>
                            <p className="text-white/80 text-base">Análisis lingüísticos y recursos exclusivos.</p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-0" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="flex-grow bg-white text-[#1b1c1c] px-6 py-4 outline-none w-full"
                                placeholder="Email profesional"
                                type="email"
                            />
                            <button className="bg-[#944921] text-white px-8 py-4 font-headline font-bold uppercase tracking-widest text-xs hover:bg-[#76330b] transition-colors whitespace-nowrap">
                                OK
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;