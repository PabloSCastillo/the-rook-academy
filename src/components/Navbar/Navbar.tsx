import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    // Definimos el estado booleano para el menú
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#FCF9F8] dark:bg-slate-900 border-b border-gray-200 shadow-sm">
            <div className="flex justify-between items-center px-4 md:px-12 py-4 max-w-[1440px] mx-auto">

                {/* LADO IZQUIERDO: Logo */}
                <div className="flex items-center gap-3">
                    <img
                        alt="The Rook Academy Logo"
                        className="h-10 w-10 object-contain"
                        src="./logo.jpeg"
                    />
                    <span className="font-['Manrope'] font-black text-[#005A5A] dark:text-[#267373] text-xl tracking-tighter uppercase">
                        The Rook <small className="text-[#944921] text-sm">Academy</small>
                    </span>
                </div>

                {/* CENTRO: Navegación Desktop (Oculto en móvil) */}
                <div className="hidden md:flex items-center space-x-10">
                    <NavLinks handleAction={closeMenu} />
                </div>

                {/* LADO DERECHO: Botón y Hamburguesa */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block bg-[#004d4d] text-white px-6 py-3 font-headline font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#005A5A] transition-all duration-300">
                        Consulta Ahora
                    </button>

                    {/* Botón Hamburguesa */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-600 dark:text-white p-2 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* MENÚ MÓVIL (Desplegable con Tailwind) */}
            <div className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#FCF9F8] dark:bg-slate-900 border-b border-gray-200`}>
                <div className="flex flex-col items-center py-8 space-y-6">
                    <NavLinks handleAction={closeMenu} />
                    <button className="sm:hidden bg-[#004d4d] text-white px-8 py-3 font-headline font-bold text-[10px] uppercase tracking-[0.2em]">
                        Consulta Ahora
                    </button>
                </div>
            </div>
        </nav>
    );
};

// --- Sub-componente con Typescript ---
interface NavLinksProps {
    handleAction: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ handleAction }) => {
    const links = [
        { name: 'Inicio', path: '/' },
        { name: 'Cursos', path: '/cursos' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    to={link.path}
                    onClick={handleAction} // Cierra el menú al hacer click
                    className="font-headline font-bold uppercase tracking-widest text-xs text-gray-500 hover:text-[#005A5A] transition-colors"
                >
                    {link.name}
                </Link>
            ))}
        </>
    );
};

export default Navbar;