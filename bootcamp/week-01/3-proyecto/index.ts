// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// Dominio: App de Meditación y Mindfulness
// ============================================

console.log('PROYECTO SEMANAL: MODELADO DE ENTIDADES\n');

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

// QUÉ: Interface que representa una sesión de meditación
// PARA: Modelar la información principal de la app
// IMPACTO: Estructura clara y tipada de los datos
interface MeditationSession {
  id: number;
  title: string;
  durationMinutes: number;
  type: MeditationType;
  status: SessionStatus;
}

// QUÉ: Interface relacionada que representa al usuario
// PARA: Asociar sesiones de meditación a una persona
// IMPACTO: Permite escalar el sistema a múltiples usuarios
interface User {
  id: number;
  name: string;
}

// ============================================
// 2. Usa type unions y literales para propiedades clave
// ============================================

// QUÉ: Estados posibles de una sesión
// PARA: Controlar el progreso de la meditación
// IMPACTO: Evita estados inválidos
type SessionStatus = 'planned' | 'completed';

// QUÉ: Tipos permitidos de meditación
// PARA: Diferenciar las prácticas de mindfulness
// IMPACTO: Mejora la organización del dominio
type MeditationType = 'guided' | 'silent' | 'breathing';

// ============================================
// 3. Implementa funciones tipadas para operaciones básicas
// ============================================

const sessions: MeditationSession[] = [];
let currentId = 1;

// QUÉ: Crea una nueva sesión de meditación
// PARA: Registrar sesiones dentro de la aplicación
// IMPACTO: Permite gestionar la práctica del usuario
function createSession(
  title: string,
  durationMinutes: number,
  type: MeditationType
): MeditationSession {
  const newSession: MeditationSession = {
    id: currentId++,
    title,
    durationMinutes,
    type,
    status: 'planned',
  };

  sessions.push(newSession);
  return newSession;
}

// QUÉ: Lista todas las sesiones registradas
// PARA: Visualizar el historial de meditaciones
// IMPACTO: Facilita el seguimiento del progreso
function listSessions(): MeditationSession[] {
  return sessions;
}

// QUÉ: Filtra sesiones según su estado
// PARA: Separar sesiones planeadas y completadas
// IMPACTO: Mejora la organización y análisis
function filterByStatus(status: SessionStatus): MeditationSession[] {
  return sessions.filter(session => session.status === status);
}

// ============================================
// 4. Prueba tus funciones con datos de ejemplo
// ============================================

createSession('Meditación Matutina', 10, 'guided');
createSession('Respiración Consciente', 5, 'breathing');

console.log(' Todas las sesiones:');
console.log(listSessions());

console.log('\n Sesiones planeadas:');
console.log(filterByStatus('planned'));

// ============================================
// 5. Comenta tu código explicando qué/para/impacto
// ============================================

// QUÉ: Se modeló una app de meditación usando TypeScript
// PARA: Practicar interfaces, types y funciones tipadas
// IMPACTO: Código más seguro, mantenible y escalable

