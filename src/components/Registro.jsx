// Registro.js
import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

const Registro = () => {
    return (
        <div className="container mt-5">
            <div className="card text-center">
                <div className="card-header">
                    <h1>Crear una cuenta</h1>
                </div>
                <div className="card-body">
                    <SocialButton icon="facebook" />
                    <SocialButton icon="github" />
                    <SocialButton icon="linkedin" />
                    <p>O usa tu email para registrarte</p>
                    <Formulario />
                </div>
                <div className="card-footer">
                    <Alert />
                </div>
            </div>
        </div>
    );
};

export default Registro;
