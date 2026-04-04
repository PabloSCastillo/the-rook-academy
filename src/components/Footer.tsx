const Footer = () => {
    return (
        <footer className="bg-surface border-t border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-20 max-w-screen-2xl mx-auto">

                {/* Columna 1: Branding y Descripción */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-primary">
                        <img
                            alt="The Rook Academy Logo"
                            className="h-4 w-4 object-contain"
                            src="./logo.jpeg"
                        />
                        <span className="font-['Manrope'] font-black text-[#005A5A] dark:text-[#267373] text-base tracking-tighter uppercase">
                            The Rook <small className="text-[#944921] text-xs">Academy</small></span>
                    </div>
                    <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                        Liderando la formación lingüística de élite con un enfoque en el rigor académico y la excelencia profesional.
                    </p>
                    <p className="font-label uppercase text-[10px] font-bold tracking-[0.3em] text-on-surface/40">
                        © 2026 The Rook Academy. The Intellectual Horizon.
                    </p>
                </div>

                {/* Columna 2: Enlaces Rápidos (Recursos) */}
                <div className="flex flex-col gap-8">
                    <h4 className="font-label uppercase text-xs font-bold tracking-[0.3em] text-primary">
                        Recursos Académicos
                    </h4>
                    <ul className="flex flex-col gap-4">
                        {['Portal de Alumnos', 'Investigación', 'Contacto', 'Privacidad'].map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="text-on-surface/60 hover:text-secondary transition-all font-body text-sm font-medium"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna 3: Newsletter */}
                <div className="flex flex-col gap-8">
                    <h4 className="font-label uppercase text-xs font-bold tracking-[0.3em] text-primary">
                        Boletín Académico
                    </h4>
                    <p className="text-on-surface/60 font-body text-sm">
                        Subscríbase para recibir artículos de investigación y actualizaciones de programas.
                    </p>
                    <div className="flex group">
                        <input
                            className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-primary p-4 font-body text-sm placeholder:text-on-surface/40"
                            placeholder="Email institucional"
                            type="email"
                        />
                        <button className="bg-primary text-on-primary px-6 hover:bg-primary-container transition-colors flex items-center justify-center">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;