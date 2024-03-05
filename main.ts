let P = 0
let I = 0
let D = 0
let virar = 0
let erro = 0
let erroAnt = 0
let vel = 40
let Kp = 40
let Ki = 0.25
let Kd = 5
basic.forever(function () {
    erro = maqueen.readPatrol(maqueen.Patrol.PatrolLeft) - maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    P = Kp * erro
    I = I + Ki * erro
    D = (erro - erroAnt) * Kd
    virar = P + (I + D)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vel + virar)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vel - virar)
    erroAnt = erro
})
