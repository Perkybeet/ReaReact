import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RiAccountCircleLine } from 'react-icons/ri';
import { MdExitToApp } from 'react-icons/md';
import axios from 'axios';

const Nav = () => (

  <>
    <p id="btnListado">Listado</p>
    <p id="date_now">Admin // Luuma</p>
    <div>
      <RiAccountCircleLine id="icon_contact" onClick={() => { window.location.href = './admin.php'; }} className="material-icons"/>

      <MdExitToApp  id="icon_logout" onClick={() => { window.location.href = './admin/process/logout.php?result=destroy'; }} className="material-icons"/>
    </div>
  </>
)

const Body = () => {

  const table_check = () => {
    // Aquí puedes realizar cualquier lógica que desees para la validación o el manejo del evento onChange
    console.log('Input de la mesa cambió');
  };
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    // Ajustar el formato a dos dígitos para el mes y día si son menores a 10
    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  };

  const handleReservarClick = async () => {
    try {
      // Crear el objeto formData con todos los valores del formulario
      const formData = {

        errno: 1064,
        name: document.getElementById('name').value,
        persons: document.getElementById('persons').value,
        table: document.getElementById('mesalibre').value,
        time: document.getElementById('time').value,
        date: document.getElementById('date').value,
        note: document.getElementById('note').value,
        tel: document.getElementById('tel').value,
        email: document.getElementById('email').value,
        dep: document.getElementsByName('dep')[0].value,
        // ...otros campos del formulario
      };

      // Realiza una solicitud HTTP POST al servidor backend
      const response = await axios.post('http://192.168.1.37:5000/reservar', formData);

      // Aquí puedes manejar la respuesta del servidor backend
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      // Manejo de errores
      console.error('Error al hacer la reserva:', error);
    }
  };

  return (
  <div className="gContainer">
    <div className="container">
      <div className="taskContainer">
        <div className="taskBody">
          <form className="form" method="post" action="http://192.168.1.37:5000/reservar">
            <input type="text" name="id" id="id" hidden />
            <input placeholder="Nombre" type="text" name="name" id="name" required />
            <br />
            <input placeholder="Personas" type="tel" name="persons" id="persons" min="0" required />
            <br />
            <input placeholder="Mesa" type="number" onChange={table_check()} pattern="[0-9]" name="table" id="mesalibre" required />
            <br />
            <input placeholder="Hora" type="time" name="time" id="time" defaultValue="19:00" required />
            <br />
            <input type="date" name="date" id="date" defaultValue={getCurrentDate()} required />
            <br />
            <input placeholder="Nota" name="note" id="note" />
            <br />
            <input placeholder="Teléfono" name="tel" id="tel" />
            <br />
            <input placeholder="Correo Electrónico" name="email" id="email" />
            <br />
              <select name="dep" defaultValue="Sin deposito">
                <option value="Sin deposito">Sin Deposito</option>
                <option value="20€">20 €</option>
                <option value="50€">50 €</option>
                <option value="100€">100 €</option>
              </select>
            <br /><br />
            <center>
              <input className="btnReservar" type="submit" value="Reservar" id="bt_reservar" onClick={handleReservarClick} /><br />
              <span style={{ color: 'rgb(51, 51, 51)', fontWeight: 100, fontSize: '10px' }}>&copy;2022 - Yago López Prado - v2.01</span>
            </center>
            <script src="./src/js/app.js"></script>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <nav>
      <Nav />
    </nav>
    <Body />
  </>
);