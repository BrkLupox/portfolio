particlesJS("background" , { 

    particles: {
        number: {
            value: 15, // numero de particulas (Quantia)
            density: {
                enable: true,
                value_area: 300, // Area onde a particula vai ser distribuida
            },
        },

        color: {
            value: "#ffffff", // Cor da particula
        },
        shape: {
            type: "triangle" , // Forma da particula
        },
        opacity: {
            value: 0.8,
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5, // Tamanho base das particulas
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },
        
        // Conectando Linhas
        line_linked: {
            enable: true,
            distance: 150, // Distancia maxima entre particulas linkadas
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        // Movimento da particula
        move: {
            enbale: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Comportamento quando a particula se movem fora das bordas
            bounce: false,
        },
    },
    // Configurações de interação
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, // Habilitar interação estavel
                mode: "repulse",
            },
            onclick : {
                enable: true, // Habilitar para clicar
                mode: "push", // Pushar particulas ao clickar
            },
            resize: true, // Redimencionar animação de particula no redimencionamento de tela
        },
    },

    // Detectar display de retina
    retina_detect: true,

});
        
                





        