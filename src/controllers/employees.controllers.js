import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees WHERE 1 = 1;');
        console.log('listando...');
        res.send({ rows });
    } catch (error) {
        return res.status(500).json ({
            message: 'Algo ha salido mal'
        });
    }
}

export const getEmployee = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT *  FROM employees WHERE id=?', [req.params.id]);
        console.log(req.params);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found',
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json ({
            message: 'Algo ha salido mal'
        });
    }

}

export const createEmployees = async (req, res) => {
  
    try {
        const { name, salary } = req.body;
        const [rows] = await pool.query('INSERT INTO employees (name, salary) VALUES (?,?)', [name, salary]);
        console.log(req.body);
        res.send({ 
            id: rows.insertId, 
            name,
            salary
        });
    } catch (error) {
        return res.status(500).json ({
            message: 'Algo ha salido mal'+error
        });
    }
}

export const updateEmployees = async (req, res) => {
    const id = req.params.id;
    const { name, salary } = req.body;
    console.log(id, name, salary);
   
    try {
        const [result] = await pool.query('UPDATE employees  SET name = IFNULL(?,name), salary=IFNULL(?,salary) WHERE id=?', [name, salary, id]);
        if (result.affectedRows === 0) return res.status(404).json(
            { message: 'No existe el empleado con ID=' + id }
        );
    
        const [rows] = await pool.query('SELECT * FROM employees WHERE id=?', [id]);
    
        res.json(rows[0]);
        
    } catch (error) {
        return res.status(500).json ({
            message: 'Algo ha salido mal'
        });
    }
}

export const deleteEmployees = async (req, res) => {
  
    try {
        const [result] = await pool.query('DELETE FROM employees WHERE id =?', [req.params.id]);
        if (result.affectedRows < 1) return res.status(404).json({
            message: 'Employee does not exist'
        });
        console.log(result);
        res.sendStatus(204); 
    } catch (error) {
        return res.status(500).json ({
            message: 'Algo ha salido mal'
        });
    }
}
