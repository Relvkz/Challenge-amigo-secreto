// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar la lista de amigos
        let listaAmigos = [];
        
        // Función para agregar un amigo a la lista
        function agregarAmigo() {
            const input = document.getElementById('amigo');
            const nombre = input.value.trim();
            
            // Validar que el campo no esté vacío
            if (nombre === '') {
                alert('Por favor, escribe un nombre válido.');
                return;
            }
            
            // Agregar el nombre al array
            listaAmigos.push(nombre);
            
            // Actualizar la lista visual
            actualizarListaAmigos();
            
            // Limpiar el campo de entrada
            input.value = '';
            input.focus();
        }
        
        // Función para actualizar la lista visual de amigos
        function actualizarListaAmigos() {
            const listaAmigosElement = document.getElementById('listaAmigos');
            
            // Limpiar la lista actual
               listaAmigosElement.innerHTML = '';
            
            // Si la lista está vacía, mostrar mensaje
            if (listaAmigos.length === 0) {
                listaAmigosElement.innerHTML = '<li class="empty-message">La lista está vacía</li>';
                return;
            }
            
            // Agregar cada amigo a la lista visual
            listaAmigos.forEach((amigo, index) => {
                const li = document.createElement('li');
                li.textContent = amigo;

                listaAmigosElement.appendChild(li);
            });
        }
        
        // Función para eliminar un amigo de la lista
        function eliminarAmigo(index) {
            listaAmigos.splice(index, 1);
            actualizarListaAmigos();
        }
        
        // Función para sortear un amigo aleatorio
        function sortearAmigo() {
            // Verificar que haya amigos en la lista
            if (listaAmigos.length === 0) {
                alert('No hay amigos en la lista para sortear.');
                return;
            }
            
            // Seleccionar un amigo aleatorio
            const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
            const amigoGanador = listaAmigos[indiceAleatorio];
            
            // Mostrar el resultado
            const resultadoElement = document.getElementById('resultado');
            resultadoElement.innerHTML = '';
            
            const li = document.createElement('li');
            li.textContent = `¡El amigo sorteado es: ${amigoGanador}!`;
            li.className = 'winner';
            resultadoElement.appendChild(li);
        }
        
        // Función para limpiar toda la lista
        function limpiarLista() {
            if (listaAmigos.length === 0) {
                alert('La lista ya está vacía');
                return;
            }
            
            if (confirm('¿Estás seguro de que quieres limpiar toda la lista?')) {
                listaAmigos = [];
                actualizarListaAmigos();
                
                // Limpiar también el resultado del sorteo
                document.getElementById('resultado').innerHTML = 
                    '<li class="empty-message">Aún no se ha realizado ningún sorteo</li>';
            }
        }
        
        // Permitir agregar amigos presionando Enter
        document.getElementById('amigo').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                agregarAmigo();
            }
        });