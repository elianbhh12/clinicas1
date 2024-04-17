import Doctor from '../models/Doctor.js';

const cdoctores = async (req, res) => {
  try {
    const doctor = new Doctor(req.body); 
    const doctorGuardado = await doctor.save(); 

    res.json({ mensaje: 'registrando un nuevo doctor' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Hubo un error' });
  }
};

export {
    cdoctores
}