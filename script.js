:root {
    --eva-purple: #5c2c7d;
    --eva-purple-dark: #2a113b;
    --eva-green: #00ff66;
    --eva-orange: #ff5500;
    --eva-black: #0d0d11;
    --eva-gray: #1c1c24;
    --eva-light: #e2e2e9;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Roboto, sans-serif;
}

body {
    background-color: var(--eva-black);
    color: var(--eva-light);
    overflow-x: hidden;
}

/* Moldura Estilo Nerv */
body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    border: 2px solid var(--eva-orange);
    pointer-events: none;
    z-index: 999;
    opacity: 0.3;
}

/* Header */
header {
    background-color: var(--eva-purple-dark);
    border-bottom: 3px solid var(--eva-green);
    padding: 20px;
    text-align: center;
    position: relative;
}

header h1 {
    color: var(--eva-green);
    font-size: 2.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 0 10px var(--eva-green);
}

header p {
    color: var(--eva-orange);
    font-weight: bold;
    letter-spacing: 1px;
    margin-top: 5px;
}

/* Container Principal */
.container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
}

/* Painel de Alerta/Introdução */
.intro-panel {
    background: linear-gradient(135deg, var(--eva-gray), #15151f);
    border-left: 5px solid var(--eva-orange);
    padding: 25px;
    margin-bottom: 40px;
    position: relative;
}

.intro-panel h2 {
    color: var(--eva-orange);
    margin-bottom: 15px;
    text-transform: uppercase;
}

/* Grid de Conteúdo */
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
}

@media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; }
}

/* Cards Ciber-Orgânicos */
.card {
    background-color: var(--eva-gray);
    border: 1px solid var(--eva-purple);
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    border-color: var(--eva-green);
    box-shadow: 0 0 15px rgba(0, 255, 102, 0.2);
}

.card-header {
    background-color: var(--eva-purple);
    padding: 15px;
    color: var(--eva-green);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.card-body {
    padding: 20px;
    line-height: 1.6;
}

/* Representações Visuais Interativas (Efeito Grid Holográfico) */
.visual-container {
    height: 200px;
    background-color: #050507;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-bottom: 2px solid var(--eva-purple);
}

.visual-container::before {
    content: '';
    position: absolute;
    width: 200%; height: 200%;
    background-image: linear-gradient(rgba(0,255,102,0.1) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(0,255,102,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    transform: perspective(500px) rotateX(60deg);
    top: -50%;
    animation: gridMove 10s linear infinite;
}

@keyframes gridMove {
    0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
    100% { transform: perspective(500px) rotateX(60deg) translateY(20px); }
}

/* Elementos dos Gráficos HUD */
.hud-element {
    position: relative;
    z-index: 2;
    text-align: center;
    border: 2px dashed var(--eva-orange);
    padding: 15px;
    background: rgba(13, 13, 17, 0.8);
}

.hud-circle {
    width: 80px; height: 80px;
    border: 4px solid var(--eva-green);
    border-radius: 50%;
    margin: 0 auto 10px;
    animation: spin 4s linear infinite;
    border-top-color: transparent;
}

@keyframes spin { 100% { transform: rotate(360deg); } }

/* Destaque para Sustentabilidade */
.sustentabilidade-section {
    background: linear-gradient(to right, var(--eva-purple-dark), var(--eva-black));
    border: 2px solid var(--eva-green);
    padding: 30px;
    border-radius: 4px;
    text-align: center;
}

.sustentabilidade-section h2 {
    color: var(--eva-green);
    text-transform: uppercase;
    margin-bottom: 20px;
    text-shadow: 0 0 8px var(--eva-green);
}

/* Botão Interativo */
.eva-btn {
    background-color: transparent;
    color: var(--eva-orange);
    border: 2px solid var(--eva-orange);
    padding: 12px 30px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
    letter-spacing: 2px;
}

.eva-btn:hover {
    background-color: var(--eva-orange);
    color: var(--eva-black);
    box-shadow: 0 0 15px var(--eva-orange);
}

/* Rodapé */
footer {
    background-color: #050507;
    text-align: center;
    padding: 20px;
    color: #555;
    font-size: 0.8rem;
    border-top: 1px solid var(--eva-purple);
    margin-top: 40px;
}
