let ticks = 0
let empty_obstacle = 0
let obstacles: game.LedSprite[] = []
let bird: game.LedSprite = null
let index = 0
let obstacle = 0
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, -1)
    })
    input.onButtonPressed(Button.A, function () {
        bird.change(LedSpriteProperty.Y, 1)
        })
        input.onButtonPressed(Button.AB, function () {
            game.pause()
            })
            bird = game.createSprite(0, 2)
            bird.set(LedSpriteProperty.Blink, 300)
            obstacles = []
            index = 0
            basic.forever(function () {
                while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
                        obstacles.removeAt(0).delete()
                            }
                                for (let obstacle of obstacles) {
                                        obstacle.change(LedSpriteProperty.X, -1)
                                            }
                                                if (ticks % 3 == 0) {
                                                        empty_obstacle = Math.randomRange(0, 4)
                                                                for (let index = 0; index <= 4; index++) {
                                                                            if (index != empty_obstacle) {
                                                                                            obstacles.push(game.createSprite(4, index))
                                                                                                        }
                                                                                                                }
                                                                                                                    }
                                                                                                                        for (let obstacle of obstacles) {
                                                                                                                                if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
                                                                                                                                            game.gameOver()
                                                                                                                                                    }
                                                                                                                                                        }
                                                                                                                                                            ticks += 1
                                                                                                                                                                basic.pause(1000)
                                                                                                                                                                })
                                                                                                                                                                