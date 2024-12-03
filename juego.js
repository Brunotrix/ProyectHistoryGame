document.addEventListener('DOMContentLoaded', () => {
            // Preguntas y respuestas
        const questions = [
            {
                question: "¿Por qué la Nueva España era la prisión de los monarcas españoles?",

                options: [" porque carecía de toda legalidad, .", "porque vivían los criollos", "Por ser libres soberano.", " Por ser libres y soberanos"],
                correct: 0,
                explanation: "La Nueva España era vista como una prisión porque las decisiones tomadas en ella carecían de legalidad para los monarcas españoles, especialmente durante los conflictos internos y externos que afectaron la legitimidad del trono en Europa."
            },
            {
                question: "¿Quién encabeza el movimiento de separación del gobierno de la Nueva España?",
                options: ["Miguel Hidalgo", "Francisco Primo de Verdad y Juan Francisco de Azcárate", "Ignacio Zaragoza", "Melchor de Talamantes."],
                correct: 1,
                explanation: ": Francisco Primo de Verdad y Juan Francisco de Azcárate impulsaron un movimiento temprano de independencia a través de propuestas legales y políticas, siendo precursores de la lucha por la soberanía.(página 129)."
            },
            {
                question: "¿En qué año se da una revuelta que destituyó al virrey y a los miembros del ayuntamiento, sustituyéndolos por personas leales a los intereses de los aristócratas peninsulares novohispanos?",
                options: ["1811.", "1810", "1808.", "1809"],
                correct: 2,
                explanation: ": La revuelta del 15 de septiembre de 1808 fue un evento clave en el que los peninsulares desplazaron a las autoridades locales para asegurar sus intereses ante la crisis política en España."
            },
            {
                question: "¿Qué buscaba la conspiración de Valladolid?",
                options: ["La recuperación de Guadalajara", " La esclavitud para siempre", " La destitución del virrey Iturrigaray", "Reivindicar el derecho de Fernando VII a la corona de España ."],
                correct: 3,
                explanation: "La conspiración buscaba afirmar el derecho de Fernando VII al trono mientras promovía ideas de autonomía política para la Nueva España. (Página 129)"
            },
            {
                question: "¿Quién creo la Constitución de Apatzingán?",

                options: ["José Maria Morelos y Pavón ", "Ignacio Allende .", "Miguel Hidalgo", "Félix María Calleja "],
                correct: 0,
                explanation: "Expiden en el congreso de Chilpancingo  en 1814 encabezado por José María Morelos y Pavón (Página 134 , parrafo 2)."
            },
            {
                question: "¿Qué postulan Los Sentimientos de la Nación?",
                options: ["La independencia, la democracia y la justicia social en el territorio mexicano", "La religión católica no es la única de la nación", "La soberanía pertenece a sus gobernantes.", " La sumisión total a España"],
                correct: 0,
                explanation: "Los Sentimientos de la Nación, redactados por Morelos, establecen principios clave como la independencia de México, el respeto a la justicia social y la búsqueda de un gobierno democrático (pagina 133)."
            },
            
            {
                question: "¿En qué fecha surge la segunda campaña, el sitio de Cuautla?",
                options: ["1811-1812","1812-1814.","1810-1814","1820-1824" ],
                correct: 0,
                explanation: " La segunda campaña insurgente, liderada por Morelos, incluyó el sitio de Cuautla entre 1811 y 1812, destacándose como un acto heroico que consolidó su liderazgo militar (pagina 132)"
            },{
                question: "Morelos logra tomar Oaxaca, con lo que controla",
                options: ["La región del Istmo de Tehuantepec.", "Zitácuaro", "Ciudad de México", "Puebla"],
                correct: 2,
                explanation: "La toma de Oaxaca en 1812 permitió a Morelos controlar la estratégica región del Istmo de Tehuantepec, asegurando rutas comerciales y militares clave para los insurgentes.(Pagina 132)"
            },
            {
                question: "¿Dónde se da la campaña más importante de Morelos?",
                options: ["En Cuatla. ", "En Morelos", "Cuidad de México", "Hidalgo"],
                correct: 0,
                explanation: "La resistencia insurgente de Cuautla es considerada la campaña más importante de Morelos, pues demostró su habilidad estratégica y fortaleció la causa independentista. (132 paginas )"
            },{
                question: "¿Cuál era la importancia de apoderarse de Acapulco?",

                options: [" Por el comercio que recibían de Filipinas.", "Por las plazas más importantes del norte.", "Por las provincias que existían.","Por las rutas hacia Centroamérica" ],
                correct: 1,
                explanation: "Acapulco era importante por su conexión con el comercio transpacífico, especialmente con Filipinas, que representaba una fuente significativa de recursos y control estratégico. (pagina 132)"
            },{
                question: "¿Qué simbolizaba el uso de la bandera de Guadalupe en el ejército insurgente?",

                options: ["La imposición de la religión católica.", "Estrategia Para atraer legalidad de los creyentes.", "La lucha por la independencia bajo un símbolo religioso","La sumisión al poder eclesiástico." ],
                correct: 1,
                explanation: " La Virgen de Guadalupe representaba un símbolo unificador y motivacional, especialmente para las masas, lo que ayudó a consolidar el apoyo popular a la causa insurgente (página 130) "
            },{
                question: "¿En qué año surge la quinta campaña del ocaso militar?",

                options: ["1813-1815.", "1812-1813 ", " 1813-1814","1811-1812" ],
                correct: 0,
                explanation: " La quinta campaña insurgente (1813-1815) marcó el declive militar de Morelos, enfrentándose a mayores dificultades frente a las fuerzas realistas (pagina 133)."
            },{
                question: "¿Qué personaje fue elegido como caudillo durante las reuniones?",

                options: ["Ignacio Zaragoza", "Agustin de iturbide.", "Napoleon.","Fernando VII." ],
                correct: 1,
                explanation: "Fue recomendo ante el virrey para dirigir las acciones en el sur del territorio contra Vicente Guerrero (Pagina 137) "
                
            },{
                question: "¿Qué resultado tuvo la participación de Morelos en la Tercera Campaña?",

                options: ["La toma de Guadalajara.", "La conquista de Oaxaca", "La captura de Valladolid. ","El inicio del sitio de Cuautla" ],
                correct: 1,
                explanation: "La Tercera Campaña de Morelos en 1812 resultó en la toma de Oaxaca, una ciudad clave para fortalecer la resistencia insurgente en el sur del país (página 133)."
            },{
                question: "¿Dónde fue fusilado Morelos?",

                options: ["En cuatla.", "En Acapulco.", " En Oaxaca","En ecatepec" ],
                correct: 1,
                explanation: "Morelos fue fusilado en Ecatepec el 22 de diciembre de 1815, tras ser capturado por las fuerzas realistas (pagina 133)."
            },{
                question: "Nombre del pacto de Agustin de Iturbide Y Guerrero",

                options: ["Abrazo de acatempan", "Tratado de cordoba", "Plan de Iguala","Tratado de Versalles" ],
                correct: 0,
                explanation: "El abrazo de acatempan dio un pacto de tregua entre guerrero y Agustin de itubirde dando paso a la consumación (Pagina 137)"
            },{
                question: " ¿Cuál fue el principal representante del proyecto independentista renovador durante la consumación?",

                options: ["Miguel Hidalgo y Costilla.", "José María Morelos y Pavón.", " Agustín de Iturbide","Ignacio Allende." ],
                correct: 2 ,
                explanation: "El proyecto renovador se caracterizó por ser liderado por Agustín de Iturbide, quien planteaba crear una nación desvinculada de España con posibilidad de un monarca europeo. (Página 137)."
            },{
                question: " ¿En qué año comenzó el movimiento armado de la Independencia de México ?",

                options: ["1808", "1810.", "1815","1820" ],
                correct: 1,
                explanation: "El movimiento armado comenzó en 1810 con el levantamiento de Miguel Hidalgo, marcando la etapa de iniciación. (Página 130)"
            },{
                question: " ¿Cuál fue el principal objetivo del Plan de Iguala?",

                options: ["Declarar la independencia de Nueva España. ", " Proponer una reforma agraria en favor de los indígenas.", "Establecer una república democrática","Crear un protectorado bajo la corona francesa." ],
                correct: 0,
                
                explanation: "El Plan de Iguala buscaba establecer la independencia de Nueva España bajo un sistema monárquico constitucional. (Página 137)"}


            // Agrega más preguntas aquí
        ];
        class IndependenceGame {
            constructor() {
                this.currentQuestions = [];
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.timeLeft = 300; // 5 minutes
                this.gameTimer = null;
                this.userAnswers = [];
                this.reviewMode = false;
    
                this.initializeEventListeners();
            }
    
            initializeEventListeners() {
                // Welcome screen start button
                document.querySelector('#welcome-screen button')?.addEventListener('click', this.startGame.bind(this));
    
                // Game navigation buttons
                document.getElementById('prev-question')?.addEventListener('click', this.showPreviousQuestion.bind(this));
                document.getElementById('next-question')?.addEventListener('click', this.showNextQuestion.bind(this));
                document.getElementById('finish-game')?.addEventListener('click', this.endGame.bind(this));
    
                // Restart game buttons
                document.querySelectorAll('button[onclick="restartGame()"]').forEach(button => {
                    button.addEventListener('click', this.restartGame.bind(this));
                });
            }
    
            prepareQuestions() {
                // Shuffle questions 
                this.currentQuestions = questions
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 20); // Select 20 random questions
                this.userAnswers = new Array(this.currentQuestions.length).fill(null);
            }
    
            startGame() {
                const playerName = document.getElementById('player-name').value;
                if (!playerName) {
                    alert('Por favor ingresa tu nombre');
                    return;
                }
    
                document.getElementById('welcome-screen').style.display = 'none';
                document.getElementById('game-screen').style.display = 'block';
    
                this.prepareQuestions();
                this.startTimers();
                this.showQuestion();
            }
    
            restartGame() {
                // Reset all game states
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.timeLeft = 300;
                this.userAnswers = [];
    
                // Hide results screen
                document.getElementById('results-screen').style.display = 'none';
                
                // Show welcome screen
                document.getElementById('welcome-screen').style.display = 'block';
                
                // Reset player name input
                document.getElementById('player-name').value = '';
            }
    
            startTimers() {
                this.gameTimer = setInterval(() => {
                    this.timeLeft--;
                    this.updateTimer();
                    if (this.timeLeft <= 30) {
                        document.getElementById('timer').classList.add('warning');
                    }
                    if (this.timeLeft <= 0) {
                        this.endGame();
                    }
                }, 1000);
            }
    
            updateTimer() {
                const minutes = Math.floor(this.timeLeft / 60);
                const seconds = this.timeLeft % 60;
                document.getElementById('timer').textContent = 
                    `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }
    
            showQuestion() {
                if (this.currentQuestionIndex >= this.currentQuestions.length) {
                    this.endGame();
                    return;
                }
    
                const question = this.currentQuestions[this.currentQuestionIndex];
                document.getElementById('question').textContent = question.question;
                
                // Update progress tracker
                document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
                
                const optionsContainer = document.getElementById('options');
                optionsContainer.innerHTML = '';
                
                question.options.forEach((option, index) => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.onclick = () => this.selectAnswer(index);
                    
                    // Restore previous selection if exists
                    if (this.userAnswers[this.currentQuestionIndex] !== null) {
                        if (index === this.userAnswers[this.currentQuestionIndex]) {
                            button.classList.add('selected');
                        }
                    }
                    
                    optionsContainer.appendChild(button);
                });
    
                // Update navigation buttons
                this.updateNavigationButtons();
            }
    
            selectAnswer(selectedIndex) {
                const optionButtons = document.querySelectorAll('#options button');
                
                // Remove any previous selections
                optionButtons.forEach((button) => {
                    button.classList.remove('selected');
                });
    
                // Highlight selected answer
                optionButtons[selectedIndex].classList.add('selected');
                
                // Store user's answer
                this.userAnswers[this.currentQuestionIndex] = selectedIndex;
            }
    
            updateNavigationButtons() {
                const prevButton = document.getElementById('prev-question');
                const nextButton = document.getElementById('next-question');
                const finishButton = document.getElementById('finish-game');
                
                // Previous button always visible
                prevButton.style.display = 'inline-block';
                
                // Next/Finish button logic
                if (this.currentQuestionIndex === this.currentQuestions.length - 1) {
                    nextButton.style.display = 'none';
                    finishButton.style.display = 'inline-block';
                } else {
                    nextButton.style.display = 'inline-block';
                    finishButton.style.display = 'none';
                }
            }
    
            showPreviousQuestion() {
                if (this.currentQuestionIndex > 0) {
                    this.currentQuestionIndex--;
                    this.showQuestion();
                }
            }
    
            showNextQuestion() {
                if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
                    this.currentQuestionIndex++;
                    this.showQuestion();
                }
            }
    
            endGame() {
                // Stop the timer
                clearInterval(this.gameTimer);
    
                // Calculate score
                this.score = this.userAnswers.reduce((total, answer, index) => {
                    return answer === this.currentQuestions[index].correct ? total + 100 : total;
                }, 0);
    
                // Change screens
                document.getElementById('game-screen').style.display = 'none';
                document.getElementById('results-screen').style.display = 'block';
    
                // Calculate time spent
                const timeSpent = 300 - this.timeLeft;
                const minutes = Math.floor(timeSpent / 60);
                const seconds = timeSpent % 60;
    
                // Count correct answers
                const correctAnswersCount = this.userAnswers.filter((answer, index) => 
                    answer === this.currentQuestions[index].correct
                ).length;
    
                // Show final stats
                document.getElementById('final-stats').innerHTML = `
                    <h3>Estadísticas finales</h3>
                    <p><strong>Puntuación final:</strong> ${this.score} puntos</p>
                    <p><strong>Tiempo usado:</strong> ${minutes}:${seconds.toString().padStart(2, '0')}</p>
                    <p><strong>Preguntas correctas:</strong> ${correctAnswersCount} de ${this.currentQuestions.length}</p>
                `;
    
                // Show question details
                const wrongAnswersContainer = document.getElementById('wrong-answers');
                wrongAnswersContainer.innerHTML = '<h3>Detalle de Preguntas</h3>';
                
                this.currentQuestions.forEach((question, index) => {
                    const userAnswer = this.userAnswers[index];
                    const isCorrect = userAnswer === question.correct;
                    
                    wrongAnswersContainer.innerHTML += `
                        <div class="wrong-answer ${isCorrect ? 'correct' : 'incorrect'}">
                            <p><strong>Pregunta:</strong> ${question.question}</p>
                            <p><strong>Tu respuesta:</strong> ${userAnswer !== null ? question.options[userAnswer] : 'No respondida'}</p>
                            <p><strong>Respuesta correcta:</strong> ${question.options[question.correct]}</p>
                            <p><strong>Explicación:</strong> ${question.explanation}</p>
                        </div>
                    `;
                });
            }
        }
    
        // Initialize the game
        const game = new IndependenceGame();
    
        // Expose methods globally for any potential inline event handlers
        window.startGame = () => game.startGame();
        window.restartGame = () => game.restartGame();
        window.endGame = () => game.endGame();
    });
        
        // Ensure these functions are globally accessible
        window.startGame = startGame;
        window.restartGame = restartGame;
        window.endGame = endGame;
