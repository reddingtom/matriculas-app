import { Router, Request, Response } from 'express';
import { Matricula, Curso } from './types';

const router = Router();

const cursos: Curso[] = [
  { id: 1, nome: 'Desenvolvimento Web' },
  { id: 2, nome: 'Data Science' },
  { id: 3, nome: 'UX/UI Design' },
];

router.get('/cursos', (req: Request, res: Response) => {
  res.json(cursos);
});

router.post('/matricula', (req: Request, res: Response) => {
  const { nome, email, curso } = req.body as Matricula;

  if (!nome || !email || !curso) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  console.log('Nova matrícula:', { nome, email, curso });
  res.status(201).json({ message: 'Matrícula criada com sucesso!' });
});

export default router;
