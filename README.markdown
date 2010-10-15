#Cruithne#

[Aquí pueden poner una mejor descripción]
A este repositorio sólo tenemos acceso yo y los tres integrantes del grupo.

El flujo de trabajo que recomiendo es similar a este:

![Workflow](http://whygitisbetterthanx.com/images/workflow-b.png)

* Cada integrante del grupo hace un *fork* de este repositorio.
* Agregan como remotos (con `git remote add ...`) a los otros forks de su grupo.
* Hacen trabajo local, con *commits* y *branches* y toda la onda.
* Si son paranoicos, pueden hacer un `push` a su fork (que es una **versión remota de su copia de este repositorio original**) cuando terminen de programar cada día (uno nunca sabe cuándo la compu no volverá a encender).
* Mientras trabajan localmente, otros de su grupo pueden hacer `push` a sus propios repos y ustedes pueden hacer `pull` y resolver los conflictos si salen
* Cuando todos estén seguros de que sus cambios están bien, designan a un valiente que hará pull de todos los otros y `push` a este repositorio.
* Para probar la app en internet, pueden hacer `push` de este repositorio a heroku.
* Y así hasta el final del trimestre.


#Artículos de apoyo#

* Para entender cómo funciona git: [la parábola git](http://tom.preston-werner.com/2009/05/19/the-git-parable.html) y [gitref](http://gitref.org/)
* Flujos de trabajo [en git](http://whygitisbetterthanx.com/#any-workflow)
* Cómo trabajar en grupos usando `forks`: <http://help.github.com/forking/>
* La [ayuda de github](http://help.github.com)

##Prerrequisitos para publicar en heroku##
Como dice en la [guía de heroku](http://docs.heroku.com/quickstart) :

* Una aplicación en heroku requiere que se tenga una cuenta en [heroku.com](http://heroku.com)
* Se deberían tener llaves `ssh` generadas, si se está usando github, [ya deberían estarlo](http://help.github.com/linux-key-setup/)
* Se puede crear la aplicación con `heroku create NOMBRE_DE_APP`
* Para publicarla: `git push heroku master`




