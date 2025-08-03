const pool = require('../models/db');

exports.criarAgendamento = async (req, res) => {
  const {
    nome,
    endereco,
    tipo_material,
    data_agendamento,
    telefone,
    email
  } = req.body;

  // Validação dos campos obrigatórios
  if (!nome || !endereco || !tipo_material || !data_agendamento || !telefone) {
    return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos' });
  }

  // Verifica se a data é no passado
  if (new Date(data_agendamento) < new Date().setHours(0, 0, 0, 0)) {
    return res.status(400).json({ message: 'Data inválida' });
  }

  try {
    await pool.query(
      `INSERT INTO agendamentos
      (nome, endereco, tipo_material, data_agendamento, telefone, email)
      VALUES ($1, $2, $3, $4, $5, $6)`,
      [nome, endereco, tipo_material, data_agendamento, telefone, email]
    );

    res.status(201).json({ message: 'Agendamento criado com sucesso.' });
  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
    res.status(500).json({ message: 'Erro ao salvar no banco' });
  }
};

