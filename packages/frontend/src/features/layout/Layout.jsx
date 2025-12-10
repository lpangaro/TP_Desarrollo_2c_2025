import { Outlet } from "react-router";
import React, { useState } from "react";
import Header from "../../components/headers/Header.jsx";
import { useAppContext } from '../../context/AppContext';
import Navbar from "../../components/navbar/Navbar.jsx"
import Footer from "../../components/footer/Footer.jsx";
import './Layout.css'
import PropTypes from 'prop-types';

const Layout = ({ carrito = [], filtrarProductos }) => {
    const [vendedor, setVendedor] = useState(null);
    const { user } = useAppContext();
    const nombre = user && user.nombre ? user.nombre : null;

    return (
        <>
            <Header nombre={nombre} carrito={carrito} filtrarProductos={filtrarProductos} />
            {/* <Navbar carrito={carrito} filtrarProductos={filtrarProductos}></Navbar> */}
            <Outlet context={{ setVendedor }} />
            <Footer vendedor={vendedor} />
        </>
    );
}

Layout.propTypes = {
    carrito: PropTypes.array,
    filtrarProductos: PropTypes.func.isRequired
};

export default Layout;