import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de envío de formulario aquí
    };

    return (
        <div className="bg-[#fcf9f8] text-[#1b1c1c] font-['Manrope'] selection:bg-[#a7efef] selection:text-[#002020]">

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative h-[140px] flex items-center justify-center overflow-hidden bg-[#005a5a]">
                    <div className="absolute inset-0 z-0">

                        <div className="absolute inset-0 bg-gradient-to-br from-[#005a5a]/80 to-[#267373]/80"></div>
                    </div>
                    <div className="relative z-10 text-center px-6">
                        <h1 className="font-extrabold text-6xl md:text-5xl text-white tracking-tighter mb-4">
                            CONTACTO
                        </h1>
                        <p className="font-['Work_Sans'] text-[#a7efef] uppercase tracking-[0.3em] text-sm">
                            El Horizonte Intelectual
                        </p>
                    </div>
                </section>

                {/* Main Content Grid */}
                <section className="max-w-[1440px] mx-auto px-6 md:px-24 py-20 md:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                        {/* Left: Contact Form */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="font-bold text-3xl text-[#005a5a] uppercase tracking-tight">Escríbinos</h2>
                                <div className="h-1 w-42 bg-[#944921]"></div>
                            </div>
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-['Work_Sans'] text-xs uppercase tracking-widest text-[#3f4948]">Nombre completo</label>
                                        <input
                                            className="bg-[#e4e2e1] border-none focus:ring-0 focus:border-b-2 focus:border-[#005a5a] transition-all p-4 text-[#1b1c1c]"
                                            placeholder="Ej. Juan Pérez"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-['Work_Sans'] text-xs uppercase tracking-widest text-[#3f4948]">Correo Electrónico</label>
                                        <input
                                            className="bg-[#e4e2e1] border-none focus:ring-0 focus:border-b-2 focus:border-[#005a5a] transition-all p-4 text-[#1b1c1c]"
                                            placeholder="juanperez@ejemplo.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-['Work_Sans'] text-xs uppercase tracking-widest text-[#3f4948]">Asunto</label>
                                    <input
                                        className="bg-[#e4e2e1] border-none focus:ring-0 focus:border-b-2 focus:border-[#005a5a] transition-all p-4 text-[#1b1c1c]"
                                        placeholder="¿En qué podemos ayudarle?"
                                        type="text"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-['Work_Sans'] text-xs uppercase tracking-widest text-[#3f4948]">Mensaje</label>
                                    <textarea
                                        className="bg-[#e4e2e1] border-none focus:ring-0 focus:border-b-2 focus:border-[#005a5a] transition-all p-4 text-[#1b1c1c] resize-none"
                                        placeholder="Su consulta profesional aquí..."
                                        rows={6}
                                    ></textarea>
                                </div>
                                <button
                                    className="w-full md:w-auto bg-[#005a5a] text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-[#267373] transition-all flex items-center justify-center gap-3"
                                    type="submit"
                                >
                                    Enviar Mensaje
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </form>
                        </div>

                        {/* Right: Administrative Details */}
                        <div className="space-y-16 lg:pl-12 lg:border-l border-[#e4e2e1]">
                            <div className="space-y-12">
                                {[
                                    { icon: 'location_on', title: 'Ubicación', content: 'Cordoba,  Cordoba, Argentina.' },
                                    { icon: 'schedule', title: 'Horario Académico', content: 'Lunes — Viernes: 08:00 a 21:30 | Sábados: 08:00 a 14:00 | Domingos: Cerrado' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-start">
                                        <div className="flex-shrink-0 bg-[#f6f3f2] p-4 text-[#005a5a]">
                                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-[#005a5a] uppercase mb-2">{item.title}</h3>
                                            <p className="text-[#3f4948] leading-relaxed whitespace-pre-line">{item.content}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 bg-[#f6f3f2] p-4 text-[#005a5a]">
                                        <span className="material-symbols-outlined text-3xl">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[#005a5a] uppercase mb-2">Canales Directos</h3>
                                        <p className="text-[#3f4948] leading-relaxed"><strong>Email:</strong> admissions@rookacademy.com</p>
                                        <p className="text-[#3f4948] leading-relaxed"><strong>Tel:</strong> +34 912 345 678</p>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Accent Card */}
                            <div className="bg-[#267373] p-10 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="font-bold text-[#ffffff] text-xl mb-4">¿Busca una evaluación de nivel?</h4>
                                    <p className="text-[#adf5f5]/80 mb-8 text-sm leading-relaxed">
                                        Ofrecemos pruebas de diagnóstico gratuitas para profesionales. Agende una sesión de 15 minutos con nuestros coordinadores académicos.
                                    </p>
                                    <a className="inline-block border-2 border-[#adf5f5] text-[#ffffff] px-6 py-3 font-semibold text-xs uppercase tracking-widest hover:bg-[#adf5f5] hover:text-[#267373] transition-all" href="#">
                                        Solicitar Prueba
                                    </a>
                                </div>
                                <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[#adf5f5]/10 text-[160px]">school</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="w-full bg-[#f6f3f2] py-1">
                    <div className="max-w-[1440px] mx-auto px-6 md:px-24 mb-12">
                        <h2 className="font-['Work_Sans'] text-xs uppercase tracking-[0.5em] text-stone-400 mb-8">Nuestra Red Global</h2>
                    </div>
                    <div className="relative h-[500px] w-full grayscale contrast-[1.1] brightness-[1.05] hover:grayscale-0 transition-all duration-700">
                        <img className="w-full h-full object-cover" src="trafalgar.jpeg" alt="Cordoba" />
                        <div className="absolute inset-0 bg-[#005a5a]/5 pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                            <div className="w-4 h-4 bg-[#005a5a] ring-8 ring-[#005a5a]/20"></div>
                            <div className="mt-4 bg-white px-4 py-2 shadow-sm font-['Work_Sans'] text-[10px] uppercase tracking-widest text-[#005a5a] border border-[#e4e2e1]">
                                Sede Central
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-white py-32 flex flex-col items-center text-center px-6">
                    <span className="material-symbols-outlined text-[#944921] text-5xl mb-8">format_quote</span>
                    <blockquote className="max-w-3xl font-light text-2xl md:text-3xl text-[#1b1c1c] leading-snug mb-8">
                        "La excelencia no es un acto, sino un hábito que se cultiva a través de la comunicación precisa y el rigor intelectual."
                    </blockquote>
                    <cite className="font-['Work_Sans'] text-sm uppercase tracking-widest text-[#005a5a] font-bold not-italic">— El Método Rook</cite>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-stone-200 bg-[#FCF9F8]">
                <div className="flex flex-col md:flex-row justify-between items-center py-12 px-12 w-full max-w-[1920px] mx-auto">
                    <div className="font-bold text-lg text-[#005A5A] mb-6 md:mb-0">
                        The Rook Academy
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
                        {['Privacidad', 'Términos', 'Cookies', 'Soporte'].map(link => (
                            <a key={link} className="font-['Work_Sans'] text-xs tracking-widest uppercase text-stone-500 hover:text-[#944921] transition-all decoration-[#944921] underline-offset-4 hover:underline" href="#">
                                {link}
                            </a>
                        ))}
                    </div>
                    <div className="font-['Work_Sans'] text-xs tracking-widest uppercase text-stone-500">
                        © 2024 The Rook Academy. Professional English Excellence.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Contact;