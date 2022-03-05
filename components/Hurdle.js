AFRAME.registerComponent("birds", {
    init: function(){
        for(var i = 1; i <= 20; i++){
            var id = `hurdle${i}` //'hurdle'+id
            var posX = (Math.random()*1000 + (-1000))
            var posY = (Math.random()*5 + (-2))
            var posZ = (Math.random()*3000 + (-1000))

            var position = {x: posX, y: posY, z: posZ}
            this.createHurdles(id, position)
        }
        console.log("hello")
    },
    createHurdles: function(id, position){
        var birdEl = document.createElement("a-entity")
        birdEl.setAttribute("id", id)
        birdEl.setAttribute("position", position)
        birdEl.setAttribute("scale", {x: 500, y: 500, z: 500})
        birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf")
        birdEl.setAttribute("animation-mixer", {})

        var terrianEl = document.querySelector("#terrain")
        terrianEl.appendChild(birdEl)
        console.log("hurdles")
    }
})