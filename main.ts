let m_dir = 0
let m_esq = 0
let P = 0
let I = 0
let D = 0
let virar = 0
let erro = 0
let erroAnt = 0
let vel = 100
let Kp = 150
let Ki = 5
let Kd = 70
basic.forever(function () {
    erro = maqueen.readPatrol(maqueen.Patrol.PatrolLeft) - maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    P = Kp * erro
    I = I + Ki * erro
    D = (erro - erroAnt) * Kd
    virar = P + (I + D)
    m_esq = vel + virar
    m_dir = vel - virar
    if (m_esq > 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, m_esq)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, Math.abs(m_esq))
    }
    if (m_dir > 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, m_dir)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, Math.abs(m_dir))
    }
    erroAnt = erro
})
