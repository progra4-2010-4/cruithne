#language: es
Característica: Autenticar usuarios
	Para poder salvar tablaturas
	Como un participante
	Quiero estar identificado y autenticado

	Escenario: Un usuario no autenticado entra
	        Dado que no estoy autenticado
		Cuando voy a la página raíz
		Entonces debería ver "Login"
		Y debería ver "Registrarse"
		Y debería ver "Crear Tablatura"
