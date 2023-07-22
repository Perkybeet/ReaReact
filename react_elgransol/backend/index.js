const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConfig = {
  host: 'localhost',
  user: 'admin',
  password: '2003',
  database: 'reservas',
};

const executeQuery = (query) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err) => {
      if (err) {
        reject(err);
      }

      connection.query(query, (error, results) => {
        connection.end();
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    });
  });
};

app.post('/reservar', async (req, res) => {
  try {
    const { name, persons, table, time, date, note, tel, email, dep } = req.body;

    const query = `INSERT INTO reservas (nombre, dia, hora, mesa, personas, nota, deposito, telefono, email) VALUES ('${name}', '${date}', '${time}', '${table}', '${persons}', '${note}', '${dep}', '${tel}', '${email}');`;
    const results = await executeQuery(query);

    res.json({ success: true, message: 'Reserva realizada con éxito.', results });
  } catch (error) {
    console.error('Error al realizar la reserva:', error);
    res.status(500).json({ success: false, message: 'Error al realizar la reserva.' });
  }
});

app.listen(5000, () => {
  console.log('Servidor backend en ejecución en http://localhost:5000');
});